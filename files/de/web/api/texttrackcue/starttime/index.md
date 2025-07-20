---
title: "TextTrackCue: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/TextTrackCue/startTime
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`startTime`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt die Startzeit des Textausschnitts zurück und setzt sie.

## Wert

Eine Zahl, die die Startzeit in Sekunden darstellt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) (das von `TextTrackCue` erbt) erstellt, das bei 0,1 Sekunden beginnt und bei 0,9 Sekunden endet. Die `startTime`-Eigenschaft wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0.1, 0.9, "Hildy!");
console.log(cue.startTime); // 0.1
track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
