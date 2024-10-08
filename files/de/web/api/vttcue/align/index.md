---
title: "VTTCue: align-Eigenschaft"
short-title: align
slug: Web/API/VTTCue/align
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`align`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces repräsentiert die Ausrichtung aller Textzeilen im Textfeld.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"start"`
  - : Startausrichtung.
- `"center"`
  - : Zentrums-Ausrichtung.
- `"end"`
  - : Endausrichtung.
- `"left"`
  - : Linksauswahl.
- `"right"`
  - : Rechtsauswahl.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `align` auf `"start"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.align = "start";
console.log(cue1.align);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
