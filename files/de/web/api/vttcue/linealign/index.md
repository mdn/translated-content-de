---
title: "VTTCue: lineAlign-Eigenschaft"
short-title: lineAlign
slug: Web/API/VTTCue/lineAlign
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`lineAlign`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle repräsentiert die Ausrichtung dieses VTT-Cues.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"start"`
  - : Start-Aus alignment.
- `"center"`
  - : Zentrumsaus alignment.
- `"end"`
  - : End-Aus alignment.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `lineAlign` auf `"center"` gesetzt. Der Wert wird dann in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.lineAlign = "center";
console.log(cue.lineAlign);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
