---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`**-Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle registriert eine Rückruffunktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videoframe durchzuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`

  - : Die Rückruffunktion, die ausgeführt wird, wenn ein neues Videoframe an den Kompositor gesendet wird. Diese enthält zwei Parameter:

    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt repräsentiert, an dem der Rückruf aufgerufen wurde.
    - `metadata`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt repräsentiert, an dem der Browser erwartet, dass das Frame sichtbar ist.
        - `height`
          - : Eine Zahl in Medienpixeln, die die Höhe des Videoframes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Mediapräsentationszeitstempel des dargestellten Frames repräsentiert. Dies entspricht dem Zeitstempel des Frames auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Zeitleiste.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt repräsentiert, an dem der Browser das Frame zur Komposition übermittelt hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bisher zur Komposition übermittelten Frames zusammen mit dem aktuellen Rückruf darstellt. Dies kann verwendet werden, um zu erkennen, ob zwischen Rückrufinstanzen Frames verpasst wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Übermittlung des kodierten Pakets mit demselben Präsentationszeitstempel wie dieses Frame an den Decoder (d.h. dem `mediaTime`) und dem dekodierten Frame, das zur Präsentation bereit ist, darstellt.
        - `width`
          - : Eine Zahl in Medienpixeln, die die Breite des Videoframes darstellt (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften könnten innerhalb von `requestVideoFrameCallback()`-Rückrufen in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen verfügbar sein:

        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt repräsentiert, an dem das Frame erfasst wurde. Dies gilt für Videoframes aus einer lokalen oder entfernten Quelle. Bei einer entfernten Quelle wird die Erfassungszeit mithilfe der Synchronisation der Uhren und RTCP-Senderberichte geschätzt, um RTP-Zeitstempel in Erfassungszeit umzuwandeln.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt repräsentiert, an dem das kodierte Frame von der Plattform empfangen wurde. Dies gilt für Videoframes aus einer entfernten Quelle. Insbesondere entspricht dies dem Zeitpunkt, an dem das letzte Paket zu diesem Frame über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Zeitstempel darstellt, der mit diesem Videoframe verbunden ist.

> [!NOTE] > `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (zum Beispiel, wenn ein anamorphes Video rechteckige Pixel hat).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Rückrufregistrierung abzubrechen.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen Videoverarbeitung und -malerei auf einer Leinwand, Videoanalyse und Synchronisation mit externen Audioquellen. Verarbeitung pro Frame wurde früher auf weniger effiziente oder genaue Weise durchgeführt, indem Operationen auf der aktuellen Videoanzeige jedes Mal ausgeführt wurden, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Videoframes.

`requestVideoFrameCallback()` wird auf die gleiche Weise verwendet wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Man verwendet es, um eine Rückruffunktion auszuführen, die eine Operation durchführt, wenn das nächste Videoframe an den Kompositor gesendet wird. Der Rückruf endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Rückruf auszuführen, wenn das nächste Videoframe komponiert wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` in mehrerer Hinsicht speziell für Videooperationen konzipiert:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videoframe.
- `requestAnimationFrame()` versucht, die Display-Aktualisierungsrate anzupassen, die typischerweise 60Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, die Video-Framerate anzupassen. Genauer gesagt, der Rückruf wird mit der niedrigeren der beiden Raten zwischen Video-Framerate und Browser-Aktualisierungsrate ausgeführt. Zum Beispiel würde ein Video mit einer Framerate von 25fps, das in einem Browser abgespielt wird, der mit 60Hz malt, Rückrufe mit einer Rate von 25Hz auslösen. Ein Video mit einer Framerate von 120fps, das im selben 60Hz-Browser läuft, würde Rückrufe mit 60Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Videometadaten in der Rückruffunktion verfügbar.

Ein Punkt, den Sie beachten sollten, ist, dass `requestVideoFrameCallback()` keine strengen Garantien bietet, dass die Ausgabe Ihres Rückrufs synchron mit der Video-Framerate bleibt. Es kann sein, dass er ein vertikales Synchronisation (v-sync) später ausgelöst wird, nachdem das neue Videoframe präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Framerate eines Videos mit der Bildwiederholfrequenz eines Monitors synchronisiert.)

Die API läuft auf dem Hauptthread, während die Videokomposition wahrscheinlich auf einem separaten Kompositionsthread erfolgt. Sie müssen die Zeit berücksichtigen, die für den Abschluss dieser Operationen erforderlich ist, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigen, um auf dem Bildschirm angezeigt zu werden.

Sie können den `now`-Callback-Parameter und die `expectedDisplayTime`-Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Rückruf ein v-sync zu spät ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Frame bereits gerendert. Wenn die `expectedDisplayTime` ungefähr sechzehn Millisekunden in der Zukunft liegt (vorausgesetzt, Ihr Browser/Bildschirm aktualisiert mit 60Hz), dann ist der Rückruf ein v-sync aus.

## Beispiele

### Zeichnen von Videoframes auf eine Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Frames eines Videos auf ein {{htmlelement("canvas")}}-Element mit genau derselben Bildrate wie das Video zu zeichnen. Es protokolliert auch die Frame-Metadaten zur DOM für Debugging-Zwecke.

```js
if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
  const video = document.createElement("video");
  const fpsInfo = document.createElement("div");
  const metadataInfo = document.createElement("div");
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");

  // 'Big Buck Bunny' licensed under CC 3.0 by the Blender foundation. Hosted by archive.org
  // Poster from peach.blender.org
  video.src =
    "https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4";
  video.poster =
    "https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217";
  video.width = 640;
  video.controls = true;

  document.body.append(video, fpsInfo, metadataInfo, canvas);

  let paintCount = 0;
  let startTime = 0.0;

  const updateCanvas = (now, metadata) => {
    if (startTime === 0.0) {
      startTime = now;
    }

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

    const elapsed = (now - startTime) / 1000.0;
    const fps = (++paintCount / elapsed).toFixed(3);
    fpsInfo.innerText = `video fps: ${fps}`;
    metadataInfo.innerText = JSON.stringify(metadata, null, 2);

    // Re-register the callback to run on the next frame
    video.requestVideoFrameCallback(updateCanvas);
  };

  // Initial registration of the callback to run on the first frame
  video.requestVideoFrameCallback(updateCanvas);
} else {
  alert("Your browser does not support requestVideoFrameCallback().");
}
```

Sehen Sie sich die [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/) für eine funktionierende Implementierung des obigen Codes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente Per-Frame-Operationen auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
