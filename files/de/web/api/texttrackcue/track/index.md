---
title: "TextTrackCue: track-Eigenschaft"
short-title: track
slug: Web/API/TextTrackCue/track
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

{{APIRef("WebVTT")}}

Die **`track`**-Eigenschaft des [`TextTrackCue`](/de/docs/Web/API/TextTrackCue)-Interfaces, die nur lesbar ist, gibt das [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt zurück, zu dem diese Untertitelspur gehört.

## Wert

Ein [`TextTrack`](/de/docs/Web/API/TextTrack)-Objekt.

## Beispiele

Im folgenden Beispiel wird ein neues [`VTTCue`](/de/docs/Web/API/VTTCue) (das von `TextTrackCue` erbt) erstellt und dann einer Spur hinzugefügt. Der Wert von `track` wird in die Konsole ausgegeben.

```js
const video = document.querySelector("video");
const captionTrack = video.addTextTrack("captions", "Captions", "en");
captionTrack.mode = "showing";

const cue = new VTTCue(0, 0.9, "Hildy!");
captionTrack.addCue(cue);
console.log(cue.track); // a TextTrack object.
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
