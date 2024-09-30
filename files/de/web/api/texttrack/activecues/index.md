---
title: "TextTrack: activeCues-Eigenschaft"
short-title: activeCues
slug: Web/API/TextTrack/activeCues
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte Eigenschaft **`activeCues`** der [`TextTrack`](/de/docs/Web/API/TextTrack)-Schnittstelle gibt ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt zurück, das die aktuell aktiven Cues auflistet.

## Wert

Ein [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Objekt.

## Beispiele

Das folgende Beispiel fügt einem `<video>` ein neues `TextTrack` hinzu. Die `activeCues` werden in die Konsole ausgegeben.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
console.log(track.activeCues);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
