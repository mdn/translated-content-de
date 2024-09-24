---
title: "VTTCue: snapToLines-Eigenschaft"
short-title: snapToLines
slug: Web/API/VTTCue/snapToLines
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`snapToLines`**-Eigenschaft des {{domxref("VTTCue")}}-Interfaces ist ein {{jsxref("Boolean")}}, der angibt, ob die {{domxref("VTTCue.line")}}-Eigenschaft eine ganzzahlige Anzahl von Zeilen oder ein Prozentsatz der Videogröße ist.

## Wert

Ein {{jsxref("Boolean")}}.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("VTTCue")}} erstellt, dann wird der Wert von `snapToLines` auf `true` gesetzt. Der Wert wird dann in die Konsole ausgegeben.

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
