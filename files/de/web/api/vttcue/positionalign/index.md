---
title: "VTTCue: positionAlign-Eigenschaft"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebVTT")}}

Die **`positionAlign`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces wird verwendet, um zu bestimmen, woran [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"line-left"`
  - : Zeilenlinke Ausrichtung.
- `"center"`
  - : Zentrierte Ausrichtung.
- `"line-right"`
  - : Zeilenrechte Ausrichtung.
- `"auto"`
  - : Automatische Ausrichtung, die von der Textausrichtung des Cues abhängt und wie folgt interpretiert wird:
    - **line-left:** wenn die Textausrichtung links ist, der Cue eine LTR-Sprache verwendet und die Textausrichtung Start ist, oder der Cue eine RTL-Sprache verwendet und die Textausrichtung Ende ist.
    - **line-right:** wenn die Textausrichtung rechts ist, der Cue eine RTL-Sprache verwendet und die Textausrichtung Start ist, oder der Cue eine LTR-Sprache verwendet und die Textausrichtung Ende ist.
    - **center:** wenn keine Textausrichtungsposition festgelegt ist.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `positionAlign` auf `"line-right"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.positionAlign = "line-right";
console.log(cue1.positionAlign);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
