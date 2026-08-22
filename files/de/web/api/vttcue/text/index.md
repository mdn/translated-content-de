---
title: "VTTCue: text-Eigenschaft"
short-title: text
slug: Web/API/VTTCue/text
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("WebVTT")}}

Die **`text`**-Eigenschaft des [`VTTCue`](/de/docs/Web/API/VTTCue)-Interfaces repräsentiert den Textinhalt des Cues.

## Wert

Ein String, der den Rohtext des Cues enthält.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `text` auf den String `"new cue value"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue = new VTTCue(0, 0.9, "Hildy!");
cue.text = "new cue value";
console.log(cue.text); // 'new cue value';

track.addCue(cue);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
