---
title: "TextTrackCue: endTime-Eigenschaft"
short-title: endTime
slug: Web/API/TextTrackCue/endTime
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`endTime`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt die Endzeit der Cue zurück und setzt diese.

## Wert

Eine Zahl, die die Endzeit in Sekunden darstellt.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTCue`](/de/docs/Web/API/VTTCue) (die von `TextTrackCue` erbt) erstellt, die bei 0,1 Sekunden beginnt und bei 0,9 Sekunden endet. Die `endTime`-Eigenschaft wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0.1, 0.9, "Hildy!");
console.log(cue.endTime); // 0.9
track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
