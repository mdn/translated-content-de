---
title: "TextTrackCue: endTime-Eigenschaft"
short-title: endTime
slug: Web/API/TextTrackCue/endTime
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`endTime`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt die Endzeit des Cues zurück und legt sie fest.

## Wert

Eine Zahl, die die Endzeit in Sekunden darstellt.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) (der von `TextTrackCue` erbt) erstellt, der bei 0,1 Sekunden beginnt und bei 0,9 Sekunden endet. Die `endTime`-Eigenschaft wird dann in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0.1, 0.9, "Hildy!");
console.log(cue1.endTime); // 0.9
track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
