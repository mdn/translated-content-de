---
title: "HTMLMediaElement: audioTracks-Eigenschaft"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`audioTracks`**-Eigenschaft von [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement)-Objekten gibt ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt zurück, das alle [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekte auflistet, die die Audio-Tracks des Media-Elements darstellen.

Das Media-Element kann entweder ein {{HTMLElement("audio")}}-Element oder ein {{HTMLElement("video")}}-Element sein.

Die zurückgegebene Liste ist _live_; das heißt, wenn Tracks dem Media-Element hinzugefügt oder entfernt werden, ändert sich der Inhalt der Liste dynamisch. Sobald Sie eine Referenz zur Liste haben, können Sie sie überwachen, um Änderungen zu erkennen, wenn neue Audio-Tracks hinzugefügt oder vorhandene entfernt werden. Siehe [AudioTrackList-Ereignisse](/de/docs/Web/API/AudioTrackList#events), um mehr darüber zu erfahren, wie Sie Änderungen an der Track-Liste eines Media-Elements überwachen können.

## Wert

Ein [`AudioTrackList`](/de/docs/Web/API/AudioTrackList)-Objekt, das die Liste der im Media-Element enthaltenen Audio-Tracks darstellt. Auf die Liste der Tracks kann über Array-Notation oder über die [`getTrackById()`](/de/docs/Web/API/AudioTrackList/getTrackById)-Methode des Objekts zugegriffen werden.

Jeder Track wird durch ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)-Objekt dargestellt, das Informationen über den Track bietet.

## Beispiele

In diesem Beispiel werden alle Audio-Tracks eines bestimmten Elements stummgeschaltet.

### HTML

Das HTML stellt das Element selbst bereit.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

Der JavaScript-Code kümmert sich um das Stummschalten der Audio-Tracks des Video-Elements.

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
