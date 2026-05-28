const http = require('http');
const static = require('node-static');
const querystring = require('node:querystring');

const port = process.env.PORT || 5002;

const file = new static.Server('./exercise');

const server = http.createServer((req, res) => {
  if (req.method === 'GET' && req.url === '/') {
    file.serveFile('/welcome.html', 200, {}, req, res);
  } else if (req.method === 'GET' && req.url === '/form') {
    file.serveFile('/form.html', 200, {}, req, res);
  } else if (req.method === 'POST' && req.url === '/formExerciseSubmit') {
    let body = '';

    req.on('data', (chunk) => {
      body += chunk;
    });

    req.on('end', () => {
      const userdata = querystring.parse(body);
      const { usernameInput: name, emailInput: email } = userdata;

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write('<h1>Thank you for submitting your information:</h1>');
      res.write(`<h1>Name: ${name}</h1>`);
      res.write(`<h1>Email: ${email}</h1>`);
      res.end();
    });
  } else {
    res.writeHead(404, { 'Content-Type': 'text/html' });
    res.end('<h1>404 Not Found</h1>');
  }
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});