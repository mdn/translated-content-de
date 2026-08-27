---
title: Erstellen des Servers
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
l10n:
  sourceCommit: b3cd597b58940518a7712487ce94efc0881cb549
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

In diesem Artikel richten wir den Server für unsere Telefon-App ein. Die Serverdatei wird wie eine normale Express-Serverdatei aussehen, mit einem Unterschied: dem Peer-Server.

1. Erstellen Sie zuerst eine Datei mit dem Namen `server.js` am selben Ort wie die zuvor erstellten HTML- und CSS-Dateien. Dies ist der Einstiegspunkt unserer App, wie in unserer `package.json` Datei definiert.
2. Sie müssen Ihren Code damit beginnen, den Peer-Server am Anfang der `server.js` Datei einzubinden, um sicherzustellen, dass Sie Zugriff auf den Peer-Server haben:

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

   Wir verwenden das `ExpressPeerServer` Objekt, um den Peer-Server zu erstellen und übergeben dabei einige Optionen. Der Peer-Server wird die für WebRTC erforderliche Signalisierung für uns übernehmen, sodass wir uns nicht um STUN/TURN-Server oder andere Protokolle kümmern müssen.

4. Schließlich müssen Sie Ihrer App mitteilen, den `peerServer` zu verwenden, indem Sie `app.use(peerServer)` aufrufen. Ihre fertige `server.js` sollte die anderen notwendigen Abhängigkeiten enthalten, die Sie in einer Serverdatei einfügen würden, sowie die `index.html` Datei im Root-Pfad bereitstellen.

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

5. Sie sollten in der Lage sein, über `localhost` auf Ihre App zuzugreifen (in unserer `server.js` verwenden wir Port 8000, aber Sie könnten eine andere Portnummer verwenden). Führen Sie `yarn start` (wobei `start` sich auf das Skript bezieht, das Sie in der `package.json` auf der vorherigen Seite deklariert haben) in Ihrem Terminal aus. Besuchen Sie `localhost:8000` in Ihrem Browser und Sie sollten eine Seite sehen, die so aussieht:

   ![Ein cremiger Hintergrund mit den Worten 'phone a friend' in fettgedruckter, dunkelgrüner Schrift als Überschrift. 'Connecting...' steht sofort darunter und 'please use headphones!' darunter. Anschließend ein großer dunkelgrüner Knopf mit der Aufschrift 'Call' in der gleichen cremefarbenen Farbe wie der Hintergrund. ](connecting_screen.png)

Wenn Sie mehr über Peer.js erfahren möchten, schauen Sie sich das [Peer.js Server-Repo auf GitHub](https://github.com/peers/peerjs-server) an.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}
