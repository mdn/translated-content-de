---
title: "VTTCue: align-Eigenschaft"
short-title: align
slug: Web/API/VTTCue/align
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`align`**-Eigenschaft der {{domxref("VTTCue")}}-Schnittstelle repräsentiert die Ausrichtung aller Textzeilen in der Textbox.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"start"`
  - : Startausrichtung.
- `"center"`
  - : Mittige Ausrichtung.
- `"end"`
  - : Endausrichtung.
- `"left"`
  - : Linksausrichtung.
- `"right"`
  - : Rechtsausrichtung.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("VTTCue")}} erstellt, dann wird der Wert von `align` auf `"start"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

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

## Kompatibilität der Browser

{{Compat}}
