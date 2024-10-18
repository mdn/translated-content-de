---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 4b8a61f43b4abc25cda6da5462a5f73d2d280fb5
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`** Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videobild durchzuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`

  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Diese enthält zwei Parameter:

    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt darstellt, an dem das Callback aufgerufen wurde.
    - `metadata`

      - : Ein Objekt, das die folgenden Eigenschaften enthält:

        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt darstellt, zu dem der Browser erwartet, dass das Bild sichtbar ist.
        - `height`
          - : Eine Zahl in Medienpixeln, die die Höhe des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassung des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Medienpräsentationszeitstempel des präsentierten Bildes darstellt. Dies entspricht dem Zeitstempel des Bildes auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) Zeitachse.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt darstellt, zu dem der Browser das Bild zur Komposition eingereicht hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bisher zur Komposition eingereichten Bilder zusammen mit dem aktuellen Callback darstellt.
            Dies kann verwendet werden, um zu erkennen, ob Bilder zwischen den Callback-Instanzen verpasst wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Einreichung des kodierten Pakets mit dem gleichen Präsentationszeitstempel wie dieses Bild beim Decoder (d.h. der `mediaTime`) und dem dekodierten Bild, das zur Präsentation bereit ist, darstellt.
        - `width`
          - : Eine Zahl in Medienpixeln, die die Breite des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassung des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können innerhalb von `requestVideoFrameCallback()` Callbacks verwendet werden, die in [WebRTC](/de/docs/Web/API/WebRTC_API) Anwendungen genutzt werden:

        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt darstellt, zu dem das Bild aufgenommen wurde. Dies gilt für Videobilder, die von einer lokalen oder entfernten Quelle stammen. Für eine entfernte Quelle wird die Aufnahmezeit mithilfe von Uhrensynchronisation und RTCP-Senderberichten geschätzt, um RTP-Zeitstempel in Aufnahmezeit umzurechnen.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der den Zeitpunkt darstellt, zu dem das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder, die von einer entfernten Quelle stammen. Konkret entspricht dies dem Zeitpunkt, zu dem das letzte Paket, das zu diesem Bild gehört, über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Zeitstempel darstellt, der mit diesem Videobild verknüpft ist.

> **Note:** `width` und `height` können in bestimmten Fällen von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen (zum Beispiel, bei einem anamorphotischen Video, das rechteckige Pixel haben könnte).

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID repräsentiert.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Callback-Registrierung abzubrechen.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen die Videobearbeitung und das Zeichnen auf eine Leinwand, Videoanalyse und Synchronisation mit externen Audioquellen. Die Verarbeitung pro Bild wurde früher in einer weniger effizienten oder genauen Weise durchgeführt, indem bei jedem Abfeuern des [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event) Ereignisses Operationen auf der aktuellen Videodarstellung durchgeführt wurden. Diese Technik bot keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird auf die gleiche Weise wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie nutzen es, um eine Callback-Funktion auszuführen, die eine Operation durchführt, wenn das nächste Videobild an den Kompositor gesendet wird. Das Callback endet mit einem erneuten Aufruf von `requestVideoFrameCallback()`, um das Callback auszuführen, wenn das nächste Videobild zusammengesetzt wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` auf Videooperationen in mehrfacher Hinsicht zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Bildwiederholfrequenz des Displays zu treffen, die typischerweise bei 60Hz liegt. `requestVideoFrameCallback()` hingegen versucht, die Videobildfrequenz zu treffen. Genauer gesagt, das Callback wird mit der niedrigeren der beiden, der Videobildfrequenz oder der Aktualisierungsrate des Browser-Paintings ausgelöst. Ein Video mit einer Bildfrequenz von 25fps, das in einem Browser abgespielt wird, der mit 60Hz malt, würde Callbacks mit einer Frequenz von 25Hz auslösen. Ein Video mit einer Bildfrequenz von 120fps, das im gleichen 60Hz Browser läuft, würde Callbacks bei 60Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Videometadaten in der Callback-Funktion verfügbar.

Eine Sache, die Sie beachten sollten, ist, dass `requestVideoFrameCallback()` keine strengen Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Videobildfrequenz synchron bleibt. Es kann möglicherweise eine vertikale Synchronisation (v-sync) später ausgelöst werden, als das neue Videobild präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildfrequenz eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft im Hauptthread, während die Videokomposition wahrscheinlich auf einem separaten Kompositionsthead erfolgt. Sie müssen die Zeit berücksichtigen, die für das Abschließen dieser Operationen benötigt wird, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()` Operation zum Anzeigen auf dem Bildschirm benötigt.

Sie können das `now` Callback-Parameter und die `expectedDisplayTime` Metadaten-Eigenschaft vergleichen, um festzustellen, ob Ihr Callback ein v-sync später erfolgt. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Bild bereits gerendert. Wenn die `expectedDisplayTime` ungefähr sechzehn Millisekunden in der Zukunft liegt (vorausgesetzt, Ihr Browser/Bildschirm aktualisiert mit 60Hz), dann ist das Callback ein v-sync aus.

## Beispiele

### Zeichnen von Videobildern auf eine Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos auf ein {{htmlelement("canvas")}} Element mit genau derselben Bildfrequenz wie das Video zu zeichnen. Es protokolliert auch die Bild-Metadaten im DOM zu Debugging-Zwecken.

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

Sehen Sie sich [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/) für eine funktionierende Implementierung des obigen Codes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}} Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente per-Videobild-Operationen auf Video mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
