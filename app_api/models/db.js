const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://kattojuprashanth238:8x7XzAf25lZyttJP@cluster0.pf6kpxs.mongodb.net/';
//8x7XzAf25lZyttJP


mongoose.connect(connectionString, { dbName: 'sccprojects', useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;

db.on('error',console.error.bind(console,'MongoDB connection error'));
db.once('open',()=>{
    console.log('Connected to MongoDB');
});

module.exports = db;    // Export the active connection.