---
title: "MediaStreamTrackProcessor: discardedFrames-Eigenschaft"
short-title: discardedFrames
slug: Web/API/MediaStreamTrackProcessor/discardedFrames
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Die **`discardedFrames`**-Eigenschaft des [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) Interface gibt eine Zahl zurück, die angibt, wie viele Frames vom Prozessor verworfen wurden.

## Wert

Eine Zahl.

## Beispiele

### Grundlegende Nutzung

```js
async function init() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const [track] = stream.getVideoTracks();

    const processor = new MediaStreamTrackProcessor({
      track,
      maxBufferSize: 1,
    });
    const reader = processor.readable.getReader();

    while (true) {
      const { value: frame, done } = await reader.read();
      if (done) break;

      // Do something with frame...
      frame.close();

      console.log(
        `total: ${processor.totalFrames}, discarded: ${processor.discardedFrames}`,
      );
    }
  } catch (e) {
    console.error(e.name, e.message);
  }
}

document.querySelector("button").addEventListener("click", init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStreamTrackProcessor.totalFrames`](/de/docs/Web/API/MediaStreamTrackProcessor/totalFrames)
