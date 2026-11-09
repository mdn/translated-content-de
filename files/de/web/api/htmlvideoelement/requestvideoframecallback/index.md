---
title: "HTMLVideoElement: Methode requestVideoFrameCallback()"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: c98fd1910ac9ab60ded1314ee681289f9a321d91
---

{{APIRef("HTML DOM")}}

Die Methode **`requestVideoFrameCallback()`** der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Compositor übermittelt wird. So können Entwickler für jedes Videoframe effizient Operationen ausführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`
  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videoframe an den Compositor übermittelt wird. Sie erhält zwei Parameter:
    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt angibt, zu dem der Callback aufgerufen wurde.
    - `metadata`
      - : Ein Objekt mit den folgenden Eigenschaften:
        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wann der Browser erwartet, dass das Frame sichtbar wird.
        - `height`
          - : Eine Zahl in Medienpixeln, die die Höhe des Videoframes angibt (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Medienpräsentationszeitstempel des angezeigten Frames angibt. Sie entspricht dem Zeitstempel des Frames auf der Zeitachse von [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime).
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wann der Browser das Frame zur Komposition übermittelt hat.
        - `presentedFrames`
          - : Eine Zahl, die angibt, wie viele Frames bis zum aktuellen Callback zur Komposition übermittelt wurden.
            Damit lässt sich erkennen, ob zwischen Callback-Aufrufen Frames ausgelassen wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Übermittlung des kodierten Pakets mit demselben Präsentationszeitstempel wie dieses Frame an den Decoder (also dem `mediaTime`) und dem Zeitpunkt angibt, zu dem das dekodierte Frame zur Anzeige bereitstand.
        - `width`
          - : Eine Zahl in Medienpixeln, die die Breite des Videoframes angibt (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        In `requestVideoFrameCallback()`-Callbacks, die in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen verwendet werden, können weitere Metadateneigenschaften verfügbar sein:
        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wann das Frame erfasst wurde. Dies gilt für Videoframes aus lokalen und entfernten Quellen. Bei einer entfernten Quelle wird der Erfassungszeitpunkt mithilfe von Uhrensynchronisierung und RTCP-Sendeberichten geschätzt, um RTP-Zeitstempel in Erfassungszeitpunkte umzurechnen.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der angibt, wann das kodierte Frame von der Plattform empfangen wurde. Dies gilt für Videoframes aus einer entfernten Quelle. Genauer gesagt entspricht dies dem Zeitpunkt, zu dem das letzte zu diesem Frame gehörende Paket über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den diesem Videoframe zugeordneten RTP-Zeitstempel angibt.

> [!NOTE]
> `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (beispielsweise kann ein anamorphes Video rechteckige Pixel haben).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Registrierung des Callbacks aufzuheben.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` sind die Verarbeitung von Videos und das Zeichnen auf ein Canvas, die Videoanalyse sowie die Synchronisierung mit externen Audioquellen. Früher erfolgte die Verarbeitung einzelner Frames weniger effizient oder präzise: Bei jedem Auslösen des Ereignisses [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) wurden Operationen auf der aktuellen Videoanzeige ausgeführt. Diese Technik bot keinen Zugriff auf die tatsächlichen Videoframes.

`requestVideoFrameCallback()` wird ähnlich wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Damit führen Sie eine Callback-Funktion aus, die eine Operation durchführt, sobald das nächste Videoframe an den Compositor übermittelt wird. Am Ende ruft der Callback erneut `requestVideoFrameCallback()` auf, damit er ausgeführt wird, wenn das nächste Videoframe komponiert wird, und so weiter. `requestVideoFrameCallback()` ist jedoch in mehrfacher Hinsicht auf Videooperationen zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videoframe.
- `requestAnimationFrame()` versucht, sich an die Bildwiederholrate des Displays anzupassen, die üblicherweise 60 Hz beträgt. `requestVideoFrameCallback()` versucht dagegen, sich an die Framerate des Videos anzupassen. Genauer gesagt wird der Callback mit der jeweils niedrigeren Rate aus Video-Framerate und Bildwiederholrate des Browsers ausgeführt. Bei einem Video mit 25 Bildern pro Sekunde in einem Browser, der mit 60 Hz zeichnet, werden Callbacks beispielsweise mit 25 Hz ausgelöst. Bei einem Video mit 120 Bildern pro Sekunde werden im selben Browser Callbacks mit 60 Hz ausgelöst.
- `requestVideoFrameCallback()` stellt der Callback-Funktion nützliche Videometadaten zur Verfügung.

Beachten Sie, dass `requestVideoFrameCallback()` keine strikte Garantie dafür bietet, dass die Ausgabe Ihres Callbacks mit der Framerate des Videos synchron bleibt. Der Callback kann unter Umständen erst eine vertikale Synchronisierung (V-Sync) nach der Anzeige des neuen Videoframes ausgelöst werden. (V-Sync ist eine Grafiktechnologie, die die Framerate eines Videos mit der Bildwiederholrate eines Monitors synchronisiert.)

Die API wird im Hauptthread ausgeführt, während die Videokomposition wahrscheinlich in einem separaten Kompositionsthread stattfindet. Berücksichtigen Sie die Zeit, die für diese Vorgänge benötigt wird, sowie die Zeit, bis sowohl das Video selbst als auch das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation auf dem Bildschirm erscheinen.

Sie können den Callback-Parameter `now` mit der Metadateneigenschaft `expectedDisplayTime` vergleichen, um festzustellen, ob Ihr Callback um einen V-Sync-Zyklus verspätet ist. Liegt `expectedDisplayTime` höchstens etwa fünf bis zehn Mikrosekunden nach `now`, wurde das Frame bereits gerendert. Liegt `expectedDisplayTime` ungefähr 16 Millisekunden in der Zukunft (bei einer Bildwiederholrate von 60 Hz für Browser und Bildschirm), ist der Callback einen V-Sync-Zyklus voraus.

## Beispiele

### Videoframes auf ein Canvas zeichnen

Dieses Beispiel zeigt, wie Sie mit `requestVideoFrameCallback()` die Frames eines Videos mit genau derselben Framerate wie das Video auf ein {{htmlelement("canvas")}}-Element zeichnen.
Außerdem zeigt es die Framerate des Videos an und gibt die Frame-Metadaten zu Debugging-Zwecken auf dem Bildschirm aus.
Die Framerate wird anhand der Metadaten `presentedFrames` und `mediaTime` berechnet, und zwar ab dem letzten Start der Wiedergabe oder dem letzten Sprung zu einer anderen Stelle im Video (Pausenzeiten werden nicht berücksichtigt).

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

let startFrames = null;
let startMediaTime = 0;

const resetFps = () => {
  startFrames = null;
};
video.addEventListener("play", resetFps);
video.addEventListener("seeked", resetFps);

const updateCanvas = (now, metadata) => {
  ctx.drawImage(video, 0, 0, width, height);

  if (startFrames === null) {
    startFrames = metadata.presentedFrames;
    startMediaTime = metadata.mediaTime;
  } else {
    const frames = metadata.presentedFrames - startFrames;
    const seconds = metadata.mediaTime - startMediaTime;
    fpsInfo.innerText = seconds > 0 ? (frames / seconds).toFixed(3) : 0;
  }
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

- Das Element {{HTMLElement("video")}}
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente Operationen für einzelne Videoframes mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
