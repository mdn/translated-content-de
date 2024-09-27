---
title: "AudioTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/AudioTrackList/length
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrackList`](/de/docs/Web/API/AudioTrackList)**
Eigenschaft **`length`** gibt die Anzahl der Einträge in der
`AudioTrackList` zurück, von denen jeder ein [`AudioTrack`](/de/docs/Web/API/AudioTrack)
darstellt, der einen Audiotrack im Media-Element repräsentiert. Ein Wert von 0 zeigt an, dass
keine Audiotracks im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Audiotracks in der
`AudioTrackList` enthalten sind. Jeder Track kann durch die Behandlung der
`AudioTrackList` als ein Array von Objekten des Typs [`AudioTrack`](/de/docs/Web/API/AudioTrack) abgerufen werden.

## Beispiele

Dieses Snippet ermittelt die Anzahl der Audiotracks im ersten {{HTMLElement("video")}}
Element, das im [DOM](/de/docs/Glossary/DOM) durch [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

```js
const videoElem = document.querySelector("video");
let numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

Beachten Sie, dass dieses Beispiel prüft, ob [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) definiert ist, um ein Scheitern bei Browsern ohne Unterstützung für [`AudioTrack`](/de/docs/Web/API/AudioTrack) zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
