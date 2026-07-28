---
title: "ManagedSourceBuffer: bufferedchange-Ereignis"
short-title: bufferedchange
slug: Web/API/ManagedSourceBuffer/bufferedchange_event
l10n:
  sourceCommit: ac7f589f2471fde8e5ee910a7fbd8a4bff931140
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Das **`bufferedchange`**-Ereignis der [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)-Schnittstelle wird ausgelöst, wenn sich der gepufferte Bereich des `ManagedSourceBuffer` ändert. Dies kann nach einem Aufruf von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove), [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) oder infolge der Ausführung des Speicherbereinigungsalgorithmus durch den User-Agent geschehen.

Dieses Ereignis ist wichtig für Anwendungen, die eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) verwenden, da der User-Agent jederzeit gepufferten Inhalt auswerfen kann. Durch das Hören auf dieses Ereignis können Anwendungen erkennen, wenn gepufferte Daten entfernt wurden, und darauf reagieren, indem sie Ersatzsegmente abrufen, um Wiedergabeverzögerungen zu vermeiden.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("bufferedchange", (event) => {});

onbufferedchange = (event) => {};
```

## Ereignistyp

Ein [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BufferedChangeEvent")}}

## Beispiele

### Änderungen im gepufferten Bereich verfolgen

Dieses Beispiel richtet eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) ein, fügt einen Quellpuffer hinzu, ruft eine fragmentierte MP4-Datei ab und hört auf das `bufferedchange`-Ereignis, um Änderungen in den gepufferten Bereichen zu protokollieren.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const source = new ManagedMediaSource();
  const video = document.createElement("video");

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added: ${event.addedRanges.start(i)}s - ${event.addedRanges.end(i)}s`,
        );
      }
      for (let i = 0; i < event.removedRanges.length; i++) {
        console.log(
          `Removed: ${event.removedRanges.start(i)}s - ${event.removedRanges.end(i)}s`,
        );
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
