---
title: "TextTrackCue: track-Eigenschaft"
short-title: track
slug: Web/API/TextTrackCue/track
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebVTT")}}

Die schreibgeschützte **`track`**-Eigenschaft der [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Schnittstelle gibt das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zurück, zu dem dieses Cue gehört.

## Wert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) (das von `TextTrackCue` erbt) erstellt und dann einem Track hinzugefügt. Der Wert von `track` wird in die Konsole ausgegeben.

```js
const video = document.querySelector("video");
const captionTrack = video.addTextTrack("captions", "Captions", "en");
captionTrack.mode = "showing";

const cue1 = new VTTCue(0, 0.9, "Hildy!");
captionTrack.addCue(cue1);
console.log(cue1.track); // a TextTrack object.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
