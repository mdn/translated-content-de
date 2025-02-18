---
title: "HTMLVideoElement: requestVideoFrameCallback() Methode"
short-title: requestVideoFrameCallback()
slug: Web/API/HTMLVideoElement/requestVideoFrameCallback
l10n:
  sourceCommit: 22864371de02d8002e51bb14d7a8a870d0ba834d
---

{{APIRef("HTML DOM")}}

Die **`requestVideoFrameCallback()`**-Methode des [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Interfaces registriert eine Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Dies ermöglicht Entwicklern, effiziente Operationen auf jedem Videobild durchzuführen.

## Syntax

```js-nolint
requestVideoFrameCallback(callback)
```

### Parameter

- `callback`

  - : Die Callback-Funktion, die ausgeführt wird, wenn ein neues Videobild an den Kompositor gesendet wird. Diese enthält zwei Parameter:

    - `now`
      - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der der Callback aufgerufen wurde.
    - `metadata`

      - : Ein Objekt, das die folgenden Eigenschaften enthält:

        - `expectedDisplayTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, wann der Browser erwartet, dass das Bild sichtbar ist.
        - `height`
          - : Eine Zahl in Medien-Pixeln, welche die Höhe des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).
        - `mediaTime`
          - : Eine Zahl in Sekunden, die den Media-Presentation-Timestamp des dargestellten Bildes repräsentiert. Dies entspricht dem Timestamp des Bildes auf der [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime)-Zeitleiste.
        - `presentationTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit repräsentiert, zu der der Browser das Bild zur Komposition übermittelt hat.
        - `presentedFrames`
          - : Eine Zahl, die die Anzahl der bislang zur Komposition übermittelten Bilder zusammen mit dem aktuellen Callback repräsentiert. Dies kann verwendet werden, um festzustellen, ob Bilder zwischen Callback-Instanzen ausgelassen wurden.
        - `processingDuration`
          - : Eine Zahl in Sekunden, die die Dauer zwischen der Einreichung des kodierten Pakets mit dem gleichen Präsentations-Timestamp wie dieses Bild beim Decoder (`mediaTime`) und dem Zeitpunkt, an dem das dekodierte Bild zur Präsentation bereit war, repräsentiert.
        - `width`
          - : Eine Zahl in Medien-Pixeln, die die Breite des Videobildes repräsentiert (die sichtbaren dekodierten Pixel, ohne Anpassungen des Seitenverhältnisses).

        Zusätzliche Metadaten-Eigenschaften können in `requestVideoFrameCallback()`-Callbacks verwendet werden, die in [WebRTC](/de/docs/Web/API/WebRTC_API)-Anwendungen eingesetzt werden:

        - `captureTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das Bild aufgenommen wurde. Dies gilt für Videobilder von einer lokalen oder entfernten Quelle. Bei einer entfernten Quelle wird die Aufnahmezeit mithilfe der Uhrensynchronisation und RTCP-Senderberichte geschätzt, um RTP-Timestamps in Aufnahmezeit umzuwandeln.
        - `receiveTime`
          - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit angibt, zu der das kodierte Bild von der Plattform empfangen wurde. Dies gilt für Videobilder von einer entfernten Quelle, insbesondere für die Zeit, zu der das letzte Paket dieses Bildes über das Netzwerk empfangen wurde.
        - `rtpTimestamp`
          - : Eine Zahl, die den RTP-Timestamp darstellt, der mit diesem Videobild verknüpft ist.

> [!NOTE] > `width` und `height` können in bestimmten Fällen (zum Beispiel bei anamorphotischen Videos, deren Pixel rechteckig sind) von [`HTMLVideoElement.videoWidth`](/de/docs/Web/API/HTMLVideoElement/videoWidth) und [`HTMLVideoElement.videoHeight`](/de/docs/Web/API/HTMLVideoElement/videoHeight) abweichen.

### Rückgabewert

Eine Zahl, die eine eindeutige Callback-ID darstellt.

Diese kann an [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback) übergeben werden, um die Registrierung des Callbacks zu stornieren.

## Beschreibung

Typische Anwendungsfälle für `requestVideoFrameCallback()` umfassen Videobearbeitung und das Zeichnen auf ein Canvas, Videoanalyse und die Synchronisation mit externen Audioquellen. Die Verarbeitung eines jeden Bildes wurde früher auf weniger effiziente oder genaue Weise durchgeführt, indem Operationen ausgeführt wurden, wann immer das [`timeupdate`](/de/docs/Web/API/HTMLMediaElement/timeupdate_event)-Ereignis ausgelöst wurde. Diese Technik bot jedoch keinen Zugriff auf die tatsächlichen Videobilder.

`requestVideoFrameCallback()` wird auf ähnliche Weise wie [`Window.requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame) verwendet. Sie verwenden es, um eine Callback-Funktion auszuführen, die nach der Komposition des nächsten Videobildes eine Operation ausführt. Der Callback endet, indem `requestVideoFrameCallback()` erneut aufgerufen wird, um ihn beim nächsten zusammengesetzten Videobild erneut auszuführen, und so weiter. Allerdings ist `requestVideoFrameCallback()` in mehreren Aspekten speziell für Videooperationen zugeschnitten:

- `requestVideoFrameCallback()` bietet zuverlässigen Zugriff auf jedes einzelne Videobild.
- `requestAnimationFrame()` versucht, die Bildwiederholfrequenz des Displays abzugleichen, die typischerweise 60 Hz beträgt. `requestVideoFrameCallback()` hingegen versucht, die Videobildrate abzugleichen. Genauer gesagt läuft der Callback mit der niedrigeren Frequenz aus Videobildrate und Browser-Bildwiederholrate. Ein Video mit einer Bildrate von 25 fps, das in einem Browser mit 60 Hz läuft, würde beispielsweise Callbacks mit einer Frequenz von 25 Hz auslösen. Ein Video mit einer Bildrate von 120 fps im selben 60-Hz-Browser würde Callbacks mit 60 Hz auslösen.
- `requestVideoFrameCallback()` stellt im Callback nützliche Videometadaten zur Verfügung.

Es sollte beachtet werden, dass `requestVideoFrameCallback()` keine strikten Garantien bietet, dass die Ausgabe Ihres Callbacks mit der Videobildrate synchron bleibt. Es kann passieren, dass sie eine vertikale Synchronisation (v-sync) später als das neue Videobild ausgelöst wird. (V-sync ist eine Grafiktechnologie, die die Bildrate eines Videos mit der Aktualisierungsrate eines Monitors synchronisiert.)

Die API läuft auf dem Hauptthread, während die Videokomposition wahrscheinlich auf einem separaten Kompositionsthread stattfindet. Sie müssen die Zeit einkalkulieren, die diese Operationen in Anspruch nehmen, sowie die Zeit, die das Video selbst und das Ergebnis Ihrer `requestVideoFrameCallback()`-Operation benötigen, um auf dem Bildschirm angezeigt zu werden.

Sie können den `now`-Callback-Parameter und die `expectedDisplayTime`-Metadateneigenschaft vergleichen, um festzustellen, ob Ihr Callback eine v-sync verspätet ist. Wenn `expectedDisplayTime` innerhalb von etwa fünf bis zehn Mikrosekunden von `now` liegt, ist das Bild bereits gerendert. Wenn die `expectedDisplayTime` ungefähr sechzehn Millisekunden in der Zukunft liegt (unter der Annahme, dass Ihr Browser/Display mit 60 Hz aktualisiert wird), dann ist der Callback eine v-sync außerhalb.

## Beispiele

### Videobilder auf ein Canvas zeichnen

Dieses Beispiel zeigt, wie `requestVideoFrameCallback()` verwendet wird, um die Bilder eines Videos bei genau der gleichen Bildrate wie das Video auf ein {{htmlelement("canvas")}}-Element zu zeichnen. Es protokolliert auch die Bildmetadaten zur Fehlerbehebung im DOM.

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

Eine funktionierende Implementierung des obigen Codes finden Sie unter [requestVideoFrameCallback Demo](https://requestvideoframecallback.glitch.me/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- [`HTMLVideoElement.cancelVideoFrameCallback()`](/de/docs/Web/API/HTMLVideoElement/cancelVideoFrameCallback)
- [Effiziente per-Videobild-Operationen mit `requestVideoFrameCallback()` durchführen](https://web.dev/articles/requestvideoframecallback-rvfc) auf developer.chrome.com (2023)
