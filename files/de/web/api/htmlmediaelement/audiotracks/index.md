---
title: "HTMLMediaElement: audioTracks-Eigenschaft"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`audioTracks`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurück, das alle [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet, die die Audiotracks des Media-Elements darstellen.

Das Media-Element kann entweder ein {{HTMLElement("audio")}}-Element oder ein {{HTMLElement("video")}}-Element sein.

Die zurückgegebene Liste ist _live_; das heißt, wenn Tracks zum Media-Element hinzugefügt oder daraus entfernt werden, ändert sich der Inhalt der Liste dynamisch. Sobald Sie eine Referenz zur Liste haben, können Sie sie auf Änderungen überwachen, um festzustellen, wann neue Audiotracks hinzugefügt oder bestehende entfernt werden. Siehe [AudioTrackList-Ereignisse](/de/docs/Web/API/AudioTrackList#events), um mehr darüber zu erfahren, wie man Änderungen in der Trackliste eines Media-Elements überwacht.

## Wert

Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt, das die Liste der im Media-Element enthaltenen Audiotracks darstellt. Die Liste der Tracks kann mit Array-Notation oder mit der Methode [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById) des Objekts zugegriffen werden.

Jeder Track wird durch ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt repräsentiert, das Informationen über den Track bereitstellt.

## Beispiele

In diesem Beispiel werden alle Audiotracks eines bestimmten Elements stummgeschaltet.

### HTML

Das HTML erstellt das Element selbst.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

Der JavaScript-Code kümmert sich um das Stummschalten der Audiotracks des Video-Elements.

```js
const video = document.getElementById("video");

for (const track of video.audioTracks) {
  track.enabled = false;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement): Schnittstelle zur Definition der `HTMLMediaElement.audioTracks`-Eigenschaft
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- [`AudioTrack`](/de/docs/Web/API/AudioTrack), [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)
