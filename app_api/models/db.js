//
//
//SbAJ4DEAWdYrAzIA

const mongoose = require('mongoose');
const PORT = process.env.PORT || 3000
const readLine = require('readline');

let dbURL = 'mongodb+srv://kattojuprashanth238:SbAJ4DEAWdYrAzIA@cluster1.tpztbzm.mongodb.net/';

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB Connected: ' + process.env.MONGO_URI);
    } catch (error) {
        console.log('Error: ' + error);
        process.exit(1);
    }
}

const connect = () => {
    setTimeout(() => mongoose.connect(dbURL), 1000);
}

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to ' + dbURL);
});

mongoose.connection.on('error', err => {
    console.log('Error: ' + err);
    return connect();
});

mongoose.connection.on('disconnected', () => {
    console.log('Disconnected');
});

if (process.platform === 'win32') {
    const rl = readLine.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.on('SIGINT', () => {
        process.emit("SIGINT");
    });
}

async function gracefulShutdown(msg) {
    const closed = await mongoose.connection.close()
        .then(function () {
            console.log(`Mongoose disconnected through ${msg}`);
            process.exit();
        });
};

process.once('SIGUSR2', () => {
    gracefulShutdown('nodemon restart', () => {
        process.kill(process.pid, 'SIGUSR2');
    });
});
process.on('SIGINT', () => {
    gracefulShutdown('app termination', () => {
        process.exit(0);
    });
});
process.on('SIGTERM', () => {
    gracefulShutdown('Cyclic app shutdown', () => {
        process.exit(0);
    });
});

if (process.env.NODE_ENV === 'production') {
    connectDB().then(() => {
        app.listen(PORT, () => {
            console.log("listening for requests");
        })
    })
}
else {
    connect();
}
