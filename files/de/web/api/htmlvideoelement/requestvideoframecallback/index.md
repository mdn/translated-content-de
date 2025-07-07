---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: bd1754b109741f6652dd7b050feaaceb50ff9caf
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`** Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild zum Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videobild auszuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`
  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild zum Kompositor gesendet wird. Diese Funktion enthält zwei Parameter:
    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, wann der Callback aufgerufen wurde.
    - `metadata`
      - : Ein Objekt, das die folgenden Eigenschaften enthält:
        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, wann der Browser erwartet, dass das Bild sichtbar wird.
        - `height`
          - : Eine Zahl in Medienpixeln, die die Höhe des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Medienpräsentationszeitstempel des dargestellten Bildes beschreibt. Dies entspricht dem Zeitstempel des Bildes auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Zeitleiste.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, wann der Browser das Bild zur Komposition übergeben hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bisher zur Komposition übergebenen Bilder zusammen mit dem aktuellen Callback darstellt. Dies kann verwendet werden, um zu erkennen, ob zwischen Callback-Instanzen Bilder verpasst wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Übermittlung des kodierten Pakets mit dem gleichen Präsentationszeitstempel wie dieses Bild an den Decoder (d.h. das `mediaTime`) und dem bereitstehenden dekodierten Bild zur Präsentation beschreibt.
        - `width`
          - : Eine Zahl in Medienpixeln, die die Breite des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können innerhalb von `requestVideoFrameCallback()`-Callbacks verfügbar sein, die in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen verwendet werden:
        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, wann das Bild aufgenommen wurde. Dies gilt für Videobilder von einer lokalen oder entfernten Quelle. Für eine entfernte Quelle wird die Aufnahmezeit unter Verwendung der Uhrensynchronisation und RTCP-Senderberichte geschätzt, um RTP-Zeitstempel in Aufnahmezeiten zu konvertieren.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, wann das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder, die von einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, wann das letzte Paket, das zu diesem Bild gehört, über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Zeitstempel beschreibt, der mit diesem Videobild verbunden ist.

> [!NOTE]
> `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (zum Beispiel kann ein anamorphes Video rechteckige Pixel haben).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Callback-Registrierung zu stornieren.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen Videobearbeitung und Zeichnen auf einer Leinwand, Videoanalyse und Synchronisierung mit externen Audioquellen. Per-Frame-Verarbeitung wurde früher auf weniger effiziente oder genaue Weise durchgeführt, indem Operationen auf der aktuellen Videodarstellung stets dann ausgeführt wurden, wenn das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird auf die gleiche Weise wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie verwenden es, um eine Callback-Funktion auszuführen, die eine Operation durchführt, wenn das nächste Videobild an den Kompositor gesendet wird. Der Callback schließt ab, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Callback auszuführen, wenn das nächste Videobild komponiert wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` auf Videooperationen in mehreren Aspekten zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Anzeigeaktualisierungsrate, die typischerweise 60Hz ist, zu treffen. `requestVideoFrameCallback()` hingegen versucht, die Videobildrate zu treffen. Genauer gesagt, der Callback wird mit der niedrigeren der Videobildrate und der Browser-Aktualisierungsrate ausgeführt. Beispielsweise würde ein Video mit einer Bildrate von 25fps, das in einem Browser abgespielt wird, der bei 60Hz aktualisiert wird, die Callbacks mit einer Rate von 25Hz auslösen. Ein Video mit einer Bildrate von 120fps, das im selben 60Hz-Browser läuft, würde die Callbacks bei 60Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Videometadaten in der Callback-Funktion verfügbar.

Eine Sache, die zu beachten ist, ist, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks synchron mit der Videobildrate bleibt. Es kann vorkommen, dass es eine vertikale Synchronisation (v-sync) später ausgelöst wird, als wenn das neue Videobild präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft im Haupt-Thread, während die Videokomposition wahrscheinlich in einem separaten Kompositionsthread passiert. Sie müssen die Zeit berücksichtigen, die für das Abschließen dieser Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigt, um auf dem Bildschirm anzuzeigen.

Sie können den `now`-Callback-Parameter mit der `expectedDisplayTime`-Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync-Verzögerung hat. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Bild bereits gerendert. Wenn die `expectedDisplayTime` etwa sechzehn Millisekunden in der Zukunft liegt (unter der Annahme, dass Ihr Browser/Bildschirm bei 60Hz aktualisiert wird), dann ist der Callback eine v-sync-Verzögerung.

## Beispiele

### Videobilder auf eine Leinwand zeichnen

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos auf ein {{htmlelement("canvas")}}-Element mit genau der gleichen Bildrate wie das Video zu zeichnen. Es protokolliert auch die Bildmetadaten auf dem Bildschirm für Debugging-Zwecke.

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
  Start <button type="button">⏯</button> playing the video. Pause the video to read the metadata.
  Drawing video frames on the canvas is synced with the actual video framerate.
</p>
<video controls playsinline></video>
<canvas width="960" height="540"></canvas>
<p><span id="fps-info">0</span>fps</p>
<p><pre id="metadata-info"></pre></p>
```

{{embedlivesample("", , "540")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Perform efficient per-video-frame operations on video with `requestVideoFrameCallback()`](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
