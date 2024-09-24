---
title: "TextTrackCueList: Länge Eigenschaft"
short-title: Länge
slug: Web/API/TextTrackCueList/length
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebVTT")}}

Die **`length`** schreibgeschützte Eigenschaft des {{domxref("TextTrackCueList")}}-Interfaces gibt die Anzahl der Cues in der Liste zurück.

## Wert

Ein `unsigned long`, der die Anzahl der Cues in der Liste angibt.

## Beispiele

Die {{domxref("TextTrack.cues")}}-Eigenschaft gibt eine {{domxref("TextTrackCueList")}} zurück, die die aktuellen Cues für diesen bestimmten Track enthält. Der Aufruf von `cues.length` gibt die Anzahl der Cues in der Liste zurück. Bei Verwendung des unten stehenden WebVTT-Tracks beträgt der Wert von `length` 5.

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
