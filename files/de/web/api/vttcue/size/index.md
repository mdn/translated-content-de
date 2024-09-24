---
title: "VTTCue: size-Eigenschaft"
short-title: size
slug: Web/API/VTTCue/size
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("WebVTT")}}

Die **`size`**-Eigenschaft des {{domxref("VTTCue")}}-Interfaces repräsentiert die Größe des Cues als Prozentsatz der Videogröße.

## Wert

Eine Zahl, die die Größe des Cues als Prozentsatz der Videogröße angibt.

## Beispiele

Im folgenden Beispiel wird ein neues {{domxref("VTTCue")}} erstellt und der Wert von `size` auf `50` gesetzt. Der Wert wird dann in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
cue1.size = 50;
console.log(cue1.size);

track.addCue(cue1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
