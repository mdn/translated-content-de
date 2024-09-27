---
title: "VTTCue: region Eigenschaft"
short-title: region
slug: Web/API/VTTCue/region
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`region`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces gibt die [`VTTRegion`](/de/docs/Web/API/VTTRegion) zurück, zu der dieser Cue gehört, und legt sie fest.

## Wert

Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `region` in der Konsole ausgegeben.

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
