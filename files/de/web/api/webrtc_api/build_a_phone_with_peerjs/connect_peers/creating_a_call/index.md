---
title: Creating a Call
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 65cd9754ed95f116b641c68cad80f14ecf580b41
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten — nun geben Sie Ihren Nutzern die Möglichkeit, Anrufe zu tätigen.

1. Zuerst holen Sie sich eine Referenz auf den "Call"-Button, der im HTML definiert ist, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Anrufer auf "Call" klickt, möchten Sie nach der Peer-ID des Peers fragen, den er anrufen möchte (die wir in der Variable `code` in `getStreamCode()` speichern) und dann eine Verbindung mit diesem Code erstellen. Fügen Sie das Folgende unter Ihrem vorherigen Code hinzu:

   ```js
   callBtn.addEventListener("click", () => {
     getStreamCode();
     connectPeers();
     const call = peer.call(code, window.localStream); // A

     call.on("stream", (stream) => {
       // B
       window.remoteAudio.srcObject = stream; // C
       window.remoteAudio.autoplay = true; // D
       window.peerStream = stream; //E
       showConnectedContent(); //F    });
     });
   });
   ```

   Lassen Sie uns diesen Code durchgehen:

   - `const call = peer.call(code, window.localStream)`: Dies wird einen Anruf mit dem `code` und `window.localStream` erstellen, die wir zuvor zugewiesen haben. Beachten Sie, dass das `localStream` der `localStream` des Nutzers sein wird. Also für Anrufer A wird es sein Stream sein und für B ihr eigener Stream.
   - `call.on('stream', (stream) => {` : PeerJS gibt uns ein `stream`-Ereignis, das Sie bei dem erstellten `call` verwenden können. Wenn ein Anruf mit dem Streaming beginnt, müssen Sie sicherstellen, dass der Remote-Stream, der vom Anruf stammt, den korrekten HTML-Elementen und dem Fenster zugewiesen wird, hier wird dies gemacht.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann in Ihrem Fenster-HTML setzen müssen, wie Sie es zuvor getan haben. Hier erhalten Sie Ihr Remote-`<audio>`-Element und weisen den an die Funktion übergebenen Stream der Eigenschaft `srcObject` zu.
   - Stellen Sie sicher, dass das `autoplay`-Attribut des Elements ebenfalls auf `true` gesetzt ist.
   - Stellen Sie sicher, dass das `peerStream` des Fensters auf den an die Funktion übergebenen Stream gesetzt ist.
   - Schließlich möchten Sie den korrekten Inhalt anzeigen, also rufen Sie die zuvor erstellte Funktion `showConnectedContent()` auf.

3. Um dies zu testen, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem von ihnen auf Call. Sie sollten dies sehen:

   ![Zwei Bildschirme nebeneinander, beide mit einem cremefarbenen Hintergrund und den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. Der erste Bildschirm zeigt 'Your device ID is: 3b77' und der zweite 'Your device ID is: 2doa', direkt unter dem Titel und 'please use headphones!' darunter. Danach folgt ein großer dunkelgrüner Button mit 'Call', geschrieben in derselben Cremefarbe des Hintergrunds. Der zweite Bildschirm zeigt einen Browser-Dialog, der nach einer Peer-ID fragt.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers eingeben, wird der Anruf verbunden!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf anzunehmen oder abzulehnen. Das werden wir als Nächstes tun.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
