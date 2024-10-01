---
title: "VideoTrackList: length-Eigenschaft"
short-title: length
slug: Web/API/VideoTrackList/length
l10n:
  sourceCommit: 8a9085b96d0135920be9b281d4500ff72a7a8369
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **[`VideoTrackList`](/de/docs/Web/API/VideoTrackList)**
Eigenschaft **`length`** gibt die Anzahl der Einträge in der
`VideoTrackList` zurück, von denen jeder ein [`VideoTrack`](/de/docs/Web/API/VideoTrack) ist, der eine
einzelne Videospur im Medienelement darstellt.

Ein Wert von 0 zeigt an, dass keine
Videospuren im Medium vorhanden sind.

## Wert

Eine Zahl, die angibt, wie viele Videospuren in der
`VideoTrackList` enthalten sind. Auf jede Spur kann zugegriffen werden, indem
die `VideoTrackList` als ein Array von Objekten des Typs [`VideoTrack`](/de/docs/Web/API/VideoTrack) behandelt wird.

## Beispiele

Dieses Beispiel ermittelt die Anzahl der Videospuren im ersten {{HTMLElement("video")}}
Element, das im {{Glossary("DOM", "DOM")}} mittels [`querySelector()`](/de/docs/Web/API/Document/querySelector) gefunden wird.

```js
const videoElem = document.querySelector("video");
let numVideoTracks = 0;

if (videoElem.videoTracks) {
  numVideoTracks = videoElem.videoTracks.length;
}
```

Beachten Sie, dass in diesem Beispiel überprüft wird, ob [`HTMLMediaElement.videoTracks`](/de/docs/Web/API/HTMLMediaElement/videoTracks) definiert ist, um einen Fehler in Browsern zu vermeiden, die [`VideoTrack`](/de/docs/Web/API/VideoTrack) nicht unterstützen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
