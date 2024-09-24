---
title: Den Server bauen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

In diesem Artikel richten wir den Server für unsere Telefon-App ein. Die Serverdatei wird wie eine normale Express-Serverdatei aussehen, mit einem Unterschied: dem Peer-Server.

1. Zuerst erstellen Sie eine Datei namens `server.js` im selben Verzeichnis wie die zuvor erstellten HTML- und CSS-Dateien. Dies ist der Einstiegspunkt unserer App, wie in unserer `package.json` Datei definiert.
2. Sie müssen Ihren Code beginnen, indem Sie den Peer-Server am Anfang der `server.js` Datei einbinden, um sicherzustellen, dass wir Zugriff auf den Peer-Server haben:

   ```js
   const { ExpressPeerServer } = require("peer");
   ```

3. Anschließend müssen Sie den Peer-Server tatsächlich erstellen. Fügen Sie den folgenden Code unter Ihrer vorherigen Zeile hinzu:

   ```js
   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });
   ```

   Wir verwenden das `ExpressPeerServer`-Objekt, um den Peer-Server zu erstellen, und übergeben ihm dabei einige Optionen. Der Peer-Server übernimmt für uns das Signalling, das für WebRTC erforderlich ist, sodass wir uns nicht um STUN/TURN-Server oder andere Protokolle kümmern müssen.

4. Schließlich müssen Sie Ihrer App mitteilen, dass sie den `peerServer` verwenden soll, indem Sie `app.use(peerServer)` aufrufen. Ihre fertige `server.js` sollte die anderen notwendigen Abhängigkeiten enthalten, die Sie in einer Serverdatei einschließen würden, sowie die Bereitstellung der `index.html` Datei im Stammverzeichnis.

   Aktualisieren Sie `server.js` so, dass es folgendermaßen aussieht:

   ```js
   const express = require("express");
   const http = require("http");
   const path = require("path");
   const app = express();
   const server = http.createServer(app);
   const { ExpressPeerServer } = require("peer");
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

5. Sie sollten in der Lage sein, sich über `localhost` mit Ihrer App zu verbinden (in unserer `server.js` verwenden wir Port 8000, aber Sie könnten eine andere Portnummer verwenden). Führen Sie `yarn start` (wobei sich `start` auf das Skript bezieht, das Sie auf der vorherigen Seite in `package.json` deklariert haben) in Ihrem Terminal aus. Besuchen Sie `localhost:8000` in Ihrem Browser und Sie sollten eine Seite sehen, die so aussieht:

   ![Ein cremefarbener Hintergrund mit den Worten "phone a friend" in fettgedruckter, dunkelgrüner Schrift als Überschrift. 'Connecting...' ist unmittelbar darunter und 'please use headphones!' darunter. Es folgt ein großer dunkelgrüner Knopf mit der Aufschrift 'Call' in derselben cremefarbenen Farbe des Hintergrunds. ](connecting_screen.png)

Wenn Sie mehr über Peer.js erfahren möchten, schauen Sie sich das [Peer.js Server-Repo auf GitHub](https://github.com/peers/peerjs-server) an.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}
