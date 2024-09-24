---
title: "MediaStreamTrackProcessor: lesbare Eigenschaft"
short-title: lesbare
slug: Web/API/MediaStreamTrackProcessor/readable
l10n:
  sourceCommit: 4558d208395a5b1df4db44b0c8ef4e9a0f8adbbf
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}

Die **`readable`**-Eigenschaft der {{domxref("MediaStreamTrackProcessor")}}-Schnittstelle gibt einen {{domxref("ReadableStream")}} zurück.

## Wert

Ein {{domxref("ReadableStream")}}.

## Beispiele

Im folgenden Beispiel werden Videoframes aus dem {{domxref("ReadableStream")}} transformiert.

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
