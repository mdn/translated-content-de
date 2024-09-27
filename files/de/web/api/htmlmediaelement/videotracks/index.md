---
title: "HTMLMediaElement: videoTracks-Eigenschaft"
short-title: videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoTracks`**-Eigenschaft bei [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, das alle [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte auflistet, die die Videospuren des Mediaelements darstellen.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich die Inhalte der Liste dynamisch ändern, wenn Spuren zum Mediaelement hinzugefügt oder entfernt werden. Sobald Sie eine Referenz zu der Liste haben, können Sie Änderungen überwachen, um zu erkennen, wann neue Videospuren hinzugefügt oder bestehende entfernt werden. Siehe [VideoTrackList-Ereignisse](/de/docs/Web/API/VideoTrackList#events), um mehr darüber zu erfahren, wie Sie Änderungen an der Spurliste eines Mediaelements beobachten können.

## Wert

Ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt, das die Liste der im Mediaelement enthaltenen Videospuren darstellt. Die Liste der Spuren kann über die Array-Notation oder über die Methode [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById) des Objekts zugegriffen werden.

Jede Spur wird durch ein [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekt repräsentiert, das Informationen über die Spur bereitstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.videoTracks`-Eigenschaft
- {{HTMLElement("video")}}
- [`VideoTrack`](/de/docs/Web/API/VideoTrack), [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)
