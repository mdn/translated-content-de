---
title: "AudioTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/AudioTrackList/length
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`AudioTrackList`](/de/docs/Web/API/AudioTrackList)**-Eigenschaft **`length`** gibt die Anzahl der Einträge in der `AudioTrackList` zurück, von denen jeder ein [`AudioTrack`](/de/docs/Web/API/AudioTrack) darstellt, welches einen Audio-Track im Media-Element repräsentiert. Ein Wert von 0 zeigt an, dass im Medium keine Audio-Tracks vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Audio-Tracks in der `AudioTrackList` enthalten sind. Jeder Track kann abgerufen werden, indem die `AudioTrackList` als ein Array von Objekten vom Typ [`AudioTrack`](/de/docs/Web/API/AudioTrack) behandelt wird.

## Beispiele

Dieses Snippet ermittelt die Anzahl der Audio-Tracks im ersten {{HTMLElement("video")}}-Element, das im [DOM](/de/docs/Glossary/DOM) mit [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

```js
const videoElem = document.querySelector("video");
let numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

Beachten Sie, dass dieses Beispiel sicherstellt, dass [`HTMLMediaElement.audioTracks`](/de/docs/Web/API/HTMLMediaElement/audioTracks) definiert ist, um Fehler bei Browsern zu vermeiden, die keine Unterstützung für [`AudioTrack`](/de/docs/Web/API/AudioTrack) bieten.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
