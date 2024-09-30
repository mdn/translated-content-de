---
title: Einen Anruf beantworten
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Answer_a_call
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}

Unsere Nutzer können jetzt einen Anruf tätigen, aber sie können keinen annehmen. Fügen wir das nächste Teil des Puzzles hinzu, damit die Nutzer Anrufe, die an sie gerichtet sind, beantworten können.

1. Das peerJS-Framework stellt das `.on('call')`-Ereignis zur Verfügung, und wir sollten es hier nutzen. Fügen Sie dies am Ende von `script.js` hinzu:

   ```js
   peer.on("call", (call) => {
     const answerCall = confirm("Do you want to answer?");
   });
   ```

   Zuerst fordern wir den Nutzer mit einem Bestätigungsdialog auf zu antworten. Dies zeigt ein Fenster auf dem Bildschirm (wie im Bild gezeigt), von dem aus der Nutzer "OK" oder "Abbrechen" auswählen kann — das wird auf einen zurückgegebenen booleschen Wert abgebildet. Wenn Sie in Ihrem Browser "Anrufen" drücken, sollte der folgende Dialog erscheinen:

   ![Ein Browserdialog, der fragt "Möchten Sie antworten?" mit zwei Optionen: "Abbrechen" und "OK"](confirm_prompt.png)

   > [!WARNING]
   > Da wir einen `confirm`-Dialog verwenden, um den Nutzer zu fragen, ob er den Anruf annehmen möchte, ist es wichtig, dass der Browser und der Tab, der angerufen wird, "aktiv" ist. Das bedeutet, das Fenster sollte nicht minimiert und der Tab sollte auf dem Bildschirm sichtbar sein, und die Maus sollte sich innerhalb des Tabs befinden. Idealerweise würden Sie in einer Produktionsversion dieser App Ihr eigenes Modal-Fenster in HTML erstellen, das diese Einschränkungen nicht hätte.

2. Lassen Sie uns diesen Ereignis-Listener weiter ausbauen. Aktualisieren Sie ihn wie folgt:

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

   Gehen wir die wichtigsten Teile dieses Codes durch:

   - `call.answer(window.localStream)`: Wenn `answerCall` `true` ist, sollten Sie die `answer()`-Funktion von peerJS für den Anruf aufrufen, um eine Antwort zu erstellen, und den lokalen Stream übergeben.
   - `showCallContent`: Ähnlich wie bei dem, was Sie im Ereignis-Listener des Anrufbuttons gemacht haben, sollten Sie sicherstellen, dass die angerufene Person den richtigen HTML-Inhalt sieht.
   - Alles im `call.on('stream', () => { }`-Block ist genau das gleiche wie im Ereignis-Listener des Anrufbuttons. Der Grund, warum Sie es auch hier hinzufügen müssen, ist, damit der Browser auch für die Person aktualisiert wird, die den Anruf beantwortet.
   - Wenn die Person den Anruf ablehnt, loggen wir einfach eine Nachricht in die Konsole.

3. Der Code, den Sie jetzt haben, reicht aus, um einen Anruf zu erstellen und ihn zu beantworten. Aktualisieren Sie Ihre Browser und testen Sie es aus. Stellen Sie sicher, dass beide Browser die Konsole geöffnet haben, sonst erhalten Sie den Aufforderung nicht, den Anruf zu beantworten. Klicken Sie auf Anruf, übermitteln Sie die Peer-ID für den anderen Browser und beantworten Sie dann den Anruf. Die endgültige Seite sollte folgendermaßen aussehen:

   ![Zwei Bildschirme nebeneinander haben beide einen cremefarbenen Hintergrund mit den Worten 'phone a friend' in fetter, dunkelgrüner Schrift als Überschrift. 'You're connected' steht unmittelbar darunter und 'please use headphones!' und 'You're automatically muted, please unmute yourself!' darunter. Anschließend ein großer dunkelroter Knopf mit 'Hang up' in der gleichen cremefarbenen Hintergrundfarbe.](screens_side_by_side.png)

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Creating_a_call", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/End_a_call")}}
