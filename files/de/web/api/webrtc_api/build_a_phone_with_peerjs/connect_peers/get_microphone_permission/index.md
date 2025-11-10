---
title: Erhalten der Berechtigung des Browsers für das Mikrofon
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Berechtigung des Browsers erhalten, auf das Mikrofon zuzugreifen. Wir werden die Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf dem Objekt [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices) verwenden. Der `getUserMedia()`-Endpunkt nimmt ein `constraints`-Objekt, das die benötigten Berechtigungen angibt. `getUserMedia()` ist ein Promise, das bei erfolgreicher Auflösung ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird es den Ton aus unserem Stream enthalten. Wenn das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler abfangen und anzeigen.

1. Fügen Sie den folgenden Code am Ende Ihrer Datei `script.js` hinzu:

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
   - `window.localAudio.srcObject = stream` setzt das `src`-Attribut des [`<audio>`-Elements](/de/docs/Web/HTML/Reference/Elements/audio) mit der ID `localAudio` auf den `MediaStream`, der durch das Promise zurückgegeben wird, sodass unser Stream wiedergegeben wird.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, damit der Ton automatisch abgespielt wird.

   > [!WARNING]
   > Wenn Sie online ein wenig recherchiert haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie diese Methode anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Ersteres ist eine veraltete Methode, die sowohl Rückruffunktionen als auch Constraints als Argumente erfordert. Letzteres verwendet ein Promise, sodass Sie keine Rückruffunktionen verwenden müssen.

2. Versuchen Sie, Ihre Funktion `getLocalStream` aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre Anwendung, die immer noch unter `localhost:8000` ausgeführt werden sollte; Sie sollten das folgende Berechtigungs-Popup sehen:

   ![Ein Browser-Berechtigungsdialogfeld, das sagt: "http://localhost:8000 möchte Ihr Mikrofon verwenden" mit zwei Optionen: "blockieren" und "zulassen"](use_microphone_dialogue_box.png)

4. Schließen Sie einige Kopfhörer an, bevor Sie die Mikrofonnutzung zulassen, damit Sie später, wenn Sie sich selbst entstummen, kein Feedback erhalten. Wenn Sie die Berechtigungsanfrage nicht gesehen haben, öffnen Sie den Inspektor, um zu sehen, ob Sie Fehler haben. Stellen Sie auch sicher, dass Ihre JavaScript-Datei korrekt mit Ihrer `index.html` verknüpft ist.

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
