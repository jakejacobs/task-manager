require('../src/db/mongoose');
const Task = require('../src/models/task');

// Task.findByIdAndDelete('60e30d99233de4685f15774e')
// 	.then((task) => {
// 		console.log(task);
// 		return Task.countDocuments({ completed: false });
// 	})
// 	.then((result) => {
// 		console.log(result);
// 	})
// 	.catch((e) => {
// 		console.log(e);
// 	});

const deleteTaskAndCount = async () => {
	const deletedItem = await Task.findByIdAndDelete('60e2fd8dc0091e59040f239e');
	console.log(deletedItem);
	const remainingCount = await Task.countDocuments({ completed: false });
	return remainingCount;
};

deleteTaskAndCount()
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
