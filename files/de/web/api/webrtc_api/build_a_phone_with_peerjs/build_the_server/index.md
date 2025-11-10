---
title: Aufbau des Servers
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
l10n:
  sourceCommit: e6d43da6c6d28a6ac92cdd47882809ffbdf987ce
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

In diesem Artikel richten wir den Server für unsere Telefon-App ein. Die Serverdatei wird wie eine normale Express-Serverdatei aussehen, mit einem Unterschied: dem Peer-Server.

1. Erstellen Sie zunächst eine Datei namens `server.js` im gleichen Verzeichnis wie die HTML- und CSS-Dateien, die Sie zuvor erstellt haben. Dies ist der Einstiegspunkt unserer App, wie in unserer `package.json` Datei definiert.
2. Sie müssen Ihren Code beginnen, indem Sie den Peer-Server am Anfang der `server.js` Datei einbinden, um sicherzustellen, dass wir Zugriff auf den Peer-Server haben:

   ```js
   const { ExpressPeerServer } = require("peer");
   ```

3. Dann müssen Sie den Peer-Server tatsächlich erstellen. Fügen Sie den folgenden Code unter Ihrer vorherigen Zeile hinzu:

   ```js
   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });
   ```

   Wir verwenden das `ExpressPeerServer` Objekt, um den Peer-Server zu erstellen und dabei einige Optionen zu übergeben. Der Peer-Server wird das Signalling, das für WebRTC erforderlich ist, für uns übernehmen, sodass wir uns nicht um STUN/TURN-Server oder andere Protokolle kümmern müssen.

4. Schließlich müssen Sie Ihrer App mitteilen, den `peerServer` zu verwenden, indem Sie `app.use(peerServer)` aufrufen. Ihre fertige `server.js` Datei sollte die anderen notwendigen Abhängigkeiten enthalten, die Sie in eine Serverdatei aufnehmen würden, sowie die `index.html` Datei zum Stammverzeichnis bereitstellen.

   Aktualisieren Sie `server.js`, sodass es folgendermaßen aussieht:

   ```js
   const express = require("express");
   const http = require("http");
   const path = require("path");
   const { ExpressPeerServer } = require("peer");

   const app = express();
   const server = http.createServer(app);
   const port = process.env.PORT || "8000";

   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });

   app.use(peerServer);

   app.use(express.static(path.join(__dirname)));

   app.get("/", (request, response) => {
     response.sendFile(`${__dirname}/index.html`);
   });

   server.listen(port);
   console.log(`Listening on: ${port}`);
   ```

5. Sie sollten in der Lage sein, über `localhost` auf Ihre App zuzugreifen (in unserer `server.js` verwenden wir Port 8000, aber Sie könnten eine andere Portnummer verwenden). Führen Sie `yarn start` (wobei `start` auf das Skript verweist, das Sie in `package.json` auf der vorherigen Seite deklariert haben) in Ihrem Terminal aus. Besuchen Sie `localhost:8000` in Ihrem Browser, und Sie sollten eine Seite sehen, die so aussieht:

   ![Ein cremefarbener Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'Connecting...' steht direkt darunter und 'please use headphones!' darunter. Darauf folgend ein großer dunkelgrüner Button mit 'Call' in der gleichen cremefarbenen Farbe des Hintergrunds.](connecting_screen.png)

Wenn Sie mehr über Peer.js erfahren möchten, schauen Sie sich das [Peer.js Server Repo auf GitHub](https://github.com/peers/peerjs-server) an.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}
