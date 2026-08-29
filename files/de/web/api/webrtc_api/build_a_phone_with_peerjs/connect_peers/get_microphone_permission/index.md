---
title: Abrufen der Mikrofonberechtigung im Browser
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: 8664d2b0fbc889ae1512a0f051ace8ac9e6bc6f5
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Erlaubnis des Browsers erhalten, auf das Mikrofon zuzugreifen. Wir werden die Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf dem Objekt [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verwenden.
Die `getUserMedia()`-Endpunkt erfordert ein `constraints`-Objekt, das angibt, welche Berechtigungen benötigt werden. `getUserMedia()` ist ein Promise, das, wenn es erfolgreich aufgelöst wird, ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird dies den Audio-Stream enthalten. Wenn das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler auffangen und anzeigen.

1. Fügen Sie den folgenden Code am Ende Ihrer `script.js`-Datei hinzu:

   ```js
   function getLocalStream() {
     navigator.mediaDevices
       .getUserMedia({ video: false, audio: true })
       .then((stream) => {
         window.localStream = stream; // A
         window.localAudio.srcObject = stream; // B
         window.localAudio.autoplay = true; // C
       })
       .catch((err) => {
         console.error(`you got an error: ${err}`);
       });
   }
   ```

   Erklären wir die wichtigsten Zeilen:
   - `window.localStream = stream` weist das `MediaStream`-Objekt (welches wir in der vorherigen Zeile `stream` zugewiesen haben) dem Fenster als `localStream` zu.
   - `window.localAudio.srcObject = stream` setzt das `src`-Attribut des [`<audio>`-Elements](/de/docs/Web/HTML/Reference/Elements/audio) mit der ID `localAudio` auf den `MediaStream`, der durch das Promise zurückgegeben wird, damit unser Stream abgespielt wird.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, damit das Audio automatisch abgespielt wird.

   > [!WARNING]
   > Wenn Sie online nachgeforscht haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie das anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Ersteres ist eine veraltete Methode, die sowohl Rückrufe als auch Einschränkungen als Argumente erfordert. Letzteres verwendet ein Promise, sodass Sie keine Rückrufe verwenden müssen.

2. Versuchen Sie, Ihre Funktion `getLocalStream` aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre App, die immer noch unter `localhost:8000` laufen sollte; Sie sollten den folgenden Berechtigungsdialog sehen:

   ![Ein Browser-Berechtigungsdialogfeld, das besagt: "http://localhost:8000 möchte Ihr Mikrofon verwenden", mit zwei Optionen: "blockieren" und "zulassen"](use_microphone_dialogue_box.png)

4. Schließen Sie einige Kopfhörer an, bevor Sie die Mikrofonverwendung zulassen, damit Sie später, wenn Sie sich selbst stummschalten, kein Feedback erhalten. Wenn Sie die Berechtigungsanfrage nicht gesehen haben, öffnen Sie den Inspektor, um zu sehen, ob Sie Fehler haben. Stellen Sie sicher, dass Ihre JavaScript-Datei korrekt mit Ihrer `index.html` verknüpft ist.

So sollte das Ganze zusammen aussehen:

```js
/* global Peer */

/**
 * Gets the local audio stream of the current caller
 * @param callbacks - an object to set the success/error behavior
 * @returns {void}
 */

function getLocalStream() {
  navigator.mediaDevices
    .getUserMedia({ video: false, audio: true })
    .then((stream) => {
      window.localStream = stream;
      window.localAudio.srcObject = stream;
      window.localAudio.autoplay = true;
    })
    .catch((err) => {
      console.error(`you got an error: ${err}`);
    });
}

getLocalStream();
```

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}
