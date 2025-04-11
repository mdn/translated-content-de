---
title: Node.js-Server ohne Framework
slug: Learn_web_development/Extensions/Server-side/Node_server_without_framework
l10n:
  sourceCommit: 48d220a8cffdfd5f088f8ca89724a9a92e34d8c0
---

Dieser Artikel zeigt einen statischen Dateiserver, der in [Node.js](https://nodejs.org/en/) ohne Verwendung von Frameworks erstellt wurde. Der aktuelle Stand von Node.js ist so, dass fast alles, was wir für den statischen Dateiserver benötigen, durch eingebaute APIs und wenige Codezeilen bereitgestellt wird.

## Beispiel

Ein statischer Dateiserver, der mit Node.js erstellt wurde:

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";

const PORT = 8000;

const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), "./static");

const toBool = [() => true, () => false];

const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url];
  if (url.endsWith("/")) paths.push("index.html");
  const filePath = path.join(...paths);
  const pathTraversal = !filePath.startsWith(STATIC_PATH);
  const exists = await fs.promises.access(filePath).then(...toBool);
  const found = !pathTraversal && exists;
  const streamPath = found ? filePath : STATIC_PATH + "/404.html";
  const ext = path.extname(streamPath).substring(1).toLowerCase();
  const stream = fs.createReadStream(streamPath);
  return { found, ext, stream };
};

http
  .createServer(async (req, res) => {
    const file = await prepareFile(req.url);
    const statusCode = file.found ? 200 : 404;
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default;
    res.writeHead(statusCode, { "Content-Type": mimeType });
    file.stream.pipe(res);
    console.log(`${req.method} ${req.url} ${statusCode}`);
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

### Aufschlüsselung

Die folgenden Zeilen importieren interne Node.js-Module.

```js
import * as fs from "node:fs";
import * as http from "node:http";
import * as path from "node:path";
```

Als Nächstes haben wir eine Funktion zur Erstellung des Servers. `https.createServer` gibt ein `Server`-Objekt zurück, das wir starten können, indem wir auf `PORT` lauschen.

```js
http
  .createServer((req, res) => {
    /* handle http requests */
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

Die asynchrone Funktion `prepareFile` gibt folgende Struktur zurück: `{ found: boolean, ext: string, stream: ReadableStream }`. Wenn die Datei bereitgestellt werden kann (der Serverprozess hat Zugriff und es wird keine Path-Traversal-Sicherheitslücke gefunden), geben wir den HTTP-Status `200` als `statusCode` an, der Erfolg anzeigt (andernfalls geben wir `HTTP 404` zurück). Beachten Sie, dass andere Statuscodes in `http.STATUS_CODES` zu finden sind. Mit dem `404`-Status geben wir den Inhalt der Datei `'/404.html'` zurück.

Die Erweiterung der angeforderten Datei wird analysiert und in Kleinbuchstaben umgewandelt. Danach durchsuchen wir die `MIME_TYPES`-Sammlung nach den richtigen [MIME-Typen](/de/docs/Web/HTTP/Guides/MIME_types). Wenn keine Übereinstimmungen gefunden werden, verwenden wir `application/octet-stream` als Standardtyp.

Schließlich senden wir die angeforderte Datei, wenn keine Fehler vorliegen. Der `file.stream` enthält einen `Readable`-Stream, der in `res` (eine Instanz des `Writable`-Streams) geleitet wird.

```js
res.writeHead(statusCode, { "Content-Type": mimeType });
file.stream.pipe(res);
```
