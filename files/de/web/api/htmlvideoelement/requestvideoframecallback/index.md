---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`** Methode der [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videobild durchzuführen.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen die Videoverarbeitung und das Zeichnen auf eine Leinwand, die Videoanalyse sowie die Synchronisation mit externen Audioquellen. Die Verarbeitung pro Bild wurde früher weniger effizient oder genau durchgeführt, indem Operationen auf dem aktuellen Videodisplay ausgeführt wurden, wann immer das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird auf die gleiche Weise wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie benutzen es, um eine Callback-Funktion auszuführen, die eine Operation ausführt, wenn das nächste Videobild an den Kompositor gesendet wird. Der Callback endet damit, `requestVideoFrameCallback()` erneut aufzurufen, um den Callback auszuführen, wenn das nächste Videobild zusammengesetzt wird, und so weiter. `requestVideoFrameCallback()` ist jedoch in mehrfacher Hinsicht für Videooperationen zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Display-Aktualisierungsrate anzupassen, die typischerweise 60Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, die Video-Bildrate anzupassen. Genauer gesagt wird der Callback mit der niedrigeren Rate zwischen der Video-Bildrate und der Browser-Aktualisierungsrate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25fps in einem Browser, der mit 60Hz zeichnet, Callbacks mit einer Rate von 25Hz auslösen. Ein Video mit einer Bildrate von 120fps im gleichen 60Hz-Browser würde Callbacks mit 60Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Videometadaten in der Callback-Funktion verfügbar.

Ein Punkt, den Sie beachten sollten, ist, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Videobildrate synchron bleibt. Es kann sein, dass es eine vertikale Synchronisation (v-sync) später ausgelöst wird, als das neue Videobild präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft im Hauptthread, während die Videokomposition wahrscheinlich auf einem separaten Kompositionsthread erfolgt. Sie müssen die Zeit berücksichtigen, die für diese Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigen, um auf dem Bildschirm angezeigt zu werden.

Sie können den `now`-Callback-Parameter und die `expectedDisplayTime`-Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync-Spätphase hat. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden nach `now` liegt, ist das Bild bereits gerendert. Wenn die `expectedDisplayTime` etwa sechzehn Millisekunden in der Zukunft liegt (vorausgesetzt, Ihr Browser/Bildschirm aktualisiert mit 60Hz), dann ist der Callback eine v-sync aus.

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

        - `expectedDisplayTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser erwartet, dass das Bild sichtbar wird.
        - `height`: Eine Zahl in Medienpixeln, die die Höhe des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`: Eine Zahl in Sekunden, die den Präsentationszeitstempel des dargestellten Bildes im Medium repräsentiert. Dies entspricht dem Zeitstempel des Bildes auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Zeitleiste.
        - `presentationTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser das Bild zur Zusammensetzung übergeben hat.
        - `presentedFrames`: Eine Zahl, die die Anzahl der bisher zusammen mit dem aktuellen Callback zur Zusammensetzung übergebenen Bilder repräsentiert. Dies kann verwendet werden, um zu erkennen, ob Bilder zwischen Callback-Instanzen verpasst wurden.
        - `processingDuration`: Eine Zahl in Sekunden, die die Dauer zwischen der Übermittlung des kodierten Pakets mit dem gleichen Präsentationszeitstempel wie dieses Bild an den Decoder (d.h. die `mediaTime`) und dem dekodierten Bild, das für die Präsentation bereit ist, repräsentiert.
        - `width`: Eine Zahl in Medienpixeln, die die Breite des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können innerhalb von in [WebRTC](/de/docs/Web/API/WebRTC_API) Anwendungen verwendeten `requestVideoFrameCallback()` Callbacks verfügbar sein:

        - `captureTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das Bild aufgenommen wurde. Dies gilt für Videobilder, die von einer lokalen oder entfernten Quelle stammen. Für eine entfernte Quelle wird die Aufnahmezeit unter Verwendung von Uhren-Synchronisation und RTCP-Senderberichten geschätzt, um RTP-Zeitstempel in Aufnahmezeiten zu konvertieren.
        - `receiveTime`: Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder, die von einer entfernten Quelle stammen. Insbesondere entspricht dies der Zeit, zu der das letzte Paket, das zu diesem Bild gehört, über das Netzwerk empfangen wurde.
        - `rtpTimestamp`: Eine Zahl, die den RTP-Zeitstempel repräsentiert, der diesem Videobild zugeordnet ist.

> **Note:** `width` und `height` können in bestimmten Fällen (zum Beispiel bei einem anamorphotischen Video, das rechteckige Pixel aufweist) von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen.

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID repräsentiert.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Callback-Registrierung abzubrechen.

## Beispiele

### Zeichnen von Videobildern auf einer Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos auf ein {{htmlelement("canvas")}}-Element mit genau der gleichen Bildrate wie das Video zu zeichnen. Es protokolliert auch die Bildmetadaten im DOM zu Debugging-Zwecken.

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

Sehen Sie [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/) für eine funktionierende Implementierung des obigen Codes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effizientes pro-Videobild-Operationen auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
