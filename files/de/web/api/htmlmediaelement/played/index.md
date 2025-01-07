---
title: "HTMLMediaElement: played-Eigenschaft"
short-title: played
slug: Web/API/HTMLMediaElement/played
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

Die **`played`**-Eigenschaft, eine schreibgeschützte Eigenschaft der Schnittstelle [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), zeigt die Zeitbereiche an, in denen die Ressource, eine {{htmlelement("audio")}}- oder {{htmlelement("video")}}-Mediendatei, abgespielt wurde. Sie gibt ein neues [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Bereiche der Medienquelle enthält, die der Browser zum Zeitpunkt der Auswertung der Eigenschaft abgespielt hat.

## Wert

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt, das die abgespielten Zeitbereiche darstellt.

## Beispiele

```js
const media = document.querySelector("audio");
const playedTimeRanges = media.played;
let timePlayed = 0;
// calculate the total time the media has played
for (let i = 0; i < playedTimeRanges.length; i++) {
  timePlayed += playedTimeRanges.end(i) - playedTimeRanges.start(i);
}
console.log(`The media played for a total of ${timePlayed} seconds.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`seeked`](/de/docs/Web/API/HTMLMediaElement/seeked_event)-Ereignis
- [`progress`](/de/docs/Web/API/HTMLMediaElement/progress_event)-Ereignis
- [`HTMLMediaElement.seekable`](/de/docs/Web/API/HTMLMediaElement/seekable)
- [`HTMLMediaElement.buffered`](/de/docs/Web/API/HTMLMediaElement/buffered)
- [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)
- [`HTMLAudioElement`](/de/docs/Web/API/HTMLAudioElement)
