---
title: Verbinden der Peers
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}

Im letzten Artikel haben wir unseren Server eingerichtet, aber er tut noch nichts, da wir nichts bereitstellen. Dies ist der Teil, auf den Sie gewartet haben — die eigentliche Erstellung der Peer-Verbindung und Anruflogik auf der Client-Seite. Dies wird ein umfangreicher Prozess, aber wir haben ihn in zahlreiche Unterabschnitte aufgeteilt, damit Sie die verschiedenen Teile in leicht verdaulichen Abschnitten angehen können.

1. Erstellen Sie zunächst eine `script.js` Datei im selben Verzeichnis wie die anderen — hier wird Ihre gesamte Logik untergebracht.
2. Wir müssen ein Peer-Objekt mit einer ID erstellen. Die ID wird verwendet, um zwei Peers miteinander zu verbinden, und wenn Sie keine erstellen, wird dem Peer eine zugewiesen. Fügen Sie Folgendes zu `script.js` hinzu:

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

4. Starten Sie in einem anderen Terminalfenster den Peer-Server, indem Sie den folgenden Befehl im Stammverzeichnis Ihres Telefon-App-Verzeichnisses ausführen:

   ```bash
   peerjs --port 443 --key peerjs --path /myapp
   ```

Dies sieht dem Peer-Server, den wir im letzten Schritt erstellt haben, sehr ähnlich; dies ist der clientseitige Teil. Damit der Browser eine Verbindung zum laufenden Peer-Server herstellen kann, müssen wir ihm sagen, wie; genau das macht die obige Zeile.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Build_the_server", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission")}}
