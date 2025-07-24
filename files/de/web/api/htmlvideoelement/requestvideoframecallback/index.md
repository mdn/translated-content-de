---
title: "HTMLVideoElement: Methode requestVideoFrameCallback()"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 97428527b15058e50f47a311da4eea78f7eac45f
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`**-Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neuer Video-Frame an den Kompositor gesendet wird. Dies ermöglicht Entwicklern effiziente Operationen auf jedem Video-Frame durchzuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`
  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neuer Video-Frame an den Kompositor gesendet wird. Diese enthält zwei Parameter:
    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Callback aufgerufen wurde.
    - `metadata`
      - : Ein Objekt, das die folgenden Eigenschaften enthält:
        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser erwartet, dass der Frame sichtbar ist.
        - `height`
          - : Eine Zahl, in Medien-Pixeln, die die Höhe des Video-Frames repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl, in Sekunden, die den Medien-Präsentationszeitstempel des dargestellten Frames repräsentiert. Dies entspricht dem Zeitstempel des Frames auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Zeitleiste.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser den Frame zur Komposition übermittelt hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bisher zusammen mit dem aktuellen Callback für die Komposition übermittelten Frames repräsentiert. Dies kann verwendet werden, um zu erkennen, ob zwischen den Callback-Instanzen Frames verpasst wurden.
        - `processingDuration`
          - : Eine Zahl, in Sekunden, die die Dauer zwischen der Übermittlung des kodierten Pakets mit demselben Präsentationszeitstempel wie dieser Frame an den Decoder (d.h. die `mediaTime`) und dem bereitgestellten dekodierten Frame zur Präsentation darstellt.
        - `width`
          - : Eine Zahl, in Medien-Pixeln, die die Breite des Video-Frames repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können innerhalb von `requestVideoFrameCallback()`-Callbacks verwendet werden, die in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen benutzt werden:
        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Frame erfasst wurde. Dies gilt für Video-Frames von einer lokalen oder entfernten Quelle. Für eine entfernte Quelle wird die Erfassungszeit unter Verwendung von Uhren-Synchronisation und RTCP-Senderberichten geschätzt, um RTP-Zeitstempel in Erfassungszeit umzuwandeln.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der kodierte Frame von der Plattform empfangen wurde. Dies gilt für Video-Frames, die von einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, zu der das letzte zu diesem Frame gehörende Paket über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Zeitstempel repräsentiert, der mit diesem Video-Frame verbunden ist.

> [!NOTE]
> `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (zum Beispiel kann ein anamorphes Video rechteckige Pixel haben).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID repräsentiert.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Registrierung des Callbacks zu stornieren.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` sind Videoverarbeitung und -zeichnung auf eine Leinwand, Videoanalyse und Synchronisierung mit externen Audioquellen. Die Verarbeitung pro Frame wurde früher auf weniger effiziente oder weniger genaue Weise durchgeführt, indem Operationen auf der aktuellen Videoanzeige ausgeführt wurden, wann immer das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Video-Frames.

`requestVideoFrameCallback()` wird auf die gleiche Weise verwendet wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame). Sie verwenden es, um eine Callback-Funktion auszuführen, die eine Operation durchführt, wenn der nächste Video-Frame an den Kompositor gesendet wird. Der Callback endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Callback auszuführen, wenn der nächste Video-Frame zur Komposition bereitsteht, und so weiter. Allerdings ist `requestVideoFrameCallback()` für Video-Operationen in mehrfacher Hinsicht angepasst:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jeden einzelnen Video-Frame.
- `requestAnimationFrame()` versucht, die Bildwiederholrate des Displays abzugleichen, die typischerweise bei 60Hz liegt. `requestVideoFrameCallback()` hingegen versucht, die Video-Frame-Rate abzugleichen. Genauer gesagt wird der Callback mit der niedrigeren Rate von Video-Frame-Rate und Browser-Paint-Refresh-Rate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25fps, das in einem Browser abgespielt wird, der mit 60Hz zeichnet, Callback-Aufrufe mit einer Rate von 25Hz auslösen. Ein Video mit einer Bildrate von 120fps, das im gleichen 60Hz-Browser läuft, würde Callback-Aufrufe mit 60Hz auslösen.
- `requestVideoFrameCallback()` stellt nützliche Video-Metadaten in der Callback-Funktion zur Verfügung.

Eine Sache, die zu beachten ist, ist, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Video-Frame-Rate synchron bleibt. Es kann am Ende eine vertikale Synchronisation (v-sync) später ausgelöst werden, als wenn der neue Video-Frame präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Bildwiederholfrequenz eines Monitors synchronisiert.)

Die API läuft im Haupt-Thread, während die Video-Komposition wahrscheinlich in einem separaten Kompositionsthread stattfindet. Sie müssen die Zeit, die für diese Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigt, um auf dem Bildschirm angezeigt zu werden, berücksichtigen.

Sie können den `now`-Callback-Parameter und die `expectedDisplayTime`-Metadaten-Eigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync-Verspätung hat. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist der Frame bereits gerendert. Wenn die `expectedDisplayTime` ungefähr sechzehn Millisekunden in der Zukunft liegt (angenommen, Ihr Browser/Display aktualisiert mit 60Hz), dann ist der Callback eine v-sync-Verspätung.

## Beispiele

### Zeichnen von Video-Frames auf eine Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Frames eines Videos auf ein {{htmlelement("canvas")}}-Element zu zeichnen, und zwar mit genau der gleichen Bildrate wie das Video. Es protokolliert auch die Frame-Metadaten zur Überprüfung auf dem Bildschirm.

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

{{embedlivesample("drawing_video_frames_on_a_canvas", , "540")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente Operationen pro Video-Frame auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
