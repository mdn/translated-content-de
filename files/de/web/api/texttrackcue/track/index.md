---
title: "TextTrackCue: track-Eigenschaft"
short-title: track
slug: Web/API/TextTrackCue/track
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`track`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces gibt das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zurück, zu dem diese Cue gehört.

## Wert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) (das von `TextTrackCue` erbt) erstellt und dann zu einem Track hinzugefügt. Der Wert von `track` wird in der Konsole ausgegeben.

```js
let video = document.querySelector("video");
let captiontrack = video.addTextTrack("captions", "Captions", "en");
captiontrack.mode = "showing";

let cue1 = new VTTCue(0, 0.9, "Hildy!");
captiontrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
