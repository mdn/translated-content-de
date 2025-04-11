---
title: Mikrofonberechtigung des Browsers erhalten
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Berechtigung des Browsers erhalten, um auf das Mikrofon zuzugreifen. Wir werden die Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf dem Objekt [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verwenden. Der `getUserMedia()`-Endpunkt nimmt ein `constraints`-Objekt, das angibt, welche Berechtigungen benötigt werden. `getUserMedia()` ist ein Promise, das, wenn es erfolgreich aufgelöst wird, ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird dies den Audioinhalt unseres Streams enthalten. Wenn das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler abfangen und anzeigen.

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

   - `window.localStream = stream` hängt das `MediaStream`-Objekt (welches wir in der vorherigen Zeile `stream` zugewiesen haben) an das Fenster als `localStream`.
   - `window.localAudio.srcObject = stream` setzt das `src`-Attribut des [`<audio>`-Elements](/de/docs/Web/HTML/Reference/Elements/audio) mit der ID `localAudio` auf den `MediaStream`, der vom Promise zurückgegeben wird, sodass unser Stream abgespielt wird.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, sodass das Audio automatisch abgespielt wird.

   > [!WARNING]
   > Wenn Sie online etwas recherchiert haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie das anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Erstere ist eine veraltete Methode, die Rückrufe und Einschränkungen als Argumente erfordert. Letztere verwendet ein Promise, sodass Sie keine Rückrufe verwenden müssen.

2. Versuchen Sie, Ihre `getLocalStream`-Funktion aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre App, die noch unter `localhost:8000` laufen sollte; Sie sollten die folgende Berechtigungsmeldung sehen:

   ![Ein Browser-Berechtigungsdialog, der sagt "http://localhost:8000 möchte Ihr Mikrofon verwenden" mit zwei Optionen: "blockieren" und "erlauben"](use_microphone_dialogue_box.png)

4. Stecken Sie Kopfhörer ein, bevor Sie die Mikrofonbenutzung erlauben, damit Sie, wenn Sie sich später selbst entstummten, kein Feedback bekommen. Wenn Sie die Berechtigungsaufforderung nicht gesehen haben, öffnen Sie den Inspektor, um zu sehen, ob Sie Fehler haben. Stellen Sie auch sicher, dass Ihre JavaScript-Datei korrekt mit Ihrer `index.html` verknüpft ist.

So sollte es zusammen aussehen:

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
