---
title: "VTTCue: vertical Eigenschaft"
short-title: vertical
slug: Web/API/VTTCue/vertical
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`vertical`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle ist ein Zeichenfolgenwert, der die Schreibrichtung des Cues darstellt.

## Wert

Eine Zeichenfolge, die einen der folgenden Werte enthält:

- `""` (eine leere Zeichenfolge)
  - : Stellt eine horizontale Schreibrichtung dar.
- `"rl"`
  - : Stellt eine vertikale Schreibrichtung dar, die nach links wächst.
- `"lr"`
  - : Stellt eine vertikale Schreibrichtung dar, die nach rechts wächst.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt und dann der Wert von `vertical` auf `"rl"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

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
