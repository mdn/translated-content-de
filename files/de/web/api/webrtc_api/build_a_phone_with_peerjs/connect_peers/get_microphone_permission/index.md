---
title: Erhalten der Browser-Mikrofonberechtigung
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Erlaubnis des Browsers einholen, auf das Mikrofon zuzugreifen. Wir werden dafür die [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia)-Methode des [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices)-Objekts verwenden. Der `getUserMedia()`-Endpunkt benötigt ein `constraints`-Objekt, das angibt, welche Berechtigungen erforderlich sind. `getUserMedia()` ist ein Promise, das, wenn es erfolgreich aufgelöst wird, ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird dies den Audioinhalt unseres Streams enthalten. Wenn das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler abfangen und anzeigen.

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

   - `window.localStream = stream` hängt das `MediaStream`-Objekt (das wir in der vorherigen Zeile `stream` zugewiesen haben) als `localStream` an das Fenster an.
   - `window.localAudio.srcObject = stream` setzt das `src`-Attribut des [`<audio>` Elements](/de/docs/Web/HTML/Element/audio) mit der ID `localAudio` auf das von dem Promise zurückgegebene `MediaStream`, sodass es unseren Stream abspielt.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, so dass das Audio automatisch abgespielt wird.

   > [!WARNING]
   > Wenn Sie online recherchiert haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie dies anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Ersteres ist eine veraltete Methode, die neben Constraints auch Rückruffunktionen als Argumente erfordert. Letzteres verwendet ein Promise, sodass Sie keine Rückruffunktionen verwenden müssen.

2. Versuchen Sie, Ihre `getLocalStream`-Funktion aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre App, die immer noch unter `localhost:8000` laufen sollte; Sie sollten das folgende Berechtigungsfenster sehen:

   ![Ein Browser-Berechtigungsdialogfenster, das sagt "http://localhost:8000 möchte Ihr Mikrofon verwenden" mit zwei Optionen: "Blockieren" und "Erlauben"](use_microphone_dialogue_box.png)

4. Stecken Sie ein Headset ein, bevor Sie die Mikrofonverwendung erlauben, damit Sie später beim Entstummen keine Rückkopplung erhalten. Wenn Sie die Berechtigungsaufforderung nicht gesehen haben, öffnen Sie den Inspektor, um nach Fehlern zu suchen. Stellen Sie auch sicher, dass Ihre JavaScript-Datei korrekt mit Ihrem `index.html` verlinkt ist.

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
