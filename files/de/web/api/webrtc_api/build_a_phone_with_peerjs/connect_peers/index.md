---
title: Die Peers verbinden
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}

Im letzten Artikel haben wir unseren Server eingerichtet, aber er macht noch nichts, weil wir noch nichts bereitstellen. Dies ist der Teil, auf den Sie gewartet haben — tatsächlich die Client-seitige Peer-Verbindung und Anruflogik zu erstellen. Es wird ein umfangreicher Prozess sein, aber wir haben ihn in zahlreiche Unterabschnitte aufgeteilt, damit Sie die verschiedenen Teile in leicht verdaulichen Häppchen angehen können.

1. Zuerst erstellen Sie eine `script.js`-Datei am gleichen Ort wie die anderen — hier wird Ihre gesamte Logik stattfinden.
2. Wir müssen ein Peer-Objekt mit einer ID erstellen. Die ID wird verwendet, um zwei Peers miteinander zu verbinden, und wenn Sie keine erstellen, wird eine dem Peer zugewiesen. Fügen Sie das Folgende in `script.js` hinzu:

   ```js
   const peer = new Peer(
     `${Math.floor(Math.random() * 2 ** 18)
       .toString(36)
       .padStart(4, 0)}`,
     {
       host: location.hostname,
       debug: 1,
       path: "/myapp",
     },
   );
   ```

3. Sie müssen den Peer dann an das Fenster anhängen, damit er zugänglich ist. Fügen Sie die folgende Zeile unter Ihrem vorherigen Code hinzu:

   ```js
   window.peer = peer;
   ```

4. In einem anderen Terminalfenster starten Sie den Peer-Server, indem Sie den folgenden Befehl im Stammverzeichnis Ihrer Telefonanwendung ausführen:

   ```bash
   peerjs --port 443 --key peerjs --path /myapp
   ```

Das sieht dem Peer-Server sehr ähnlich, den wir im letzten Schritt erstellt haben; dies ist der clientseitige Teil. Damit der Browser sich mit dem laufenden Peer-Server verbinden kann, müssen wir ihm sagen, wie; dies macht die obige Zeile.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}
