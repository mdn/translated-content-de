---
title: "VTTCue: positionAlign-Eigenschaft"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: e9cb9feda05ce0f1dc08aada71c0a2265baeeaff
---

{{APIRef("WebVTT")}}

Die Eigenschaft **`positionAlign`** der Schnittstelle [`VTTCue`](/de/docs/Web/API/VTTCue) bestimmt, woran [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.

## Wert

Ein String mit einem der folgenden Werte:

- `"line-left"`
  - : Ausrichtung am linken Zeilenrand.
- `"center"`
  - : Zentrierte Ausrichtung.
- `"line-right"`
  - : Ausrichtung am rechten Zeilenrand.
- `"auto"`
  - : Automatische Ausrichtung, die von der Textausrichtung des Cues abhängt und wie folgt bestimmt wird:
    - **line-left:** wenn die Textausrichtung links ist, wenn der Cue eine LTR-Sprache verwendet und die Textausrichtung start ist oder wenn der Cue eine RTL-Sprache verwendet und die Textausrichtung end ist.
    - **line-right:** wenn die Textausrichtung rechts ist, wenn der Cue eine RTL-Sprache verwendet und die Textausrichtung start ist oder wenn der Cue eine LTR-Sprache verwendet und die Textausrichtung end ist.
    - **center:** wenn keine Position für die Textausrichtung festgelegt ist.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt und anschließend der Wert von `positionAlign` auf `"line-right"` gesetzt. Danach wird der Wert in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.positionAlign = "line-right";
console.log(cue.positionAlign);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
