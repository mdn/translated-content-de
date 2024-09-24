---
title: "VTTCue: lineAlign-Eigenschaft"
short-title: lineAlign
slug: Web/API/VTTCue/lineAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`lineAlign`**-Eigenschaft der {{domxref("VTTCue")}}-Schnittstelle repräsentiert die Ausrichtung dieses VTT-Cues.

## Wert

Ein Zeichenfolgenwert, der einen der folgenden Werte enthält:

- `"start"`
  - : Startausrichtung.
- `"center"`
  - : Mittige Ausrichtung.
- `"end"`
  - : Endausrichtung.

## Beispiele

Im folgenden Beispiel wird ein neuer {{domxref("VTTCue")}} erstellt, dann wird der Wert von `lineAlign` auf `"center"` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.lineAlign = "center";
console.log(cue1.lineAlign);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
