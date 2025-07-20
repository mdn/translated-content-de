---
title: "VTTCue: snapToLines-Eigenschaft"
short-title: snapToLines
slug: Web/API/VTTCue/snapToLines
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`snapToLines`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle ist ein {{jsxref("Boolean")}}, der angibt, ob die [`VTTCue.line`](/de/docs/Web/API/VTTCue/line)-Eigenschaft eine ganzzahlige Anzahl von Zeilen oder ein Prozentsatz der Videogröße ist.

## Wert

Ein {{jsxref("Boolean")}}.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `snapToLines` auf `true` gesetzt. Der Wert wird dann in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.snapToLines = true;
console.log(cue.snapToLines);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
