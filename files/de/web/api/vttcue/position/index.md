---
title: "VTTCue: position-Eigenschaft"
short-title: position
slug: Web/API/VTTCue/position
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`position`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces stellt die Einrückung des Cues innerhalb der Zeile dar.

## Wert

Eine Zahl oder `"auto"`, die die Einrückung des Cues innerhalb der Zeile repräsentiert.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `position` auf `2` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.position = "2";
console.log(cue1.position);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
