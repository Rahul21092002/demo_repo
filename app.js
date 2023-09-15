const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Hi, this is the home page');
    return
  } if (req.url === '/about') {
    res.end('Hi there, this is the about page');
    return
  } else {
    res.end(`
      <h1>Oops!!</h1>
      <p>The page you are looking for doesn't seem to exist.</p>
      <a href="/">Back to home</a>
    `);
  }
}).listen(2000, () => {
  console.log('Server running at http://localhost:2000');
});


 