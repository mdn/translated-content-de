---
title: "MediaStreamTrackProcessor: discardedFrames Eigenschaft"
short-title: discardedFrames
slug: Web/API/MediaStreamTrackProcessor/discardedFrames
l10n:
  sourceCommit: e57e3fdd4ab6fb372ddc3d78e5b428f318202426
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Die **`discardedFrames`**-Eigenschaft des [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) Schnittstelle liefert eine Zahl, die angibt, wie viele Frames vom Prozessor verworfen wurden.

## Wert

Eine Zahl.

## Beispiele

### Grundlegende Verwendung

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

[`MediaStreamTrackProcessor.totalframes`](/de/docs/Web/API/MediaStreamTrackProcessor/totalFrames)
