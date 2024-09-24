---
title: "VTTCue: text-Eigenschaft"
short-title: text
slug: Web/API/VTTCue/text
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`text`**-Eigenschaft der {{domxref("VTTCue")}}-Schnittstelle repräsentiert den Textinhalt der Cue.

## Wert

Ein String, der den rohen Text der Cue enthält.

## Beispiele

Im folgenden Beispiel wird eine neue {{domxref("VTTCue")}} erstellt und dann der Wert von `size` auf den String `"new cue value"` gesetzt. Der Wert wird anschließend in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.text = "new cue value";
console.log(cue1.text); // 'new cue value';

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
