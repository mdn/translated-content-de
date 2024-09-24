---
title: "VideoTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/VideoTrackList/length
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **{{domxref("VideoTrackList")}}**
Eigenschaft **`length`** gibt die Anzahl der Einträge in der
`VideoTrackList` zurück, von denen jeder ein {{domxref("VideoTrack")}} ist, das
einen Videospur im Media-Element darstellt.

Ein Wert von 0 gibt an, dass keine
Videospuren im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Videospuren in der
`VideoTrackList` enthalten sind. Jede Spur kann abgerufen werden, indem die
`VideoTrackList` als ein Array von Objekten des Typs {{domxref("VideoTrack")}} behandelt wird.

## Beispiele

Dieses Beispiel ermittelt die Anzahl der Videospuren in dem ersten {{HTMLElement("video")}}
Element, das im {{Glossary("DOM")}} durch {{domxref("Document.querySelector", "querySelector()")}} gefunden wird.

```js
const videoElem = document.querySelector("video");
let numVideoTracks = 0;

if (videoElem.videoTracks) {
  numVideoTracks = videoElem.videoTracks.length;
}
```

Beachten Sie, dass in diesem Beispiel geprüft wird, ob {{domxref("HTMLMediaElement.videoTracks")}}
definiert ist, um zu vermeiden, dass es bei Browsern ohne Unterstützung für {{domxref("VideoTrack")}}
fehlschlägt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
