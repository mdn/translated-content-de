---
title: "VideoTrack: id-Eigenschaft"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: ae380dd2b211ab497e064d4074ff81e71cb91a00
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`id`** der Schnittstelle [`VideoTrack`](/de/docs/Web/API/VideoTrack) enthält eine Zeichenfolge, die den durch **[`VideoTrack`](/de/docs/Web/API/VideoTrack)** repräsentierten Track eindeutig identifiziert.

Diese ID kann mit der Methode [`VideoTrackList.getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) verwendet werden, um einen bestimmten Track innerhalb der einem Medienelement zugeordneten Medien zu finden.

Die Track-ID kann auch als Fragment einer URL verwendet werden, über die der bestimmte Track geladen wird (sofern das Medium Medienfragmente unterstützt).

## Wert

Eine Zeichenfolge, die den Track identifiziert und beim Aufruf von [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) für eine [`VideoTrackList`](/de/docs/Web/API/VideoTrackList) verwendet werden kann, beispielsweise für die Liste, die durch die Eigenschaft [`videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) eines Medienelements angegeben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
