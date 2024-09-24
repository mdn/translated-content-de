---
title: "TextTrack: activeCues-Eigenschaft"
short-title: activeCues
slug: Web/API/TextTrack/activeCues
l10n:
  sourceCommit: 0c8a320b035cf625c1df67713a94ead2e7f3aec6
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`activeCues`**-Eigenschaft der {{domxref("TextTrack")}}-Schnittstelle gibt ein {{domxref("TextTrackCueList")}}-Objekt zurück, das die derzeit aktiven Cues auflistet.

## Wert

Ein {{domxref("TextTrackCueList")}}-Objekt.

## Beispiele

Das folgende Beispiel fügt einem Video einen neuen `TextTrack` hinzu. Die `activeCues` werden in der Konsole ausgegeben.

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
