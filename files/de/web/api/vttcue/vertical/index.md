---
title: "VTTCue: vertikale Eigenschaft"
short-title: vertical
slug: Web/API/VTTCue/vertical
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`vertical`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle ist ein String, der die Schreibrichtung des Cues darstellt.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `""` (ein leerer String)
  - : Repräsentiert eine horizontale Schreibrichtung.
- `"rl"`
  - : Repräsentiert eine vertikale Schreibrichtung, die nach links wächst.
- `"lr"`
  - : Repräsentiert eine vertikale Schreibrichtung, die nach rechts wächst.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `vertical` auf `"rl"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.vertical = "rl";
console.log(cue1.vertical);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
