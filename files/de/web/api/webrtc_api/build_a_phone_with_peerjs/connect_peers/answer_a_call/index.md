---
title: Einen Anruf annehmen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}

Jetzt können unsere Benutzer einen Anruf tätigen, aber sie können keinen entgegennehmen. Fügen wir das nächste Teil des Puzzles hinzu, damit Benutzer Anrufe beantworten können, die an sie gerichtet sind.

1. Das peerJS-Framework bietet das `.on('call')`-Ereignis, das wir hier verwenden können. Fügen Sie dies am Ende von `script.js` hinzu:

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");
   });
   ```

   Zuerst fragen wir den Benutzer mit einer Bestätigungsabfrage, ob er den Anruf annehmen möchte. Dies zeigt ein Fenster auf dem Bildschirm an (wie im Bild gezeigt), in dem der Benutzer "OK" oder "Abbrechen" auswählen kann — dies entspricht einem zurückgegebenen booleschen Wert. Wenn Sie in Ihrem Browser auf "Call" klicken, sollte die folgende Aufforderung erscheinen:

   ![Eine Browser-Aufforderung, die fragt "Möchten Sie den Anruf annehmen?" mit zwei Optionen: "Abbrechen" und "Ok"](confirm_prompt.png)

   > [!WARNING]
   > Da wir eine `confirm`-Abfrage verwenden, um den Benutzer zu fragen, ob er den Anruf annehmen möchte, ist es wichtig, dass der Browser und der Tab, der angerufen wird, "aktiv" ist, was bedeutet, dass das Fenster nicht minimiert sein sollte und der Tab auf dem Bildschirm sichtbar und der Mausfokus irgendwo innerhalb der Seite sein sollte. Ideal wäre es, in einer Produktionsversion dieser App ein eigenes modales Fenster in HTML zu erstellen, das diese Einschränkungen nicht hätte.

2. Lassen Sie uns diesen Ereignis-Listener weiter ausarbeiten. Aktualisieren Sie ihn wie folgt:

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");

     if (answerCall) {
       call.answer(window.localStream); // A
       showConnectedContent(); // B
       call.on("stream", (stream) => {
         // C
         window.remoteAudio.srcObject = stream;
         window.remoteAudio.autoplay = true;
         window.peerStream = stream;
       });
     } else {
       console.log("call denied"); // D
     }
   });
   ```

   Lassen Sie uns die wichtigsten Teile dieses Codes durchgehen:
   - `call.answer(window.localStream)`: Wenn `answerCall` `true` ist, sollten Sie die `answer()`-Funktion von peerJS auf den Anruf aufrufen, um eine Antwort zu erstellen und den lokalen Stream zu übergeben.
   - `showCallContent`: Ähnlich wie bei dem, was Sie im Ereignis-Listener für den Anruf-Button getan haben, sollten Sie sicherstellen, dass die Person, die angerufen wird, den richtigen HTML-Inhalt sieht.
   - Alles im Block `call.on('stream', () => { }` ist genau dasselbe wie im Ereignis-Listener des Anruf-Buttons. Der Grund, warum Sie es hier ebenfalls hinzufügen müssen, ist, damit der Browser auch für die Person aktualisiert wird, die den Anruf annimmt.
   - Wenn die Person den Anruf ablehnt, werden wir einfach eine Nachricht in der Konsole protokollieren.

3. Der Code, den Sie jetzt haben, reicht aus, um einen Anruf zu tätigen und zu beantworten. Aktualisieren Sie Ihren Browser und testen Sie es. Sie sollten sicherstellen, dass beide Browser die Konsole geöffnet haben, da Sie sonst keine Aufforderung erhalten, den Anruf zu beantworten. Klicken Sie auf Anrufen, geben Sie die Peer-ID für den anderen Browser ein und beantworten Sie dann den Anruf. Die endgültige Seite sollte so aussehen:

   ![Zwei Bildschirme nebeneinander haben beide einen cremefarbenen Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'You're connected' steht unmittelbar darunter und 'please use headphones!' sowie 'You're automatically muted, please unmute yourself!' darunter. Darauf folgt ein großer dunkelroter Button mit 'Hang up', geschrieben in der gleichen cremefarbenen Farbe des Hintergrunds.](screens_side_by_side.png)

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}
