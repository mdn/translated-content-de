---
title: "VideoTrack: id-Eigenschaft"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält einen
String, der die Spur, die durch den **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** dargestellt wird, eindeutig identifiziert.

Diese ID kann mit der Methode [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) verwendet werden, um eine bestimmte Spur innerhalb der Medien zu lokalisieren, die mit einem Media-Element verbunden sind.

Die Spur-ID kann auch als Fragment einer URL verwendet werden, die die spezifische Spur lädt (wenn die Medien Media-Fragmente unterstützen).

## Wert

Ein String, der die Spur identifiziert und geeignet ist, wenn `getTrackById()` auf einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) aufgerufen wird, wie zum Beispiel die, die durch die `videoTracks`-Eigenschaft eines Medien-Elements spezifiziert wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
