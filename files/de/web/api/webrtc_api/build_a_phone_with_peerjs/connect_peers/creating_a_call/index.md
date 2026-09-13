---
title: Einem Anruf tätigen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 8664d2b0fbc889ae1512a0f051ace8ac9e6bc6f5
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten – nun werden Sie Ihren Benutzern die Möglichkeit geben, Anrufe zu tätigen.

1. Zuerst erhalten Sie eine Referenz auf den in Ihrem HTML definierten "Call"-Button, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Anrufer auf "Call" klickt, möchten Sie ihn nach der Peer-ID des Peers fragen, den er anrufen möchte (diese speichern wir in der `code`-Variable in `getStreamCode()`) und dann möchten Sie mit diesem Code eine Verbindung herstellen. Fügen Sie den folgenden Code unter Ihrem vorherigen Code hinzu:

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

   Lassen Sie uns diesen Code durchgehen:
   - `const call = peer.call(code, window.localStream)`: Dies wird einen Anruf mit dem `code` und `window.localStream`, die wir zuvor zugewiesen haben, erstellen. Beachten Sie, dass der `localStream` der `localStream` des Benutzers sein wird. Für Anrufer A wird es also ihr Strom sein und für B ihr eigener Strom.
   - `call.on('stream', (stream) => {` : peerJS bietet uns ein `stream`-Event, das Sie mit dem erstellten `call` verwenden können. Wenn ein Anruf streamt, müssen Sie sicherstellen, dass der Remote-Stream, der vom Anruf kommt, den richtigen HTML-Elementen und dem Fenster zugewiesen wird, hier werden Sie das tun.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann in Ihrem Fenster-HTML wie zuvor einstellen müssen. Hier erhalten Sie Ihr Remote-`<audio>`-Element und weisen den an die Funktion übergebenen Stream der `srcObject`-Eigenschaft zu.
   - Stellen Sie sicher, dass das Attribut `autoplay` des Elements auch auf `true` gesetzt ist.
   - Stellen Sie sicher, dass der `peerStream` des Fensters auf den an die Funktion übergebenen Stream gesetzt ist.
   - Schließlich möchten Sie die richtigen Inhalte anzeigen, rufen Sie also die zuvor erstellte Funktion `showConnectedContent()` auf.

3. Um dies zu testen, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem von ihnen auf "Call". Sie sollten Folgendes sehen:

   ![Zwei Bildschirme nebeneinander, beide mit einem cremefarbenen Hintergrund mit den Worten "phone a friend" in fetter, dunkelgrüner Schrift als Überschrift. Der erste Bildschirm zeigt "Your device ID is: 3b77" und der zweite "Your device ID is: 2doa", direkt unter dem Titel und "please use headphones!" darunter. Danach folgt ein großer dunkelgrüner Button mit "Call", geschrieben in der gleichen cremefarbenen Farbe des Hintergrunds. Der zweite Bildschirm hat einen Browserdialog, der nach einer Peer-ID fragt.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers eingeben, wird der Anruf verbunden!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf anzunehmen oder abzulehnen. Das werden wir als nächstes tun.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
