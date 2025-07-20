---
title: "VTTCue: positionAlign Eigenschaft"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`positionAlign`** Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue) Interfaces wird verwendet, um zu bestimmen, woran [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"line-left"`
  - : Linien-links Ausrichtung.
- `"center"`
  - : Zentrierte Ausrichtung.
- `"line-right"`
  - : Linien-rechts Ausrichtung.
- `"auto"`
  - : Automatische Ausrichtung, die von der Textausrichtung der Beschriftung abhängt und wie folgt interpretiert wird:
    - **line-left:** wenn die Textausrichtung links ist, die Beschriftung eine LTR-Sprache verwendet und die Textausrichtung Start ist, oder die Beschriftung eine RTL-Sprache verwendet und die Textausrichtung Ende ist.
    - **line-right:** wenn die Textausrichtung rechts ist, die Beschriftung eine RTL-Sprache verwendet und die Textausrichtung Start ist, oder die Beschriftung eine LTR-Sprache verwendet und die Textausrichtung Ende ist.
    - **center:** wenn keine Textausrichtungsposition festgelegt ist.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `positionAlign` auf `"line-right"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

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
