---
title: "HTMLMediaElement: audioTracks Eigenschaft"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`audioTracks`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurück, das alle [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet, die die Audio-Spuren des Media-Elements darstellen.

Das Media-Element kann entweder ein {{HTMLElement("audio")}}-Element oder ein {{HTMLElement("video")}}-Element sein.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich der Inhalt der Liste dynamisch ändert, sobald Spuren zum Media-Element hinzugefügt oder daraus entfernt werden. Sobald Sie eine Referenz zur Liste haben, können Sie sie überwachen, um festzustellen, wann neue Audio-Spuren hinzugefügt oder bestehende entfernt werden. Siehe [AudioTrackList Ereignisse](/de/docs/Web/API/AudioTrackList#events), um mehr darüber zu erfahren, wie man Änderungen an der Spur-Liste eines Media-Elements beobachtet.

## Wert

Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt, das die Liste der im Media-Element enthaltenen Audio-Spuren darstellt. Die Liste der Spuren kann mit Array-Notation oder mit der [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById)-Methode des Objekts abgerufen werden.

Jede Spur wird durch ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt dargestellt, das Informationen über die Spur bereitstellt.

## Beispiele

In diesem Beispiel werden alle Audio-Spuren eines bestimmten Elements stummgeschaltet.

### HTML

Das HTML legt das Element selbst fest.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

Der JavaScript-Code behandelt das Stummschalten der Audio-Spuren des Video-Elements.

```js
const video = document.getElementById("video");

for (let i = 0; i < video.audioTracks.length; i += 1) {
  video.audioTracks[i].enabled = false;
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
