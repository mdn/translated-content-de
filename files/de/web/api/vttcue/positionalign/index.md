---
title: "VTTCue: positionAlign-Eigenschaft"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`positionAlign`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces wird verwendet, um zu bestimmen, woran [`VTTCue.position`](/de/docs/Web/API/VTTCue/position) verankert ist.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"line-left"`
  - : Zeilen-linksbündige Ausrichtung.
- `"center"`
  - : Zentrierte Ausrichtung.
- `"line-right"`
  - : Zeilen-rechtsbündige Ausrichtung.
- `"auto"`

  - : Automatische Ausrichtung, die von der Textausrichtung des Hinweises abhängt, interpretiert wie folgt:

    - **line-left:** wenn die Textausrichtung links ist, der Hinweis eine LTR-Sprache benutzt und die Textausrichtung Start ist, oder der Hinweis eine RTL-Sprache benutzt und die Textausrichtung Ende ist.
    - **line-right:** wenn die Textausrichtung rechts ist, der Hinweis eine RTL-Sprache benutzt und die Textausrichtung Start ist, oder der Hinweis eine LTR-Sprache benutzt und die Textausrichtung Ende ist.
    - **center:** wenn keine Textausrichtung gesetzt ist.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `positionAlign` auf `"line-right"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

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
