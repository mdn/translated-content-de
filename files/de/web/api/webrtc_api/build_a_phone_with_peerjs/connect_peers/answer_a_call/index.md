---
title: Einen Anruf beantworten
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}

Nun können unsere Nutzer einen Anruf tätigen, aber sie können keinen beantworten. Lassen Sie uns das nächste Puzzlestück hinzufügen, damit die Nutzer Anrufe, die an sie gerichtet sind, beantworten können.

1. Das peerJS-Framework stellt das `.on('call')`-Ereignis zur Verfügung, also nutzen wir es hier. Fügen Sie dies am Ende der `script.js` hinzu:

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");
   });
   ```

   Zuerst fordern wir den Nutzer mit einem Bestätigungsfenster auf, den Anruf zu beantworten. Dieses Fenster wird auf dem Bildschirm angezeigt (wie im Bild gezeigt), aus dem der Nutzer "OK" oder "Abbrechen" auswählen kann — das entspricht einem zurückgegebenen booleschen Wert. Wenn Sie in Ihrem Browser auf "Anrufen" drücken, sollte das folgende Fenster erscheinen:

   ![Ein Browservorschlag, der fragt "Do you want to answer?" mit zwei Optionen: "Cancel" und "Ok"](confirm_prompt.png)

   > [!WARNING]
   > Da wir eine `confirm`-Eingabeaufforderung verwenden, um den Nutzer zu fragen, ob er den Anruf annehmen möchte, ist es wichtig, dass der Browser und der Tab, der angerufen wird, "aktiv" ist. Das bedeutet, dass das Fenster nicht minimiert sein sollte und der Tab auf dem Bildschirm sein und der Mausfokus irgendwo darin liegen sollte. Idealerweise würden Sie in einer Produktionsversion dieser App ein eigenes modales Fenster in HTML erstellen, das diese Einschränkungen nicht hat.

2. Lassen Sie uns diesen Ereignis-Listener ausarbeiten. Aktualisieren Sie ihn wie folgt:

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

   - `call.answer(window.localStream)`: wenn `answerCall` `true` ist, sollten Sie die `answer()`-Funktion von peerJS für den Anruf aufrufen, um eine Antwort zu erstellen, indem Sie den lokalen Stream übergeben.
   - `showCallContent`: Ähnlich wie bei dem, was Sie im Ereignis-Listener des Anrufbuttons gemacht haben, möchten Sie sicherstellen, dass die Person, die angerufen wird, den richtigen HTML-Inhalt sieht.
   - Alles im Block `call.on('stream', () => { }` ist genau dasselbe wie im Ereignis-Listener des Anrufbuttons. Der Grund, warum Sie es hier ebenfalls hinzufügen müssen, ist, dass der Browser auch für die Person, die den Anruf beantwortet, aktualisiert wird.
   - Wenn die Person den Anruf ablehnt, protokollieren wir einfach eine Nachricht in der Konsole.

3. Der Code, den Sie jetzt haben, reicht aus, damit Sie einen Anruf erstellen und beantworten können. Aktualisieren Sie Ihre Browser und testen Sie es aus. Stellen Sie sicher, dass beide Browser die Konsole geöffnet haben, sonst erhalten Sie die Eingabeaufforderung zur Anrufbeantwortung nicht. Klicken Sie auf Anruf, übermitteln Sie die Peer-ID des anderen Browsers und beantworten Sie dann den Anruf. Die endgültige Seite sollte so aussehen:

   ![Zwei Bildschirme nebeneinander haben beide einen cremefarbenen Hintergrund mit den Worten "phone a friend" in fettgedruckter, dunkelgrüner Schrift als Überschrift. Darunter befindet sich "You're connected" und "please use headphones!" sowie "You're automatically muted, please unmute yourself!" Weiter unten ein großer dunkelroter Knopf mit "Hang up" in der gleichen cremigen Farbe wie der Hintergrund.](screens_side_by_side.png)

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}
