require('../src/db/mongoose');
const User = require('../src/models/user');

const updateAgeAndCount = async (id, age) => {
	const updatedItem = await User.findByIdAndUpdate(id, { age });
	console.log(updatedItem);
	const remainingCount = await User.countDocuments({ age });
	return remainingCount;
};

updateAgeAndCount('60e315d5b79d157521e94de2', 25)
	.then((result) => {
		console.log(result);
	})
	.catch((e) => {
		console.log(e);
	});
