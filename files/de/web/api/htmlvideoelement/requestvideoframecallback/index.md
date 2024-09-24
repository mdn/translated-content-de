---
title: "HTMLVideoElement: Methode requestVideoFrameCallback()"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 66c21fab17a23004a23c5fb78cec74965f038e12
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`**-Methode der {{domxref("HTMLVideoElement")}}-Schnittstelle registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Compositor gesendet wird. Dies ermöglicht es Entwicklern, effiziente Operationen auf jedem Videobild durchzuführen.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen die Videoverarbeitung und das Malen auf eine Leinwand, Videoanalyse und Synchronisierung mit externen Audioquellen. Die Verarbeitung pro Bild erfolgte früher auf weniger effiziente oder genaue Weise, indem Operationen auf der aktuellen Videodarstellung ausgeführt wurden, wann immer das {{domxref("HTMLMediaElement.timeupdate_event", "timeupdate")}}-Ereignis ausgelöst wurde. Diese Technik bot keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird in derselben Weise wie {{domxref("Window.requestAnimationFrame()")}} verwendet. Sie verwenden es, um eine Callback-Funktion auszuführen, die eine Operation ausführt, wenn das nächste Videobild an den Compositor gesendet wird. Der Callback endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um den Callback auszuführen, wenn das nächste Videobild zusammengesetzt wird, und so weiter. Allerdings ist `requestVideoFrameCallback()` in mehreren Punkten auf Videooperationen zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Bildwiederholfrequenz des Displays anzupassen, die typischerweise 60 Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, die Bildrate des Videos anzupassen. Der Callback wird genauer gesagt bei der niedrigeren der Videobildrate und der Browser-Bildwiederholrate ausgeführt. Zum Beispiel würde ein Video mit einer Bildrate von 25 fps, das in einem Browser abgespielt wird, der mit 60 Hz aktualisiert wird, Callbacks mit einer Rate von 25 Hz auslösen. Ein Video mit einer Bildrate von 120 fps, das im selben 60-Hz-Browser ausgeführt wird, würde Callbacks mit 60 Hz auslösen.
- `requestVideoFrameCallback()` macht nützliche Videometadaten in der Callback-Funktion verfügbar.

Ein Punkt, den Sie beachten sollten, ist, dass `requestVideoFrameCallback()` keine strengen Garantien bietet, dass der Output Ihres Callbacks mit der Videobildrate synchron bleibt. Es kann passieren, dass es einen Vertikalsynchronisations-Takt (v-sync) später ausgelöst wird, als das neue Videobild präsentiert wurde. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Bildwiederholfrequenz eines Monitors synchronisiert.)

Die API läuft auf dem Haupt-Thread, während die Videokomposition wahrscheinlich auf einem separaten Kompositions-Thread erfolgt. Sie müssen die Zeit, die für diese Operationen benötigt wird, sowie die Zeit, die für die Anzeige des Videos selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigt wird, berücksichtigen.

Sie können die `now`-Callback-Parameter und die `expectedDisplayTime`-Metadaten-Eigenschaft vergleichen, um festzustellen, ob Ihr Callback ein v-sync zu spät ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Bild bereits gerendert. Wenn `expectedDisplayTime` etwa sechzehn Millisekunden in der Zukunft liegt (angenommen, Ihr Browser/Bildschirm wird mit 60 Hz aktualisiert), dann ist der Callback ein v-sync out.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`

  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Compositor gesendet wird. Diese enthält zwei Parameter:

    - `now`
      - : Ein {{domxref("DOMHighResTimeStamp")}} der die Zeit angibt, zu der der Callback aufgerufen wurde.
    - `metadata`

      - : Ein Objekt, das die folgenden Eigenschaften enthält:

        - `expectedDisplayTime`: Ein {{domxref("DOMHighResTimeStamp")}}, der angibt, wann der Browser erwartet, dass das Bild sichtbar wird.
        - `height`: Eine Zahl in Mediapixeln, die die Höhe des Videobildes (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) darstellt.
        - `mediaTime`: Eine Zahl in Sekunden, die den Mediapräsentations-Zeitstempel des dargestellten Bildes darstellt. Dies entspricht dem Zeitstempel des Bildes auf der {{domxref("HTMLMediaElement.currentTime")}}-Timeline.
        - `presentationTime`: Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt darstellt, zu dem der Browser das Bild zur Komposition eingereicht hat.
        - `presentedFrames`: Eine Zahl, die die Anzahl der bisher gemeinsam mit dem aktuellen Callback für die Komposition eingereichten Bilder darstellt. Dies kann verwendet werden, um festzustellen, ob zwischen den Callback-Instanzen Bilder verpasst wurden.
        - `processingDuration`: Eine Zahl in Sekunden, die die Dauer zwischen der Einreichung des kodierten Pakets mit demselben Präsentations-Zeitstempel wie dieses Bild beim Decoder (d.h. die `mediaTime`) und dem Zeitpunkt darstellt, zu dem das dekodierte Bild für die Präsentation bereit war.
        - `width`: Eine Zahl in Mediapixeln, die die Breite des Videobildes (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses) darstellt.

        Zusätzliche Metadaten-Eigenschaften sind möglicherweise innerhalb von `requestVideoFrameCallback()`-Callbacks verfügbar, die in {{domxref("WebRTC_API", "WebRTC", "", "nocode")}}-Anwendungen verwendet werden:

        - `captureTime`: Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt darstellt, zu dem das Bild aufgenommen wurde. Dies gilt für Videobilder aus einer lokalen oder entfernten Quelle. Bei einer entfernten Quelle wird die Aufnahmezeit anhand von Uhrensynchronisation und RTCP-Senderberichten geschätzt, um RTP-Zeitstempel in Aufnahmezeit umzuwandeln.
        - `receiveTime`: Ein {{domxref("DOMHighResTimeStamp")}}, der den Zeitpunkt darstellt, zu dem das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder aus einer entfernten Quelle. Insbesondere entspricht dies dem Zeitpunkt, zu dem das letzte zu diesem Bild gehörende Paket über das Netzwerk empfangen wurde.
        - `rtpTimestamp`: Eine Zahl, die den RTP-Zeitstempel darstellt, der mit diesem Videobild verknüpft ist.

> **Note:** `width` und `height` können sich in bestimmten Fällen (zum Beispiel bei einem anamorphotischen Video mit rechteckigen Pixeln) von {{domxref("HTMLVideoElement.videoWidth")}} und {{domxref("HTMLVideoElement.videoHeight")}} unterscheiden.

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}} übergeben werden, um die Callback-Registrierung zu stornieren.

## Beispiele

### Zeichnen von Videobildern auf einer Leinwand

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos auf ein {{htmlelement("canvas")}}-Element mit genau derselben Bildrate wie das Video zu zeichnen. Es protokolliert auch die Bildmetadaten im DOM zu Debugging-Zwecken.

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

    // Re-registrieren des Callback, um beim nächsten Bild ausgeführt zu werden
    video.requestVideoFrameCallback(updateCanvas);
  };

  // Erste Registrierung des Callback, um beim ersten Bild ausgeführt zu werden
  video.requestVideoFrameCallback(updateCanvas);
} else {
  alert("Ihr Browser unterstützt requestVideoFrameCallback() nicht.");
}
```

Siehe [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/) für eine funktionierende Implementierung des obigen Codes.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- {{DOMxRef("HTMLVideoElement.cancelVideoFrameCallback()")}}
- [Effiziente per-Videobild-Operationen mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
