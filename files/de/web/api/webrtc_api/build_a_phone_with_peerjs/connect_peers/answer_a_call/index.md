---
title: Einen Anruf annehmen
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}

Jetzt können unsere Benutzer einen Anruf tätigen, aber sie können keinen entgegennehmen. Fügen wir das nächste Puzzlestück hinzu, damit Benutzer Anrufe, die an sie gerichtet sind, annehmen können.

1. Das peerJS-Framework stellt das `.on('call')`-Ereignis zur Verfügung, das wir hier verwenden werden. Fügen Sie dies am Ende von `script.js` hinzu:

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");
   });
   ```

   Zuerst fordern wir den Benutzer mit einem Bestätigungsdialog auf, den Anruf anzunehmen. Dies zeigt ein Fenster auf dem Bildschirm an (wie im Bild gezeigt), aus dem der Benutzer "OK" oder "Abbrechen" auswählen kann — dies ergibt einen zurückgegebenen booleschen Wert. Wenn Sie im Browser auf "Call" klicken, sollte der folgende Aufforderung erscheinen:

   ![Ein Browser-Prompt, der fragt: "Möchten Sie antworten?" mit zwei Optionen: "Abbrechen" und "Ok"](confirm_prompt.png)

   > [!WARNING]
   > Da wir einen `confirm`-Dialog verwenden, um den Benutzer zu fragen, ob er den Anruf annehmen möchte, ist es wichtig, dass der Browser und die Registerkarte, die angerufen werden, "aktiv" sind. Das bedeutet, dass das Fenster nicht minimiert und die Registerkarte auf dem Bildschirm sichtbar sein und irgendwo den Fokus der Maus haben sollte. Idealerweise würden Sie in einer Produktionsversion dieser App Ihr eigenes modales Fenster in HTML erstellen, das diese Einschränkungen nicht hat.

2. Lasst uns diesen Ereignislistener weiter ausarbeiten. Aktualisieren Sie ihn wie folgt:

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

   - `call.answer(window.localStream)`: Wenn `answerCall` `true` ist, sollten Sie die `answer()`-Funktion von peerJS auf den Anruf aufrufen, um eine Antwort zu erstellen, und dabei den lokalen Stream übergeben.
   - `showCallContent`: Ähnlich wie bei dem Event-Listener des Anruf-Buttons möchten Sie sicherstellen, dass die angerufene Person den richtigen HTML-Inhalt sieht.
   - Alles im Block `call.on('stream', () => { }` ist genau das gleiche wie im Ereignislistener des Anruf-Buttons. Der Grund, warum Sie es hier ebenfalls hinzufügen müssen, ist, dass der Browser auch für die Person, die den Anruf annimmt, aktualisiert wird.
   - Wenn die Person den Anruf ablehnt, werden wir einfach eine Nachricht im Console-Log ausgeben.

3. Der Code, den Sie jetzt haben, reicht aus, um einen Anruf zu erstellen und ihn zu beantworten. Laden Sie Ihre Browser neu und testen Sie es aus. Sie sollten sicherstellen, dass beide Browser die Konsole geöffnet haben, sonst erhalten Sie keine Aufforderung, den Anruf zu beantworten. Klicken Sie auf "Call", geben Sie die Peer-ID des anderen Browsers ein und nehmen Sie den Anruf entgegen. Die endgültige Seite sollte so aussehen:

   ![Zwei Bildschirme nebeneinander, beide haben einen cremefarbenen Hintergrund mit den Worten 'phone a friend' in fettgedruckter, dunkelgrüner Schrift als Überschrift. Darunter steht 'You're connected', gefolgt von 'please use headphones!' und 'You're automatically muted, please unmute yourself!'. Darauf folgt ein großer dunkelroter Button mit 'Hang up' in derselben cremefarbenen Farbe des Hintergrunds.](screens_side_by_side.png)

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}
