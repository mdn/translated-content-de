---
title: "MediaStreamTrackEvent: track-Eigenschaft"
short-title: track
slug: Web/API/MediaStreamTrackEvent/track
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`track`** schreibgeschützte Eigenschaft des [`MediaStreamTrackEvent`](/de/docs/Web/API/MediaStreamTrackEvent)-Interfaces gibt das [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurück, das mit diesem Ereignis verknüpft ist.

## Wert

Ein [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekt.

## Beispiele

```js
const stream = new MediaStream();

stream.addEventListener("removetrack", (event) => {
  console.log(`${event.track.kind} track removed`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`addtrack`](/de/docs/Web/API/MediaStream/addtrack_event) und [`removetrack`](/de/docs/Web/API/MediaStream/removetrack_event) Ereignisse
- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)
