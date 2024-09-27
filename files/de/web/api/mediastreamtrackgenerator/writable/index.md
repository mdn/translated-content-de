---
title: "MediaStreamTrackGenerator: writable-Eigenschaft"
short-title: writable
slug: Web/API/MediaStreamTrackGenerator/writable
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{Non-standard_Header}}

Die **`writable`**-Eigenschaft des [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator)-Interfaces gibt einen [`WritableStream`](/de/docs/Web/API/WritableStream) zurück. Dies ermöglicht das Schreiben von Medienrahmen in den `MediaStreamTrackGenerator`. Die Rahmen werden Audio oder Video sein. Der Typ wird durch die Art des erstellten `MediaStreamTrackGenerator` bestimmt.

## Wert

Ein [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Im folgenden Beispiel werden Videorahmen transformiert und anschließend in den mit `MediaStreamTrackGenerator.writable` zugegriffenen [`WritableStream`](/de/docs/Web/API/WritableStream) geschrieben.

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
