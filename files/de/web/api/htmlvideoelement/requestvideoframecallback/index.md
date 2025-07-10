---
title: "HTMLVideoElement: Methode requestVideoFrameCallback()"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 594ae0d4ffb6326a9529fe366d30ca633309ee30
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`**-Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Video-Frame durchzuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`
  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Diese enthält zwei Parameter:
    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Callback aufgerufen wurde.
    - `metadata`
      - : Ein Objekt mit den folgenden Eigenschaften:
        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser erwartet, dass das Frame sichtbar ist.
        - `height`
          - : Eine Zahl, in Medien-Pixeln, die die Höhe des Video-Frames repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl, in Sekunden, die den Mediendarstellungstimestamp des dargestellten Frames repräsentiert. Dies entspricht dem Timestamp des Frames auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Zeitlinie.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser das Frame zur Komposition eingereicht hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bis zum aktuellen Callback für die Komposition eingereichten Frames darstellt. Dies kann verwendet werden, um zu erkennen, ob zwischen Callback-Instanzen Frames verpasst wurden.
        - `processingDuration`
          - : Eine Zahl, in Sekunden, die die Dauer zwischen der Einreichung des codierten Pakets mit dem gleichen Präsentationstimestamp wie dieses Frame an den Decoder (d.h. die `mediaTime`) und dem bereiten dekodierten Frame zur Präsentation darstellt.
        - `width`
          - : Eine Zahl, in Medien-Pixeln, die die Breite des Video-Frames repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können innerhalb von `requestVideoFrameCallback()`-Callbacks in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen verfügbar sein:
        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das Frame erfasst wurde. Dies gilt für Video-Frames, die von einer lokalen oder entfernten Quelle stammen. Bei einer entfernten Quelle wird die Erfassungszeit mithilfe der Takt-Synchronisation und RTCP-Senderberichte geschätzt, um RTP-Timestamps in Erfassungszeiten umzurechnen.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das codierte Frame von der Plattform empfangen wurde. Dies gilt für Video-Frames, die von einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, zu der das letzte Paket, das zu diesem Frame gehört, über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Timestamp repräsentiert, der mit diesem Video-Frame verknüpft ist.

> [!NOTE]
> `width` und `height` können sich in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) unterscheiden (zum Beispiel kann ein anamorphes Video rechteckige Pixel haben).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Callback-Registrierung zu stornieren.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen Videoverarbeitung und das Zeichnen auf einer Leinwand, Videoanalyse und Synchronisation mit externen Audioquellen. Die Verarbeitung pro Frame wurde früher weniger effizient oder genau durchgeführt, indem Operationen bei jedem Auftreten des [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignisses auf dem aktuellen Videodisplay ausgeführt wurden. Diese Technik bot keinen Zugriff auf die tatsächlichen Video-Frames.

`requestVideoFrameCallback()` wird ähnlich wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie nutzen es, um eine Callback-Funktion auszuführen, die eine Operation durchführt, wenn das nächste Video-Frame an den Kompositor gesendet wird. Der Callback endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Callback auszuführen, wenn das nächste Video-Frame zusammengesetzt wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` auf Videooperationen in mehreren Aspekten zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Video-Frame.
- `requestAnimationFrame()` versucht, mit der Bildwiederholrate des Displays übereinzustimmen, die typischerweise 60Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, mit der Video-Bildrate übereinzustimmen. Genauer gesagt wird der Callback mit der niedrigeren der Video-Bildrate und der Browser-Paint-Bildrate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25fps, das in einem Browser abgespielt wird, der bei 60Hz die Bildwiederholung vornimmt, bei einer Rate von 25Hz Callback-Aufrufe auslösen. Ein Video mit einer Bildrate von 120fps, das im gleichen 60Hz-Browser läuft, würde Callback-Aufrufe bei 60Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Video-Metadaten in der Callback-Funktion verfügbar.

Etwas, das man beachten sollte, ist, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Video-Bildrate synchron bleibt. Es kann sein, dass es um eine vertikale Synchronisation (v-sync) später ausgelöst wird, als das neue Video-Frame präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft im Haupt-Thread, während das Video-Komponieren wahrscheinlich in einem separaten Komponier-Thread stattfindet. Sie müssen die Zeit berücksichtigen, die für diese Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigen, um auf dem Bildschirm angezeigt zu werden.

Sie können die `now`-Callback-Parameter und die `expectedDisplayTime`-Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync verspätet ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden ab `now` liegt, ist das Frame bereits gerendert. Wenn `expectedDisplayTime` etwa sechzehn Millisekunden in der Zukunft liegt (unter der Annahme, dass Ihr Browser/Monitor bei 60Hz aktualisiert wird), ist der Callback eine v-sync Verzögerung.

## Beispiele

### Video-Frames auf einer Leinwand zeichnen

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Frames eines Videos auf ein {{htmlelement("canvas")}}-Element mit genau derselben Bildrate wie das Video zu zeichnen. Es protokolliert auch die Frame-Metadaten zur Bildschirmdarstellung, um zu Debugging-Zwecken nützlich zu sein.

```js
const startDrawing = () => {
  const button = document.querySelector("button");
  const video = document.querySelector("video");
  const canvas = document.querySelector("canvas");
  const ctx = canvas.getContext("2d");
  const fpsInfo = document.querySelector("#fps-info");
  const metadataInfo = document.querySelector("#metadata-info");

  button.addEventListener("click", () =>
    video.paused ? video.play() : video.pause(),
  );

  video.addEventListener("play", () => {
    if (!("requestVideoFrameCallback" in HTMLVideoElement.prototype)) {
      console.error(
        "Your browser does not support the `Video.requestVideoFrameCallback()` API.",
      );
    }
  });

  let width = canvas.width;
  let height = canvas.height;

  let paintCount = 0;
  let startTime = 0.0;

  const updateCanvas = (now, metadata) => {
    if (startTime === 0.0) {
      startTime = now;
    }

    ctx.drawImage(video, 0, 0, width, height);

    const elapsed = (now - startTime) / 1000.0;
    const fps = (++paintCount / elapsed).toFixed(3);
    fpsInfo.innerText = !isFinite(fps) ? 0 : fps;
    metadataInfo.innerText = JSON.stringify(metadata, null, 2);

    video.requestVideoFrameCallback(updateCanvas);
  };

  video.src = "https://mdn.github.io/shared-assets/videos/flower.mp4";
  video.requestVideoFrameCallback(updateCanvas);
};

window.addEventListener("load", startDrawing);
```

```css
video,
canvas {
  max-width: 49%;
}
```

```html
<p>
  Start <button type="button">⏯</button> playing the video. Pause the video to
  read the metadata. Drawing video frames on the canvas is synced with the
  actual video framerate.
</p>
<video controls playsinline></video>
<canvas width="960" height="540"></canvas>
<p><span id="fps-info">0</span>fps</p>
<pre id="metadata-info"></pre>
```

{{embedlivesample("", , "540")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente Operationen pro Video-Frame mit `requestVideoFrameCallback()` ausführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
