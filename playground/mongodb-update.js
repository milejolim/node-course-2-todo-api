const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}

	//deleteMany
	// db.collection('Todos').deleteMany({ text: 'Eat lunch' }).then((result) => {
	//     console.log(result);
	// });

	// deleteOne
	// db.collection('Todos').deleteOne({ text: 'Eat lunch' }).then((result) => {
	//     console.log(result);
	// });

	//findOneAndUpdate
	db.collection('Todos').findOneAndUpdate(
		{
			text: 'Eat lunch'
		}, {
			$set: {
				completed: false
			}
		}, {
			returnOriginal: false
		}
	).then((result) => {
		console.log(result);
	});

	db.collection('Users').findOneAndUpdate(
		{
			name: 'Levi'
		}, {
			$set: {
				name: 'Halim'
			},
			$inc: {
				age: 1
			}

		}, {
			returnOriginal: false
		}
	).then((result) => {
		console.log(result);
	});

	// db.close();
});