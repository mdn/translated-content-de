---
title: "VTTCue: position-Eigenschaft"
short-title: position
slug: Web/API/VTTCue/position
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`position`**-Eigenschaft der {{domxref("VTTCue")}}-Schnittstelle repräsentiert die Einrückung des Untertitels innerhalb der Zeile.

## Wert

Eine Zahl oder `"auto"`, die die Einrückung des Untertitels innerhalb der Zeile darstellt.

## Beispiele

Im folgenden Beispiel wird ein neuer {{domxref("VTTCue")}} erstellt. Der Wert von `position` wird dann auf `2` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

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
