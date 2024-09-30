---
title: "TextTrackCue: id-Eigenschaft"
short-title: id
slug: Web/API/TextTrackCue/id
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`id`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt den Bezeichner für diesen Cue zurück und setzt ihn.

## Wert

Ein String, der die ID dieses Cues enthält.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt (das von `TextTrackCue` erbt). Die `id`-Eigenschaft wird dann auf "first" gesetzt, bevor der Cue hinzugefügt wird.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.id = "first";
track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
