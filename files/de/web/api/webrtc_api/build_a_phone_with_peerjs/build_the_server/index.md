---
title: Den Server erstellen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server
l10n:
  sourceCommit: 23e1a97d50050a3b3518a4b2f67ccf42e5fd75b7
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}

In diesem Artikel richten wir den Server für unsere Telefon-App ein. Die Server-Datei wird wie eine normale Express-Server-Datei aussehen, mit einem Unterschied: dem Peer-Server.

1. Erstellen Sie zunächst eine Datei mit dem Namen `server.js` am gleichen Ort wie die zuvor erstellten HTML- und CSS-Dateien. Dies ist der Einstiegspunkt unserer App, wie in unserer `package.json` Datei definiert.
2. Sie müssen Ihren Code damit beginnen, den Peer-Server am Anfang der `server.js` Datei einzubinden, um sicherzustellen, dass wir Zugriff auf den Peer-Server haben:

   ```js
   const { ExpressPeerServer } = require("peer");
   ```

3. Erstellen Sie dann tatsächlich den Peer-Server. Fügen Sie den folgenden Code unter Ihrer vorherigen Zeile hinzu:

   ```js
   const peerServer = ExpressPeerServer(server, {
     proxied: true,
     debug: true,
     path: "/myapp",
     ssl: {},
   });
   ```

   Wir verwenden das `ExpressPeerServer` Objekt, um den Peer-Server zu erstellen und übergeben ihm dabei einige Optionen. Der Peer-Server wird das Signalisieren, das für WebRTC erforderlich ist, für uns übernehmen, sodass wir uns nicht um STUN/TURN-Server oder andere Protokolle kümmern müssen.

4. Schließlich müssen Sie Ihrer App mitteilen, den `peerServer` zu verwenden, indem Sie `app.use(peerServer)` aufrufen. Ihr fertiges `server.js` sollte die anderen notwendigen Abhängigkeiten enthalten, die Sie in einer Serverdatei einschließen würden, sowie die Bereitstellung der `index.html` Datei auf dem Root-Pfad.

   Aktualisieren Sie `server.js`, damit es wie folgt aussieht:

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

5. Sie sollten in der Lage sein, über `localhost` auf Ihre App zuzugreifen (in unserer `server.js` verwenden wir Port 8000, aber Sie können eine andere Portnummer verwenden). Führen Sie `yarn start` aus (wobei `start` auf das Skript verweist, das Sie auf der vorherigen Seite in `package.json` deklariert haben) in Ihrem Terminal. Besuchen Sie `localhost:8000` in Ihrem Browser und Sie sollten eine Seite sehen, die so aussieht:

   ![Ein cremefarbener Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'Connecting...' steht direkt darunter und 'please use headphones!' darunter. Es folgt ein großer dunkelgrüner Knopf mit 'Call' in der gleichen Cremefarbe des Hintergrunds. ](connecting_screen.png)

Wenn Sie mehr über Peer.js erfahren möchten, schauen Sie sich das [Peer.js Server-Repo auf GitHub](https://github.com/peers/peerjs-server) an.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Setup", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers")}}
