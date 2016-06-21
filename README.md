# Backend - Cluster.JS
### Huber, Krabath

This is a Node.JS app working with Express.JS and Cluster.JS.

start the app with Cluster.JS (Port: 3000)
```bash
npm start
```

start the app without Cluster.JS (Port: 4000)
```bash
npm run slow
```


### Benchmark Test
- We did a benchmark test with apache benchmark.
- You need to choose the port 3000 or port 4000.
- "-c 250" means, that ab is sending 250 requests at once.
- With this configuration, we get results, as we expected (tested on a Intel i7 CPU - 8 cores).

```bash
ab -k -n 50000 -c 250 -t 20 http://127.0.0.1:4000/
```

### Results
- You will see screenshots of our benchmark test in the "/benchmark" directory.
