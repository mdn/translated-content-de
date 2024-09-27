---
title: "MediaStreamTrack: muted-Eigenschaft"
short-title: muted
slug: Web/API/MediaStreamTrack/muted
l10n:
  sourceCommit: cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{APIRef("Media Capture and Streams")}}

Die schreibgeschützte **`muted`**-Eigenschaft der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle gibt einen boolean-Wert zurück, der angibt, ob der Track derzeit nicht in der Lage ist, Mediendaten auszugeben.

> [!NOTE]
> Um eine Möglichkeit zu implementieren, damit Nutzer einen Track stummschalten oder die Stummschaltung aufheben können, verwenden Sie die [`enabled`](/de/docs/Web/API/MediaStreamTrack/enabled)-Eigenschaft. Wenn ein Track durch Setzen von `enabled` auf `false` deaktiviert wird, erzeugt er nur leere Frames (Audio-Frames, in denen jeder Sample 0 ist, oder Video-Frames, in denen jeder Pixel schwarz ist).

## Wert

Ein boolean-Wert, der `true` ist, wenn der Track derzeit stummgeschaltet ist, oder `false`, wenn der Track derzeit nicht stummgeschaltet ist.

> [!NOTE]
> Wenn möglich, vermeiden Sie es, `muted` abzufragen, um den Stummschaltungsstatus des Tracks zu überwachen. Fügen Sie stattdessen Event-Listener für die [`mute`](/de/docs/Web/API/MediaStreamTrack/mute_event)- und [`unmute`](/de/docs/Web/API/MediaStreamTrack/unmute_event)-Events hinzu.

## Beispiele

Dieses Beispiel zählt die Anzahl der Tracks in einem Array von [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekten, die derzeit stummgeschaltet sind.

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
