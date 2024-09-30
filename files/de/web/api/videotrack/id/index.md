---
title: "VideoTrack: id-Eigenschaft"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält einen String, der die Spur, die durch den **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** dargestellt wird, eindeutig identifiziert.

Diese ID kann mit der Methode [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) verwendet werden, um eine spezifische Spur in den Medien zu finden, die mit einem Medienelement verknüpft sind.

Die Spur-ID kann auch als Fragment einer URL verwendet werden, die die spezifische Spur lädt (falls die Medien Medienfragmente unterstützen).

## Wert

Ein String, der die Spur identifiziert und geeignet ist für die Verwendung beim Aufruf von [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) auf einer [`VideoTrackList`](/de/docs/Web/API/VideoTrackList), wie sie durch die [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks)-Eigenschaft eines Medienelements angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
