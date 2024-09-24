---
title: "MediaStreamTrackEvent: track-Eigenschaft"
short-title: track
slug: Web/API/MediaStreamTrackEvent/track
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`track`**-Eigenschaft der {{domxref("MediaStreamTrackEvent")}}-Schnittstelle gibt den mit diesem Ereignis verknüpften {{domxref("MediaStreamTrack")}} zurück.

## Wert

Ein {{domxref("MediaStreamTrack")}}-Objekt.

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

- {{domxref("MediaStream/addtrack_event", "addtrack")}} und {{domxref("MediaStream/removetrack_event", "removetrack")}} Ereignisse
- {{domxref("MediaStreamTrack")}}
