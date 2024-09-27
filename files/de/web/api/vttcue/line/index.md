---
title: "VTTCue: line-Eigenschaft"
short-title: line
slug: Web/API/VTTCue/line
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die **`line`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle repräsentiert die Zeile dieses WebVTT-Cue.

## Wert

Eine Zahl oder `"auto"`, die die Zeile dieses WebVTT-Cue darstellt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `line` auf `1` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.line = "1";
console.log(cue1.line);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
