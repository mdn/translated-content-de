---
title: "VTTCue: Eigenschaft positionAlign"
short-title: positionAlign
slug: Web/API/VTTCue/positionAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`positionAlign`**-Eigenschaft des {{domxref("VTTCue")}}-Interfaces wird verwendet, um festzulegen, an welcher Stelle die {{domxref("VTTCue.position")}} verankert ist.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"line-left"`
  - : Zeilen-linksbündige Ausrichtung.
- `"center"`
  - : Zentrische Ausrichtung.
- `"line-right"`
  - : Zeilen-rechtsbündige Ausrichtung.
- `"auto"`

  - : Automatische Ausrichtung, die von der Textausrichtung der Cue abhängt, interpretiert wie folgt:

    - **line-left:** wenn die Textausrichtung links ist, die Cue eine LTR-Sprache verwendet und die Textausrichtung Start ist, oder die Cue eine RTL-Sprache verwendet und die Textausrichtung Ende ist.
    - **line-right:** wenn die Textausrichtung rechts ist, die Cue eine RTL-Sprache verwendet und die Textausrichtung Start ist, oder die Cue eine LTR-Sprache verwendet und die Textausrichtung Ende ist.
    - **center:** wenn keine Textausrichtungsposition festgelegt ist.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("VTTCue")}} erstellt, dann wird der Wert von `positionAlign` auf `"line-right"` gesetzt. Der Wert wird dann auf der Konsole ausgegeben.

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

## Kompatibilität der Browser

{{Compat}}
