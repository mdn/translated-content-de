---
title: "VTTCue: lineAlign-Eigenschaft"
short-title: lineAlign
slug: Web/API/VTTCue/lineAlign
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`lineAlign`** Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces stellt die Ausrichtung dieses VTT-Hinweises dar.

## Wert

Ein String, der einen der folgenden Werte enthält:

- `"start"`
  - : Start-Ausrichtung.
- `"center"`
  - : Zentrum-Ausrichtung.
- `"end"`
  - : End-Ausrichtung.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `lineAlign` auf `"center"` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

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
