---
title: "VTTCue: align-Eigenschaft"
short-title: align
slug: Web/API/VTTCue/align
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`align`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle repräsentiert die Ausrichtung aller Textzeilen im Textfeld.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"start"`
  - : Startausrichtung.
- `"center"`
  - : Zentralausrichtung.
- `"end"`
  - : Endausrichtung.
- `"left"`
  - : Linksauslegung.
- `"right"`
  - : Rechtsauslegung.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `align` auf `"start"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.align = "start";
console.log(cue.align);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
