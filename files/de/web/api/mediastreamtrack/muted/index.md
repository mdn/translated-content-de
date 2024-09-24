---
title: "MediaStreamTrack: muted Eigenschaft"
short-title: muted
slug: Web/API/MediaStreamTrack/muted
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`muted`**-Eigenschaft der
{{domxref("MediaStreamTrack")}}-Schnittstelle gibt einen booleschen Wert zurück,
der angibt, ob die Spur derzeit nicht in der Lage ist, Medien auszugeben.

> [!NOTE]
> Um eine Möglichkeit zu implementieren, dass Benutzer eine Spur stummschalten und die Stummschaltung aufheben können, verwenden Sie die
> {{domxref("MediaStreamTrack.enabled", "enabled")}}-Eigenschaft. Wenn eine Spur deaktiviert wird,
> indem `enabled` auf `false` gesetzt wird, erzeugt sie nur leere Frames
> (Audio-Frames, in denen jede Probe 0 ist, oder Video-Frames, in denen jeder Pixel
> schwarz ist).

## Wert

Ein Boolescher Wert, der `true` ist, wenn die Spur derzeit stummgeschaltet ist, oder
`false`, wenn die Spur derzeit nicht stummgeschaltet ist.

> [!NOTE]
> Wenn möglich, vermeiden Sie es, `muted` abzufragen, um den Stummschaltungsstatus der Spur zu überwachen.
> Fügen Sie stattdessen Ereignis-Listener für die {{domxref("MediaStreamTrack.mute_event", "mute")}}- und {{domxref("MediaStreamTrack.unmute_event", "unmute")}}-Ereignisse hinzu.

## Beispiele

Dieses Beispiel zählt die Anzahl der Spuren in einem Array von {{domxref("MediaStreamTrack")}}
Objekten, die derzeit stummgeschaltet sind.

```js
let mutedCount = 0;

trackList.forEach((track) => {
  if (track.muted) {
    mutedCount += 1;
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
