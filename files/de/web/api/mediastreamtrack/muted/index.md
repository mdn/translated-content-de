---
title: "MediaStreamTrack: muted-Eigenschaft"
short-title: muted
slug: Web/API/MediaStreamTrack/muted
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die **`muted`** schreibgeschützte Eigenschaft des
[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Interfaces gibt einen booleschen Wert zurück, der angibt, ob die Spur derzeit nicht in der Lage ist, Medienausgabe bereitzustellen.

> [!NOTE]
> Um eine Möglichkeit zu implementieren, wie Benutzer eine Spur stumm schalten und die Stummschaltung aufheben können, verwenden Sie die
> [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft. Wenn eine Spur durch Setzen von `enabled` auf `false` deaktiviert wird, erzeugt sie nur leere Frames
> (Audio-Frames, bei denen jede Probe 0 ist, oder Video-Frames, bei denen jeder Pixel schwarz ist).

## Wert

Ein Boolean, der `true` ist, wenn die Spur derzeit stummgeschaltet ist, oder
`false`, wenn die Spur derzeit nicht stummgeschaltet ist.

> [!NOTE]
> Vermeiden Sie es nach Möglichkeit, die `muted`-Eigenschaft abzufragen, um den Stummschaltungsstatus der Spur zu überwachen.
> Stattdessen sollten Sie Ereignis-Listener für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event) und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event) Ereignisse hinzufügen.

## Beispiele

Dieses Beispiel zählt die Anzahl der momentan stummgeschalteten Spuren in einem Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten.

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
