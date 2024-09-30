---
title: "MediaStreamTrackProcessor: readable-Eigenschaft"
short-title: readable
slug: Web/API/MediaStreamTrackProcessor/readable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Die **`readable`**-Eigenschaft der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)-Schnittstelle gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Wert

Ein [`ReadableStream`](/de/docs/Web/API/ReadableStream).

## Beispiele

Im folgenden Beispiel werden Videoframes aus dem [`ReadableStream`](/de/docs/Web/API/ReadableStream) transformiert.

```js
const trackProcessor = new MediaStreamTrackProcessor({ track: videoTrack });
const trackGenerator = new MediaStreamTrackGenerator({ kind: "video" });

/* */

trackProcessor.readable
  .pipeThrough(transformer)
  .pipeTo(trackGenerator.writable);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
