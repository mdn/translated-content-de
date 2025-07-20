---
title: "VTTCue: vertical Eigenschaft"
short-title: vertical
slug: Web/API/VTTCue/vertical
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`vertical`** Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle ist ein Zeichenfolge, die die Schreibrichtung des Hinweises darstellt.

## Wert

Eine Zeichenfolge, die einen der folgenden Werte enthält:

- `""` (eine leere Zeichenfolge)
  - : Stellt eine horizontale Schreibrichtung dar.
- `"rl"`
  - : Stellt eine vertikale Schreibrichtung dar, die nach links wächst.
- `"lr"`
  - : Stellt eine vertikale Schreibrichtung dar, die nach rechts wächst.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `vertical` auf `"rl"` gesetzt. Der Wert wird dann in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.vertical = "rl";
console.log(cue.vertical);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
