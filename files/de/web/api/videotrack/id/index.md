---
title: "VideoTrack: id-Eigenschaft"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält einen
String, der den Track, der durch die
**[`VideoTrack`](/de/docs/Web/API/VideoTrack)** repräsentiert wird, eindeutig identifiziert.

Diese ID kann mit der Methode
[`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) verwendet werden, um einen spezifischen Track innerhalb der Medien zu lokalisieren, die mit einem Media-Element assoziiert sind.

Die Track-ID kann auch als Fragment einer URL verwendet werden, die den spezifischen Track lädt
(falls die Medien Media-Fragmente unterstützen).

## Wert

Ein String, der den Track identifiziert und geeignet ist für die Verwendung bei einem Aufruf von
[`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) auf einem
[`VideoTrackList`](/de/docs/Web/API/VideoTrackList), wie die durch die
[`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft eines Media-Elements spezifizierte Liste.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
