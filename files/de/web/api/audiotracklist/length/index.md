---
title: "AudioTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/AudioTrackList/length
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("AudioTrackList")}}**-Eigenschaft **`length`** gibt die Anzahl der Einträge in der `AudioTrackList` zurück, wobei jeder Eintrag ein {{domxref("AudioTrack")}} ist, das einen Audiotrack im Medienelement darstellt. Ein Wert von 0 zeigt an, dass keine Audiotracks im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Audiotracks in der `AudioTrackList` enthalten sind. Jeder Track kann angesprochen werden, indem die `AudioTrackList` als ein Array von Objekten vom Typ {{domxref("AudioTrack")}} behandelt wird.

## Beispiele

Dieses Codebeispiel ermittelt die Anzahl der Audiotracks im ersten {{HTMLElement("video")}}-Element, das im {{Glossary("DOM")}} mit {{domxref("Document.querySelector", "querySelector()")}} gefunden wird.

```js
const videoElem = document.querySelector("video");
let numAudioTracks = 0;

if (videoElem.audioTracks) {
  numAudioTracks = videoElem.audioTracks.length;
}
```

Beachten Sie, dass in diesem Beispiel geprüft wird, ob {{domxref("HTMLMediaElement.audioTracks")}} definiert ist, um zu verhindern, dass es bei Browsern ohne Unterstützung für {{domxref("AudioTrack")}} zu einem Fehler kommt.

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
