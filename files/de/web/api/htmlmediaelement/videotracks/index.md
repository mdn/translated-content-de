---
title: "HTMLMediaElement: videoTracks-Eigenschaft"
short-title: videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoTracks`** Eigenschaft von {{DOMxRef("HTMLMediaElement")}} Objekten gibt ein {{DOMxRef("VideoTrackList")}} Objekt zurück, das alle {{DOMxRef("VideoTrack")}} Objekte auflistet, die die Video-Tracks des Medienelements darstellen.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich der Inhalt der Liste dynamisch ändert, wenn Tracks zum Medienelement hinzugefügt oder daraus gelöscht werden. Sobald Sie eine Referenz auf die Liste haben, können Sie sie überwachen, um festzustellen, wann neue Video-Tracks hinzugefügt oder bestehende entfernt werden. Weitere Informationen zum Überwachen von Änderungen an der Trackliste eines Medienelements finden Sie unter [VideoTrackList-Ereignisse](/de/docs/Web/API/VideoTrackList#events).

## Wert

Ein {{DOMxRef("VideoTrackList")}} Objekt, das die Liste der im Medienelement enthaltenen Video-Tracks darstellt. Die Liste der Tracks kann mit Array-Notation oder über die {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} Methode des Objekts abgerufen werden.

Jeder Track wird durch ein {{DOMxRef("VideoTrack")}} Objekt repräsentiert, das Informationen über den Track bietet.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("HTMLMediaElement")}}: Schnittstelle zur Definition der `HTMLMediaElement.videoTracks` Eigenschaft
- {{HTMLElement("video")}}
- {{DOMxRef("VideoTrack")}}, {{DOMxRef("VideoTrackList")}}
