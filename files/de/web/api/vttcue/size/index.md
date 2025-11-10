---
title: "VTTCue: size-Eigenschaft"
short-title: size
slug: Web/API/VTTCue/size
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`size`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces repräsentiert die Größe des Cues als Prozentsatz der Videogröße.

## Wert

Eine Zahl, die die Größe des Cues als Prozentsatz der Videogröße darstellt.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `size` auf `50` gesetzt. Der Wert wird anschließend in die Konsole gedruckt.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.size = 50;
console.log(cue.size);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
