---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`** Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Dadurch können Entwickler effiziente Operationen auf jedem Videobild durchführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`
  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Diese enthält zwei Parameter:
    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Callback aufgerufen wurde.
    - `metadata`
      - : Ein Objekt, das die folgenden Eigenschaften enthält:
        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser erwartet, dass das Bild sichtbar ist.
        - `height`
          - : Eine Zahl in Mediapixeln, die die Höhe des Videobildes (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) darstellt.
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Medienpräsentationszeitstempel des angezeigten Bildes darstellt. Dieser entspricht dem Zeitstempel des Bildes auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Zeitachse.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser das Bild zur Komposition eingereicht hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bisher zur Komposition eingereichten Bilder zusammen mit dem aktuellen Callback darstellt. Dies kann verwendet werden, um zu erkennen, ob Bilder zwischen den Callback-Instanzen verpasst wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Einreichung des kodierten Pakets mit dem gleichen Präsentationszeitstempel wie dieses Bild an den Decoder (d.h. das `mediaTime`) und dem dekodierten Bild, das zur Präsentation bereit ist, angibt.
        - `width`
          - : Eine Zahl in Mediapixeln, die die Breite des Videobildes (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) darstellt.

        Zusätzliche Metadaten-Eigenschaften können in `requestVideoFrameCallback()` Callbacks verwendet werden, die in [WebRTC](/de/docs/Web/API/WebRTC_API) Anwendungen benutzt werden:
        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das Bild aufgenommen wurde. Dies gilt für Videobilder, die von einer lokalen oder entfernten Quelle stammen. Bei einer entfernten Quelle wird die Aufnahmezeit unter Verwendung der Uhrensynchronisation und RTCP-Senderberichte geschätzt, um RTP-Zeitstempel in Aufnahmezeit umzurechnen.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder, die von einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, zu der das letzte Paket, das zu diesem Bild gehört, über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Zeitstempel darstellt, der mit diesem Videobild verknüpft ist.

> [!NOTE]
> `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (zum Beispiel bei einem anamorphotischen Video mit rechteckigen Pixeln).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Registrierung des Callbacks zu stornieren.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen die Videobearbeitung und das Zeichnen auf eine Leinwand, Videoanalyse und Synchronisation mit externen Audioquellen. Die Verarbeitung pro Bild wurde früher weniger effizient oder genau durchgeführt, indem Operationen auf dem aktuellen Videodisplay ausgeführt wurden, wann immer das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird auf die gleiche Weise verwendet wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie verwenden es, um eine Callback-Funktion auszuführen, die eine Operation ausführt, wenn das nächste Videobild an den Kompositor gesendet wird. Der Callback endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Callback auszuführen, wenn das nächste Videobild komponiert wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` in verschiedener Hinsicht für Videooperationen zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Display-Auffrischrate zu erreichen, die typischerweise 60 Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, die Videobildrate zu erreichen. Genauer gesagt, der Callback wird mit der niedrigeren Rate von Videobildrate und Browser-Auffrischrate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25fps, das in einem Browser abgespielt wird, der mit 60Hz auffrischt, Callbacks mit einer Rate von 25Hz auslösen. Ein Video mit einer Bildrate von 120fps, das im selben 60Hz-Browser läuft, würde Callbacks bei 60Hz auslösen.
- `requestVideoFrameCallback()` stellt im Callback nützliche Videometadaten zur Verfügung.

Zu beachten ist, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks synchron mit der Videobildrate bleibt. Es kann dazu kommen, dass es eine vertikale Synchronisation (v-sync) später ausgelöst wird, als wenn das neue Videobild präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Bildwiederholrate eines Monitors synchronisiert.)

Die API läuft im Hauptthread, während die Videokomposition wahrscheinlich in einem separaten Kompositionsthread erfolgt. Sie müssen die Zeit berücksichtigen, die für diese Operationen benötigt wird, sowie die Zeit, die es dauert, bis das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()` Operation auf dem Bildschirm angezeigt werden.

Sie können den `now` Callback-Parameter und die `expectedDisplayTime` Metadaten-Eigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync zu spät ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Bild bereits gerendert. Wenn die `expectedDisplayTime` ungefähr sechzehn Millisekunden in der Zukunft liegt (angenommen, Ihr Browser/Bildschirm wird mit 60Hz aktualisiert), dann ist der Callback eine v-sync aus.

## Beispiele

### Videobilder auf einer Leinwand zeichnen

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos auf ein {{htmlelement("canvas")}} Element mit genau der gleichen Bildrate wie das Video zu zeichnen. Es protokolliert auch die Bildmetadaten zur Bildschirmdebugging-Zwecken.

```js
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

{{embedlivesample("drawing_video_frames_on_a_canvas", , "540")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}} Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente pro-Videobild-Operationen auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
