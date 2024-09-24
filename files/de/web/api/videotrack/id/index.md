---
title: "VideoTrack: id-Eigenschaft"
short-title: id
slug: Web/API/VideoTrack/id
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die **`id`**-Eigenschaft enthält eine Zeichenkette, die die Spur, die durch den **{{domxref("VideoTrack")}}** dargestellt wird, eindeutig identifiziert.

Diese ID kann mit der Methode {{domxref("VideoTrackList.getTrackById()")}} verwendet werden, um eine bestimmte Spur innerhalb der Medien, die mit einem Medienelement verbunden sind, zu lokalisieren.

Die Spur-ID kann auch als Fragment einer URL verwendet werden, die die spezielle Spur lädt (falls die Medien Media-Fragmente unterstützen).

## Wert

Eine Zeichenkette, die die Spur identifiziert und geeignet ist für den Aufruf von {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} auf einer {{domxref("VideoTrackList")}} wie der, die durch die {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}}-Eigenschaft eines Medienelements angegeben ist.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
