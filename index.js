const express = require('express');
const app = express();
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;
 
// Master manages workers
if (cluster.isMaster) {
  // Fork workers
  for (var i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // log started workers
  cluster.on('online', function(worker) {
    console.log(`${worker.id}. worker ${worker.process.pid} ist online`);
  });
 
  // log died workers
  cluster.on('exit', (worker, code, signal) => {
    console.log(`${worker.id}. worker ${worker.process.pid} died`);
  });

// workers run express applications
} else {
  app.use(express.static('public'));

  app.listen(8000, function() {
    console.log('server is running on http://localhost:3000');
  });
}