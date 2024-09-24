---
title: Erstellen eines Anrufs
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 65cd9754ed95f116b641c68cad80f14ecf580b41
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten — jetzt geben Sie Ihren Nutzern die Möglichkeit, Anrufe zu tätigen.

1. Zuerst holen Sie sich eine Referenz auf die "Call"-Schaltfläche, die im HTML definiert ist, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Anrufer auf "Call" klickt, möchten Sie ihn nach der Peer-ID des Peers fragen, den er anrufen möchte (wir speichern diese in der Variable `code` in `getStreamCode()`) und dann mit diesem Code eine Verbindung herstellen. Fügen Sie Folgendes unter Ihrem vorherigen Code hinzu:

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

   - `const call = peer.call(code, window.localStream)`: Dies wird einen Anruf mit dem `code` und `window.localStream` erstellen, die wir zuvor zugewiesen haben. Beachten Sie, dass `localStream` der `localStream` des Nutzers sein wird. Für Anrufer A ist es also ihr Stream und für B ihr eigener Stream.
   - `call.on('stream', (stream) => {` : PeerJS gibt uns ein `stream`-Ereignis, das Sie beim erstellten `call` verwenden können. Wenn ein Anruf zu streamen beginnt, müssen Sie sicherstellen, dass der Remote-Stream vom Anruf den richtigen HTML-Elementen und Fenstern zugewiesen ist, dies ist der Ort, an dem Sie das tun.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann wie zuvor in das HTML Ihres Fensters setzen müssen. Hier holen wir Ihr Remote-`<audio>`-Element und weisen den Stream, der an die Funktion übergeben wird, der `srcObject`-Eigenschaft zu.
   - Stellen Sie sicher, dass das `autoplay`-Attribut des Elements auch auf `true` gesetzt ist.
   - Stellen Sie sicher, dass der `peerStream` des Fensters dem Stream zugewiesen wird, der an die Funktion übergeben wird.
   - Schließlich möchten Sie den richtigen Inhalt anzeigen, rufen Sie also die zuvor erstellte Funktion `showConnectedContent()` auf.

3. Um dies zu testen, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem der Fenster auf „Call“. Sie sollten Folgendes sehen:

   ![Zwei Bildschirme nebeneinander, beide mit einem cremefarbenen Hintergrund und den Worten "phone a friend" in fetter, dunkelgrüner Schrift als Überschrift. Auf dem ersten Bildschirm steht "Ihre Geräte-ID ist: 3b77" und auf dem zweiten "Ihre Geräte-ID ist: 2doa", steht direkt unter dem Titel und "bitte Kopfhörer benutzen!" darunter. Darauf folgt ein großer dunkelgrüner Button mit der Aufschrift 'Call' in derselben cremefarbenen Hintergrundfarbe. Auf dem zweiten Bildschirm gibt es ein Browserdialogfeld, das nach einer Peer-ID fragt.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers eingeben, wird der Anruf verbunden!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf anzunehmen oder abzulehnen. Das werden wir als Nächstes tun.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
