---
title: Ein Anruf erstellen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call
l10n:
  sourceCommit: 65cd9754ed95f116b641c68cad80f14ecf580b41
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}

Spannende Zeiten — jetzt geben Sie Ihren Nutzern die Möglichkeit, Anrufe zu tätigen.

1. Zuerst erhalten Sie eine Referenz auf den "Call"-Button, der im HTML definiert ist, indem Sie Folgendes am Ende von `script.js` hinzufügen:

   ```js
   const callBtn = document.querySelector(".call-btn");
   ```

2. Wenn ein Anrufer auf "Call" klickt, möchten Sie ihn nach der Peer-ID des Peers fragen, den er anrufen möchte (diese werden wir in der Variablen `code` in `getStreamCode()` speichern), und dann möchten Sie eine Verbindung mit diesem Code erstellen. Fügen Sie das Folgende unter Ihrem vorherigen Code hinzu:

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

   - `const call = peer.call(code, window.localStream)`: Dies wird einen Anruf mit dem `code` und `window.localStream`, den wir zuvor zugewiesen haben, erstellen. Beachten Sie, dass der `localStream` der `localStream` des Benutzers sein wird. Für Anrufer A wird es also ihr Stream sein und für B ihr eigener Stream.
   - `call.on('stream', (stream) => {` : peerJS gibt uns ein `stream`-Ereignis, das Sie auf dem erstellten `call` verwenden können. Wenn ein Anruf zu streamen beginnt, müssen Sie sicherstellen, dass der Remote-Stream, der vom Anruf kommt, den korrekten HTML-Elementen und dem Fenster zugewiesen wird. Das tun Sie hier.
   - Die anonyme Funktion nimmt ein `MediaStream`-Objekt als Argument, das Sie dann wie zuvor in Ihrem Fenster-HTML setzen müssen. Hier erhalten Sie Ihr Remote-`<audio>`-Element und weisen den Stream, der der Funktion übergeben wird, der `srcObject`-Eigenschaft zu.
   - Stellen Sie sicher, dass das `autoplay`-Attribut des Elements ebenfalls auf `true` gesetzt ist.
   - Stellen Sie sicher, dass der `peerStream` des Fensters auf den Stream gesetzt wird, der der Funktion übergeben wird.
   - Schließlich möchten Sie den korrekten Inhalt anzeigen, also rufen Sie die `showConnectedContent()`-Funktion auf, die Sie zuvor erstellt haben.

3. Um dies zu testen, öffnen Sie `localhost:8000` in zwei Browserfenstern und klicken Sie in einem davon auf Call. Sie sollten Folgendes sehen:

   ![Zwei Bildschirme nebeneinander, beide mit cremefarbenem Hintergrund und den Worten 'phone a friend' in fettem, dunkelgrünem Schriftzug als Überschrift. Der erste Bildschirm zeigt 'Your device ID is: 3b77' und der zweite 'Your device ID is: 2doa', direkt unter dem Titel und 'please use headphones!' darunter. Weiterhin ein großer dunkelgrüner Button mit 'Call' in derselben Cremefarbe wie der Hintergrund. Der zweite Bildschirm hat einen Browserdialog, der um eine Peer-ID bittet.](screens_side_by_side.png)

   Wenn Sie die ID des anderen Peers eingeben, wird der Anruf verbunden!

Das funktioniert bisher alles, aber wir müssen dem anderen Browser die Möglichkeit geben, den Anruf zu beantworten oder abzulehnen. Das werden wir als Nächstes tun.

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Create_a_peer_connection", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call")}}
