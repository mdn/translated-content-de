---
title: "MediaStreamTrackGenerator: writable-Eigenschaft"
short-title: writable
slug: Web/API/MediaStreamTrackGenerator/writable
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft des [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator)-Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück. Dadurch können Medien-Frames an den `MediaStreamTrackGenerator` geschrieben werden. Die Frames sind entweder Audio oder Video. Der Typ wird durch die Art des erzeugten `MediaStreamTrackGenerator` bestimmt.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Im folgenden Beispiel werden Videoframes transformiert und dann in den [`WritableStream`](/de/docs/Web/API/WritableStream) geschrieben, auf den mit `MediaStreamTrackGenerator.writable` zugegriffen wird.

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
