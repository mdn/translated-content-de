---
title: Node.js-Server ohne Framework
slug: Learn/Server-side/Node_server_without_framework
l10n:
  sourceCommit: f75b2c86ae4168e59416aed4c7121f222afc201d
---

{{LearnSidebar}}

Dieser Artikel bietet einen einfachen statischen Dateiserver, der mit reinem [Node.js](https://nodejs.org/en/) ohne die Verwendung eines Frameworks erstellt wurde. Der aktuelle Stand von Node.js ist so, dass fast alles, was wir benötigen, durch die eingebauten APIs bereitgestellt wird und nur wenige Zeilen Code erforderlich sind.

## Beispiel

Ein einfacher statischer Dateiserver, der mit Node.js erstellt wurde:

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
  jpg: "image/jpg",
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

Als Nächstes haben wir eine Funktion zum Erstellen des Servers. `https.createServer` gibt ein `Server`-Objekt zurück, das wir durch Lauschen auf `PORT` starten können.

```js
http
  .createServer((req, res) => {
    /* handle http requests */
  })
  .listen(PORT);

console.log(`Server running at http://127.0.0.1:${PORT}/`);
```

Die asynchrone Funktion `prepareFile` gibt die Struktur zurück: `{ found: boolean, ext: string, stream: ReadableStream }`. Wenn die Datei bereitgestellt werden kann (der Serverprozess hat Zugriff und es wurde keine Pfad-Traversierungsschwachstelle gefunden), geben wir den HTTP-Status `200` als `statusCode` zurück, was Erfolg anzeigt (ansonsten geben wir `HTTP 404` zurück). Beachten Sie, dass andere Statuscodes in `http.STATUS_CODES` zu finden sind. Mit dem Status `404` geben wir den Inhalt der Datei `'/404.html'` zurück.

Die Erweiterung der angeforderten Datei wird analysiert und in Kleinbuchstaben umgewandelt. Danach suchen wir in der Sammlung `MIME_TYPES` nach den richtigen [MIME-Typen](/de/docs/Web/HTTP/MIME_types). Wenn keine Übereinstimmungen gefunden werden, verwenden wir `application/octet-stream` als Standardtyp.

Schließlich senden wir die angeforderte Datei, wenn keine Fehler vorliegen. Der `file.stream` enthält einen `Readable`-Stream, der in `res` (eine Instanz des `Writable`-Streams) geleitet wird.

```js
res.writeHead(statusCode, { "Content-Type": mimeType });
file.stream.pipe(res);
```
