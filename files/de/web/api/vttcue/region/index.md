---
title: "VTTCue: region-Eigenschaft"
short-title: region
slug: Web/API/VTTCue/region
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`region`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle gibt die [`VTTRegion`](/de/docs/Web/API/VTTRegion) zurück und setzt sie, zu welcher diese Cue gehört.

## Wert

Ein [`VTTRegion`](/de/docs/Web/API/VTTRegion)-Objekt.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, und dann wird der Wert von `region` in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
console.log(cue.region);

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
