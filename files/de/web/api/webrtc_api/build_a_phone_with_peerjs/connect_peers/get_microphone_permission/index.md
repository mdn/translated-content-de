---
title: Erhalten der Mikrofongenehmigung im Browser
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Erlaubnis des Browsers erhalten, auf das Mikrofon zuzugreifen. Dafür verwenden wir die Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) des Objekts [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices).
Der Endpunkt `getUserMedia()` nimmt ein `constraints`-Objekt entgegen, das angibt, welche Berechtigungen benötigt werden. `getUserMedia()` ist ein Promise, das bei erfolgreicher Auflösung ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird dies den Ton unseres Streams enthalten. Falls das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler abfangen und anzeigen.

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

   Lassen Sie uns die wichtigsten Zeilen erklären:

   - `window.localStream = stream` verbindet das `MediaStream`-Objekt (das wir in der vorherigen Zeile `stream` zugewiesen haben) mit dem Fenster als `localStream`.
   - `window.localAudio.srcObject = stream` setzt das `src`-Attribut des [`<audio>`-Elements](/de/docs/Web/HTML/Element/audio) mit der ID `localAudio` auf den durch das Promise zurückgegebenen `MediaStream`, sodass unser Stream abgespielt wird.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, sodass das Audio automatisch abgespielt wird.

   > [!WARNING]
   > Wenn Sie online recherchiert haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie dies anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Ersteres ist eine veraltete Methode, die Callbacks sowie Einschränkungen als Argumente erfordert. Letzteres verwendet ein Promise, sodass Sie Callbacks nicht verwenden müssen.

2. Versuchen Sie, Ihre `getLocalStream`-Funktion aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre App, die weiterhin unter `localhost:8000` laufen sollte; Sie sollten das folgende Berechtigungsfenster sehen:

   ![Ein Browser-Berechtigungsdialogfeld, das besagt: "http://localhost:8000 möchte Ihr Mikrofon verwenden" mit zwei Optionen: "blockieren" und "zulassen"](use_microphone_dialogue_box.png)

4. Schließen Sie einige Kopfhörer an, bevor Sie die Mikrofonbenutzung erlauben, damit Sie später, wenn Sie sich selbst stummschalten, kein Feedback bekommen. Wenn das Berechtigungsfenster nicht angezeigt wurde, öffnen Sie den Inspektor, um zu sehen, ob Sie Fehler haben. Stellen Sie auch sicher, dass Ihre JavaScript-Datei korrekt mit Ihrem `index.html` verlinkt ist.

So sollte alles zusammen aussehen:

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
