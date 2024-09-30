---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`** Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen an jedem Video-Frame durchzuführen.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` beinhalten die Videobearbeitung und das Malen auf eine Leinwand, die Videoanalyse und die Synchronisation mit externen Audioquellen. Die Verarbeitung pro Frame wurde zuvor auf weniger effiziente oder genaue Weise durchgeführt, indem Operationen auf der aktuellen Videowiedergabe ausgeführt wurden, wann immer das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Video-Frames.

`requestVideoFrameCallback()` wird in der gleichen Weise wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie nutzen es, um eine Callback-Funktion auszuführen, die eine Operation ausführt, wenn das nächste Video-Frame an den Kompositor gesendet wird. Das Callback endet, indem es `requestVideoFrameCallback()` erneut aufruft, um das Callback auszuführen, wenn das nächste Video-Frame zusammengesetzt wird, und so weiter. `requestVideoFrameCallback()` ist jedoch in mehreren Aspekten speziell für Video-Operationen ausgelegt:

- `requestVideoFrameCallback()` bietet verlässlichen Zugriff auf jedes einzelne Video-Frame.
- `requestAnimationFrame()` versucht, die Bildwiederholfrequenz des Displays zu treffen, die typischerweise bei 60Hz liegt. `requestVideoFrameCallback()` hingegen versucht, die Video-Bildrate zu treffen. Genauer gesagt, das Callback wird bei der niedrigeren der Video-Bildrate und der Browser-Aktualisierungsrate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25fps, das in einem Browser wiedergegeben wird, der bei 60Hz malt, Callbacks mit einer Rate von 25Hz auslösen. Ein Video mit einer Bildrate von 120fps, das im selben 60Hz Browser läuft, würde Callbacks bei 60Hz auslösen.
- `requestVideoFrameCallback()` stellt nützliche Videometadaten in der Callback-Funktion zur Verfügung.

Es ist zu beachten, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Video-Bildrate synchron bleibt. Es kann vorkommen, dass es um eine vertikale Synchronisation (v-sync) später als das neue Video-Frame präsentiert wird. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft im Hauptthread, während die Videozusammensetzung wahrscheinlich in einem separaten Zusammensetzungsthread stattfindet. Sie müssen die Zeit berücksichtigen, die für die Durchführung dieser Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()` Operation benötigen, um auf dem Bildschirm angezeigt zu werden.

Sie können den `now` Callback-Parameter und die `expectedDisplayTime` Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync zu spät ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Frame bereits gerendert. Wenn die `expectedDisplayTime` etwa sechzehn Millisekunden in der Zukunft liegt (vorausgesetzt, Ihr Browser/Bildschirm aktualisiert mit 60Hz), dann ist das Callback eine v-sync aus.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`

  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Video-Frame an den Kompositor gesendet wird. Diese enthält zwei Parameter:

    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das Callback aufgerufen wurde.
    - `metadata`

      - : Ein Objekt mit den folgenden Eigenschaften:

        - `expectedDisplayTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser erwartet, dass das Frame sichtbar wird.
        - `height`: Eine Zahl in Mediapixeln, die die Höhe des Video-Frames (die sichtbaren, dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) repräsentiert.
        - `mediaTime`: Eine Zahl in Sekunden, die den medienpräsentations-Zeitstempel des präsentierten Frames repräsentiert. Dies entspricht dem Zeitstempel des Frames auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Zeitachse.
        - `presentationTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser das Frame zur Komposition eingereicht hat.
        - `presentedFrames`: Eine Zahl, die die Anzahl der bisher zur Komposition eingereichten Frames neben dem aktuellen Callback repräsentiert. Dies kann verwendet werden, um festzustellen, ob Frames zwischen Callback-Instanzen verpasst wurden.
        - `processingDuration`: Eine Zahl in Sekunden, die die Dauer vom Einreichen des kodierten Pakets mit dem gleichen Präsentationszeitstempel wie dieses Frame an den Dekoder (d.h. die `mediaTime`) bis zum Dekodieren des Frames für die Präsentation repräsentiert.
        - `width`: Eine Zahl in Mediapixeln, die die Breite des Video-Frames (die sichtbaren, dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) repräsentiert.

        Zusätzliche Metadaten-Eigenschaften können innerhalb von `requestVideoFrameCallback()` Callbacks verwendet werden, die in [WebRTC](/de/docs/Web/API/WebRTC_API) Anwendungen genutzt werden:

        - `captureTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das Frame erfasst wurde. Dies gilt für Video-Frames, die aus einer lokalen oder entfernten Quelle stammen. Für eine entfernte Quelle wird die Erfassungszeit unter Verwendung von Clock-Synchronisation und RTCP-Senderberichten geschätzt, um RTP-Zeitstempel in Erfassungszeit zu konvertieren.
        - `receiveTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das kodierte Frame von der Plattform empfangen wurde. Dies gilt für Video-Frames, die aus einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, zu der das letzte zu diesem Frame gehörende Paket über das Netzwerk empfangen wurde.
        - `rtpTimestamp`: Eine Zahl, die den RTP-Zeitstempel darstellt, der diesem Video-Frame zugeordnet ist.

> **Note:** `width` und `height` können sich in bestimmten Fällen (zum Beispiel bei einem anamorphotischen Video mit Rechteckpixeln) von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) unterscheiden.

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Callback-Registrierung abzubrechen.

## Beispiele

### Zeichnen von Video-Frames auf eine Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Frames eines Videos auf ein {{htmlelement("canvas")}} Element zu zeichnen, genau mit der gleichen Bildrate wie das Video. Es loggt auch die Frame-Metadaten in das DOM zu Debugging-Zwecken.

```js
if ("requestVideoFrameCallback" in HTMLVideoElement.prototype) {
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

- Das {{HTMLElement("video")}} Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente pro-Video-Frame-Operationen auf Videos mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
