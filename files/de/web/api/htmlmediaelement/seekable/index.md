---
title: "HTMLMediaElement: seekable-Eigenschaft"
short-title: seekable
slug: Web/API/HTMLMediaElement/seekable
l10n:
  sourceCommit: c3be131cfd2c33822cb36b21cb4fca78980a6b4e
---

{{APIRef("HTML DOM")}}

Die **`seekable`** schreibgeschützte Eigenschaft von {{domxref("HTMLMediaElement")}}-Objekten gibt ein neues statisches [normalisiertes `TimeRanges`-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects) zurück, das die Bereiche der Mediendatei darstellt, die der User-Agent beim Zugriff auf die `seekable`-Eigenschaft erreichen kann.

## Wert

Ein neues statisches [normalisiertes TimeRanges-Objekt](/de/docs/Web/API/TimeRanges#normalized_timeranges_objects), das die Bereiche der Mediendatei darstellt, die der User-Agent beim Zugriff auf die `seekable`-Eigenschaft erreichen kann.

## Beispiele

```js
const video = document.querySelector("video");
const timeRangesObject = video.seekable;
const timeRanges = [];
//Durch das Objekt gehen und ein Array ausgeben
for (let count = 0; count < timeRangesObject.length; count++) {
  timeRanges.push([timeRangesObject.start(count), timeRangesObject.end(count)]);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.seekable`-Eigenschaft
- [Media Source API](/de/docs/Web/API/Media_Source_Extensions_API)
- [Medienpufferung, -suche und Zeitbereiche](/de/docs/Web/Media/Audio_and_video_delivery/buffering_seeking_time_ranges)
