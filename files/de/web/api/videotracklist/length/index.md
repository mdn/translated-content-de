---
title: "VideoTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/VideoTrackList/length
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`VideoTrackList`](/de/docs/Web/API/VideoTrackList)** Eigenschaft **`length`** gibt die Anzahl der Einträge in der `VideoTrackList` zurück, von denen jeder ein [`VideoTrack`](/de/docs/Web/API/VideoTrack) ist, der einen Videospur im Medienelement darstellt.

Ein Wert von 0 zeigt an, dass es keine Videospuren im Medium gibt.

## Wert

Eine Zahl, die angibt, wie viele Videospuren in der `VideoTrackList` enthalten sind. Auf jede Spur kann zugegriffen werden, indem die `VideoTrackList` als Array von Objekten des Typs [`VideoTrack`](/de/docs/Web/API/VideoTrack) behandelt wird.

## Beispiele

Dieses Beispiel ermittelt die Anzahl der Videospuren im ersten {{HTMLElement("video")}}-Element, das im [DOM](/de/docs/Glossary/DOM) durch [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

![Code-Beispiel](0-9b65269b.md)

Beachten Sie, dass in diesem Beispiel überprüft wird, ob [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) definiert ist, um zu vermeiden, dass es in Browsern ohne Unterstützung für [`VideoTrack`](/de/docs/Web/API/VideoTrack) fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
