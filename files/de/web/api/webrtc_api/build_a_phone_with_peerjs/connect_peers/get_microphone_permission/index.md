---
title: Abrufen der Mikrofonberechtigung im Browser
slug: Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Get_microphone_permission
l10n:
  sourceCommit: 44c4ec928281dc2d7c5ea42b7d2c74a2013f16ac
---

{{DefaultAPISidebar("WebRTC")}}

{{PreviousMenuNext("Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers", "Web/API/WebRTC_API/Build_a_phone_with_peerjs/Connect_peers/Show_hide_html")}}

Nachdem Sie den Peer erstellt haben, möchten Sie die Erlaubnis des Browsers einholen, auf das Mikrofon zuzugreifen. Wir verwenden die Methode [`getUserMedia()`](/de/docs/Web/API/MediaDevices/getUserMedia) auf dem Objekt [`navigator.mediaDevices`](/de/docs/Web/API/Navigator/mediaDevices). Der Endpunkt `getUserMedia()` akzeptiert ein `constraints`-Objekt, das angibt, welche Berechtigungen benötigt werden. `getUserMedia()` ist ein Promise, der bei erfolgreicher Auflösung ein [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zurückgibt. In unserem Fall wird dies den Ton unseres Streams enthalten. Wenn das Promise nicht erfolgreich aufgelöst wird, sollten Sie den Fehler abfangen und anzeigen.

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

   - `window.localStream = stream` hängt das `MediaStream`-Objekt (das wir in der vorherigen Zeile `stream` zugewiesen haben) an das Fenster als `localStream` an.
   - `window.localAudio.srcObject = stream` setzt das [`<audio>`-Element](/de/docs/Web/HTML/Element/audio) mit der ID `localAudio` so, dass das `src`-Attribut der vom Promise zurückgegebenen `MediaStream` ist, damit unser Stream abgespielt wird.
   - `window.localAudio.autoplay = true` setzt das `autoplay`-Attribut des `<audio>`-Elements auf true, damit der Ton automatisch abgespielt wird.

   > [!WARNING]
   > Falls Sie online recherchiert haben, sind Sie möglicherweise auf [`navigator.getUserMedia`](/de/docs/Web/API/Navigator/getUserMedia) gestoßen und haben angenommen, dass Sie das anstelle von `navigator.mediaDevices.getUserMedia` verwenden können. Das wäre falsch. Ersteres ist eine veraltete Methode, die neben den Einschränkungen auch Rückrufe als Argumente erfordert. Letzteres verwendet ein Promise, sodass Sie keine Rückrufe verwenden müssen.

2. Versuchen Sie, Ihre `getLocalStream`-Funktion aufzurufen, indem Sie die folgende Zeile am Ende Ihres Codes hinzufügen:

   ```js
   getLocalStream();
   ```

3. Aktualisieren Sie Ihre App, die weiterhin unter `localhost:8000` laufen sollte; Sie sollten das folgende Erlaubnis-Popup sehen:

   ![Ein Browser-Berechtigungsdialogfeld, das besagt "http://localhost:8000 möchte Ihr Mikrofon verwenden" mit zwei Optionen: "blockieren" und "zulassen"](use_microphone_dialogue_box.png)

4. Stecken Sie Kopfhörer ein, bevor Sie die Mikrofonverwendung zulassen, damit Sie, wenn Sie sich später entstummschalten, keine Rückkopplung erhalten. Falls Sie die Erlaubnisaufforderung nicht gesehen haben, öffnen Sie den Inspektor, um zu sehen, ob Sie Fehler haben. Stellen Sie sicher, dass Ihre JavaScript-Datei korrekt mit Ihrer `index.html` verknüpft ist.

So sollte das Ganze aussehen:

```js
/* global Peer */

/**
 * Holt den lokalen Audiostream des aktuellen Anrufers
 * @param callbacks - ein Objekt, um das Verhalten bei Erfolg/Fehler festzulegen
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
