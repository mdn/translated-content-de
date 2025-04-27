---
title: "HTMLMediaElement: seekable-Eigenschaft"
short-title: seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("HTML DOM")}}

Die **`seekable`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten ist eine nur lesbare Eigenschaft, die ein neues statisches [normalisiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurückgibt. Dieses Objekt stellt die Zeitbereiche der Medienressource dar, zu denen der User-Agent zu dem Zeitpunkt springen kann, an dem auf die `seekable`-Eigenschaft zugegriffen wird.

## Wert

Ein neues statisches [normalisiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Zeitbereiche der Medienressource darstellt, zu denen der User-Agent zu dem Zeitpunkt springen kann, an dem auf die `seekable`-Eigenschaft zugegriffen wird.

## Beispiele

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
// Go through the object and output an array
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.seekable`-Eigenschaft
- [Media Source API](/de/docs/Web/API/Media_Source_Extensions_API)
- [Medienpufferung, -suche und -zeiträume](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
