---
title: "VTTCue: Eigenschaft region"
short-title: region
slug: Web/API/VTTCue/region
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`region`**-Eigenschaft des {{domxref("VTTCue")}}-Interfaces gibt die {{domxref("VTTRegion")}} zurück, zu der dieses Cue gehört, und legt sie fest.

## Wert

Ein {{domxref("VTTRegion")}}-Objekt.

## Beispiele

Im folgenden Beispiel wird ein neuer {{domxref("VTTCue")}} erstellt, und der Wert von `region` wird in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
console.log(cue1.region);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
