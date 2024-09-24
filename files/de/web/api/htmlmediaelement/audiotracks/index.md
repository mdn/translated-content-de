---
title: "HTMLMediaElement: audioTracks-Eigenschaft"
short-title: audioTracks
slug: Web/API/HTMLMediaElement/audioTracks
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`audioTracks`**
Eigenschaft von {{domxref("HTMLMediaElement")}}-Objekten gibt ein {{domxref("AudioTrackList")}}-Objekt zurück, das alle {{domxref("AudioTrack")}}-Objekte auflistet, die die Audiotracks des Medienelements repräsentieren.

Das Medienelement kann entweder ein {{HTMLElement("audio")}}-Element oder ein {{HTMLElement("video")}}-Element sein.

Die zurückgegebene Liste ist _live_; das bedeutet, dass sich die Inhalte der Liste dynamisch ändern, wenn Tracks zu dem Medienelement hinzugefügt oder daraus entfernt werden. Sobald Sie eine Referenz zur Liste haben, können Sie diese überwachen, um Änderungen zu erkennen, wenn neue Audiotracks hinzugefügt oder bestehende entfernt werden. Siehe [AudioTrackList-Ereignisse](/de/docs/Web/API/AudioTrackList#events), um mehr darüber zu erfahren, wie Sie Änderungen an der Trackliste eines Medienelements überwachen können.

## Wert

Ein {{domxref("AudioTrackList")}}-Objekt, das die Liste der im Medienelement enthaltenen Audiotracks darstellt. Die Liste der Tracks kann mit Array-Notation oder mit der Methode {{domxref("AudioTrackList.getTrackById", "getTrackById()")}} des Objekts abgerufen werden.

Jeder Track wird durch ein {{domxref("AudioTrack")}}-Objekt dargestellt, das Informationen über den Track liefert.

## Beispiele

In diesem Beispiel werden alle Audiotracks eines gegebenen Elements stummgeschaltet.

### HTML

Das HTML stellt das Element selbst dar.

```html
<video id="video" src="somevideo.mp4"></video>
```

### JavaScript

Der JavaScript-Code kümmert sich um das Stummschalten der Audiotracks des Video-Elements.

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

- {{domxref("HTMLMediaElement")}}: Schnittstelle, die die `HTMLMediaElement.audioTracks`-Eigenschaft definiert
- {{HTMLElement("audio")}}, {{HTMLElement("video")}}
- {{domxref("AudioTrack")}}, {{domxref("AudioTrackList")}}
