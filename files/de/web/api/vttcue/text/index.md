---
title: "VTTCue: text Eigenschaft"
short-title: text
slug: Web/API/VTTCue/text
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`text`**-Eigenschaft der [`VTTCue`](/de/docs/Web/API/VTTCue)-Schnittstelle repräsentiert den Textinhalt der Cue.

## Wert

Ein String, der den Rohtext der Cue enthält.

## Beispiele

Im folgenden Beispiel wird eine neue [`VTTCue`](/de/docs/Web/API/VTTCue) erstellt, dann wird der Wert von `size` auf den String `"new cue value"` gesetzt. Der Wert wird anschließend in die Konsole ausgegeben.

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
