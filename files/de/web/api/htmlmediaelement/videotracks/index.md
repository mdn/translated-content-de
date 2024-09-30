---
title: "HTMLMediaElement: videoTracks-Eigenschaft"
short-title: videoTracks
slug: Web/API/HTMLMediaElement/videoTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`videoTracks`**-Eigenschaft bei [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt zurück, welches alle [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekte auflistet, die die Videospuren des Medienelements repräsentieren.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich die Inhalte der Liste dynamisch ändern, wenn Spuren zum Medienelement hinzugefügt oder daraus entfernt werden. Sobald Sie eine Referenz zur Liste haben, können Sie diese überwachen, um Änderungen zu erkennen, wenn neue Videospuren hinzugefügt oder vorhandene entfernt werden. Siehe [VideoTrackList-Ereignisse](/de/docs/Web/API/VideoTrackList#events), um mehr darüber zu erfahren, wie Sie Änderungen an der Spur-Liste eines Medienelements beobachten können.

## Wert

Ein [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)-Objekt, das die Liste der im Medienelement enthaltenen Videospuren repräsentiert. Die Liste der Spuren kann mit Array-Notation oder mit der [`getTrackById()`](/de/docs/Web/API/VideoTrackList/getTrackById)-Methode des Objekts abgerufen werden.

Jede Spur wird durch ein [`VideoTrack`](/de/docs/Web/API/VideoTrack)-Objekt dargestellt, das Informationen über die Spur liefert.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.videoTracks`-Eigenschaft
- {{HTMLElement("video")}}
- [`VideoTrack`](/de/docs/Web/API/VideoTrack), [`VideoTrackList`](/de/docs/Web/API/VideoTrackList)
