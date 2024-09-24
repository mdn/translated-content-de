---
title: "MediaStreamTrackGenerator: writable-Eigenschaft"
short-title: writable
slug: Web/API/MediaStreamTrackGenerator/writable
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft der {{domxref("MediaStreamTrackGenerator")}}-Schnittstelle gibt einen {{domxref("WritableStream")}} zurück. Dies ermöglicht das Schreiben von Medienframes in den `MediaStreamTrackGenerator`. Die Frames sind entweder Audio oder Video. Der Typ wird durch die Art des erstellten `MediaStreamTrackGenerator` vorgegeben.

## Wert

Ein {{domxref("WritableStream")}}.

## Beispiele

Im folgenden Beispiel werden Videoframes transformiert und dann in den {{domxref("WritableStream")}} geschrieben, der mit `MediaStreamTrackGenerator.writable` aufgerufen wird.

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
