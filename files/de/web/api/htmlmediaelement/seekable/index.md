---
title: "HTMLMediaElement: seekable Eigenschaft"
short-title: seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{APIRef("HTML DOM")}}

Die **`seekable`** schreibgeschützte Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein neues statisches [normiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Mediendatei darstellt, zu denen der Benutzeragent zum Zeitpunkt des Zugriffs auf die `seekable`-Eigenschaft navigieren kann.

## Wert

Ein neues statisches [normiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Mediendatei darstellt, zu denen der Benutzeragent zum Zeitpunkt des Zugriffs auf die `seekable`-Eigenschaft navigieren kann.

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

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle, die verwendet wird, um die `HTMLMediaElement.seekable` Eigenschaft zu definieren
- [Media Source API](/de/docs/Web/API/Media_Source_Extensions_API)
- [Medienpufferung, Suchvorgänge und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
