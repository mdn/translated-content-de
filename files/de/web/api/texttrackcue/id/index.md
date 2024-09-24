---
title: "TextTrackCue: id-Eigenschaft"
short-title: id
slug: Web/API/TextTrackCue/id
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`id`**-Eigenschaft des {{domxref("TextTrackCue")}}-Interfaces gibt den Bezeichner für diese Cue zurück und setzt ihn.

## Wert

Ein String, der die ID dieser Cue enthält.

## Beispiele

Im folgenden Beispiel wird eine neue {{domxref("VTTCue")}} (die von `TextTrackCue` erbt) erstellt. Die `id`-Eigenschaft wird dann auf "first" gesetzt, bevor die Cue hinzugefügt wird.

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
