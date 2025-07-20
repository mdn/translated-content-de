---
title: "VTTCue: position-Eigenschaft"
short-title: position
slug: Web/API/VTTCue/position
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`position`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces repräsentiert die Einrückung des Cues innerhalb der Zeile.

## Wert

Eine Zahl oder `"auto"`, die die Einrückung des Cues innerhalb der Zeile darstellt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `position` auf `2` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.position = "2";
console.log(cue.position);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
