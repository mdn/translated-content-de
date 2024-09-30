---
title: "TextTrackCueList: length-Eigenschaft"
short-title: length
slug: Web/API/TextTrackCueList/length
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`length`**-Eigenschaft des [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Interfaces gibt die Anzahl der Stichworte in der Liste zurück.

## Wert

Ein `unsigned long`, welcher die Anzahl der Stichworte in der Liste ist.

## Beispiele

Die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft gibt eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList) zurück, die die aktuellen Stichworte für diesen bestimmten Track enthält. Der Aufruf von `cues.length` gibt die Anzahl der Stichworte in der Liste zurück. Bei Verwendung des untenstehenden WebVTT-Tracks ist der Wert von `length` 5.

```plain
WEBVTT

first
00:00:00.000 --> 00:00:00.999  line:80%
Hildy!

second
00:00:01.000 --> 00:00:01.499 line:80%
How are you?

third
00:00:01.500 --> 00:00:02.999 line:80%
Tell me, is the ruler of the universe in?

fourth
00:00:03.000 --> 00:00:04.299 line:80%
Yes, they're in - in a bad humor

fifth
00:00:04.300 --> 00:00:06.000 line:80%
Somebody must've stolen the crown jewels
```

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues.length); // 5
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
