---
title: "VTTCue: snapToLines-Eigenschaft"
short-title: snapToLines
slug: Web/API/VTTCue/snapToLines
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`snapToLines`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle ist ein {{jsxref("Boolean")}}, der angibt, ob die [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)-Eigenschaft eine ganze Anzahl von Linien oder ein Prozentsatz der Videoabmessung ist.

## Wert

Ein {{jsxref("Boolean")}}.

## Beispiele

Im folgenden Beispiel wird ein neuer [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `snapToLines` auf `true` gesetzt. Der Wert wird anschließend auf der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.snapToLines = true;
console.log(cue1.snapToLines);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
