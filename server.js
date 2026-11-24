// Optional local server for testing the form's POST request in DevTools > Network.
// Requires Node.js. It stores nothing and prints only the field NAMES it received
// (with the length of each value), never the values, so no personal data is logged.
const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const root = __dirname;
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".txt": "text/plain; charset=utf-8",
  ".md": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/submit") {
    let body = "";
    req.on("data", chunk => { body += chunk; if (body.length > 10000) req.destroy(); });
    req.on("end", () => {
      const submitted = querystring.parse(body);
      const summary = Object.keys(submitted).map(k => k + " (" + String(submitted[k]).length + " chars)");
      console.log("Received fields:", summary.join(", ") || "none");
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.end(JSON.stringify({ received: Object.keys(submitted) }));
    });
    return;
  }

  const requested = req.url === "/" ? "/index.html" : decodeURIComponent(req.url.split("?")[0]);
  const filePath = path.join(root, requested);
  if (!filePath.startsWith(root)) {
    res.writeHead(403); res.end("Forbidden"); return;
  }
  fs.readFile(filePath, (error, data) => {
    if (error) { res.writeHead(404); res.end("Not found"); return; }
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}).listen(5500, "127.0.0.1", () => console.log("Course mini-site running at http://localhost:5500"));
