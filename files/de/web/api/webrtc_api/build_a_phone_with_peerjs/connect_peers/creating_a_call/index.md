---
title: Einen Anruf erstellen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten — nun geben Sie Ihren Nutzern die Möglichkeit, Anrufe zu tätigen.

1. Zuallererst erhalten Sie eine Referenz auf die "Anrufen"-Taste, die im HTML definiert ist, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Nutzer auf "Anrufen" klickt, werden Sie sie nach der Peer-ID des Peers fragen, den sie anrufen möchten (die wir in der Variablen `code` in `getStreamCode()` speichern) und dann möchten Sie mit diesem Code eine Verbindung herstellen. Fügen Sie Folgendes unter Ihrem vorherigen Code hinzu:

   ```js
   callBtn.addEventListener("click", () => {
     getStreamCode();
     connectPeers();
     const call = peer.call(code, window.localStream); // A

     call.on("stream", (stream) => {
       // B
       window.remoteAudio.srcObject = stream;
       window.remoteAudio.autoplay = true;
       window.peerStream = stream;
       showConnectedContent();
     });
   });
   ```

   Gehen wir den Code durch:
   - `const call = peer.call(code, window.localStream)`: Dies erstellt einen Anruf mit dem `code` und `window.localStream`, die wir zuvor zugewiesen haben. Beachten Sie, dass der `localStream` der `localStream` des Nutzers sein wird. Für den Anrufer A wird es ihr Stream sein und für B, ihr eigener Stream.
   - `call.on('stream', (stream) => {`: peerJS gibt uns ein `stream`-Ereignis, das Sie auf dem erstellten `call` verwenden können. Wenn ein Anruf mit dem Streaming beginnt, müssen Sie sicherstellen, dass der entfernte Stream vom Anruf den richtigen HTML-Elementen und Fenstern zugewiesen wird, und hier machen Sie das.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann wie zuvor auf das HTML Ihres Fensters setzen müssen. Hier erhalten wir Ihr entferntes `<audio>`-Element und weisen den zur Funktion übergebenen Stream der `srcObject`-Eigenschaft zu.
   - Stellen Sie sicher, dass das `autoplay`-Attribut des Elements ebenfalls auf `true` gesetzt ist.
   - Stellen Sie sicher, dass der `peerStream` des Fensters auf den zur Funktion übergebenen Stream gesetzt ist.
   - Zum Schluss möchten Sie den korrekten Inhalt anzeigen, also rufen Sie die `showConnectedContent()`-Funktion auf, die Sie zuvor erstellt haben.

3. Um dies auszuprobieren, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem davon auf Anrufen. Sie sollten dies sehen:

   ![Zwei Bildschirme nebeneinander, beide mit einem cremefarbenen Hintergrund und den Wörtern 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. Der erste Bildschirm hat 'Ihre Geräte-ID ist: 3b77' und der zweite 'Ihre Geräte-ID ist: 2doa' unmittelbar unterhalb des Titels und 'bitte Kopfhörer verwenden!' darunter. Anschließend ein großer dunkelgrüner Knopf mit 'Call', was in der gleichen Cremefarbe des Hintergrunds geschrieben ist. Der zweite Bildschirm hat einen Browser-Dialog, der nach einer Peer-ID fragt.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers eingeben, wird der Anruf verbunden!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf anzunehmen oder abzulehnen. Das machen wir als nächstes.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
