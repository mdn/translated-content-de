---
title: "TextTrack: cues-Eigenschaft"
short-title: cues
slug: Web/API/TextTrack/cues
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die **`cues`**-Eigenschaft des [`TextTrack`](/de/docs/Web/API/TextTrack)-Interfaces ist schreibgeschützt und gibt ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt zurück, das alle Cues des Tracks enthält.

## Wert

Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt.

## Beispiele

Im folgenden Beispiel werden zwei Cues mit `addCue()` zu einem Video-Texttrack hinzugefügt. Der Wert von `cues` wird in die Konsole ausgegeben. Das zurückgegebene [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt enthält die beiden Cues.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
track.addCue(new VTTCue(0, 0.9, "Hildy!"));
track.addCue(new VTTCue(1, 1.4, "How are you?"));
console.log(track.cues);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
