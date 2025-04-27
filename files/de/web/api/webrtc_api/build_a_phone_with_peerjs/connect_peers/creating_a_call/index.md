---
title: Einen Anruf erstellen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten — jetzt geben Sie Ihren Benutzern die Möglichkeit, Anrufe zu tätigen.

1. Zuerst erhalten Sie eine Referenz auf den "Call"-Button, der im HTML definiert ist, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Anrufer auf "Call" klickt, sollten Sie ihn nach der Peer-ID des Peers fragen, den er anrufen möchte (wir speichern sie in der Variable `code` in `getStreamCode()`), und dann möchten Sie eine Verbindung mit diesem Code herstellen. Fügen Sie folgendes unter Ihrem bisherigen Code hinzu:

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

   - `const call = peer.call(code, window.localStream)`: Dies erstellt einen Anruf mit dem `code` und `window.localStream`, die wir zuvor zugewiesen haben. Beachten Sie, dass der `localStream` der `localStream` des Benutzers sein wird. Also für Anrufer A wird es sein Stream sein & für B ihr eigener Stream.
   - `call.on('stream', (stream) => {` : peerJS bietet ein `stream`-Ereignis, das Sie für den erstellten `call` verwenden können. Wenn ein Anruf zu streamen beginnt, müssen Sie sicherstellen, dass der Remote-Stream aus dem Anruf den richtigen HTML-Elementen und Fenstern zugewiesen wird. Hier erreichen Sie das.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann wie zuvor Ihrem Fenster-HTML zuweisen müssen. Hier erhalten Sie Ihr entferntes `<audio>`-Element und weisen den Stream, der zur Funktion übergeben wird, der `srcObject`-Eigenschaft zu.
   - Stellen Sie sicher, dass das `autoplay`-Attribut des Elements ebenfalls auf `true` gesetzt ist.
   - Stellen Sie sicher, dass das `peerStream` des Fensters auf den Stream gesetzt ist, der zur Funktion übergeben wird.
   - Schließlich möchten Sie den korrekten Inhalt anzeigen, also rufen Sie die von Ihnen zuvor erstellte Funktion `showConnectedContent()` auf.

3. Um dies zu testen, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem der Fenster auf Call. Sie sollten Folgendes sehen:

   ![Zwei Bildschirme nebeneinander, beide mit einem cremefarbenen Hintergrund und den Wörtern 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. Der erste Bildschirm zeigt 'Your device ID is: 3b77' und der zweite 'Your device ID is: 2doa', unmittelbar unterhalb des Titels und 'please use headphones!' darunter. Anschließend ein großer dunkelgrüner Button mit 'Call' in der gleichen Cremefarbe des Hintergrunds. Der zweite Bildschirm hat einen Browser-Dialog, der nach einer Peer-ID fragt.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers angeben, wird die Verbindung hergestellt!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf anzunehmen oder abzulehnen. Das werden wir als nächstes tun.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
