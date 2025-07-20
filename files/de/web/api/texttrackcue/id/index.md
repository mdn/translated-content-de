---
title: "TextTrackCue: id-Eigenschaft"
short-title: id
slug: Web/API/TextTrackCue/id
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`id`**-Eigenschaft der [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Schnittstelle gibt den Bezeichner für diese Cue zurück und legt ihn fest.

## Wert

Ein Zeichenfolge, die die ID dieser Cue enthält.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTCue`](/de/docs/Web/API/VTTCue) (die von `TextTrackCue` erbt) erstellt. Die `id`-Eigenschaft wird dann auf "first" gesetzt, bevor die Cue hinzugefügt wird.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.id = "first";
track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
