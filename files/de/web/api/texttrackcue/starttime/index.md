---
title: "TextTrackCue: startTime-Eigenschaft"
short-title: startTime
slug: Web/API/TextTrackCue/startTime
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`startTime`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt die Startzeit des Cues zurück und setzt sie.

## Wert

Eine Zahl, die die Startzeit in Sekunden darstellt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) (das von `TextTrackCue` erbt) erstellt, das bei 0,1 Sekunden beginnt und bei 0,9 Sekunden endet. Die `startTime`-Eigenschaft wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0.1, 0.9, "Hildy!");
console.log(cue1.startTime); // 0.1
track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
