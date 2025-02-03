---
title: "HTMLMediaElement: seekable-Eigenschaft"
short-title: seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{APIRef("HTML DOM")}}

Die **`seekable`** schreibgeschützte Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein neues statisches [normiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Mediendatei darstellt, zu denen der Benutzeragent zu dem Zeitpunkt, an dem die `seekable`-Eigenschaft aufgerufen wird, springen kann.

## Wert

Ein neues statisches [normiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Mediendatei darstellt, zu denen der Benutzeragent zu dem Zeitpunkt, an dem die `seekable`-Eigenschaft aufgerufen wird, springen kann.

## Beispiele

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
//Go through the object and output an array
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
- [Medienpufferung, Sprung und Zeitbereiche](/de/docs/Web/Media/Guides/Audio_and_video_delivery/buffering_seeking_time_ranges)
