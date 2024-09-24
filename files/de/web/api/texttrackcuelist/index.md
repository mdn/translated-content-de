---
title: TextTrackCueList
slug: Web/API/TextTrackCueList
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die **`TextTrackCueList`**-Schnittstelle der [WebVTT-API](/de/docs/Web/API/WebVTT_API) ist ein array-ähnliches Objekt, das eine dynamisch aktualisierte Liste von {{domxref("TextTrackCue")}}-Objekten darstellt.

Eine Instanz dieses Typs wird von {{domxref('TextTrack.cues')}} abgerufen, um alle Cues im {{domxref("TextTrack")}}-Objekt zu erhalten. Diese Schnittstelle besitzt keinen Konstruktor.

## Instanzeigenschaften

- {{domxref('TextTrackCueList.length')}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der Cues in der Liste darstellt.

## Instanzmethoden

- {{domxref('TextTrackCueList.getCueById()')}}
  - : Gibt das erste {{domxref('TextTrackCue')}}-Objekt mit dem übergebenen Identifikator zurück.

## Beispiele

Die {{domxref("HTMLMediaElement.textTracks")}}-Eigenschaft gibt ein {{domxref("TextTrackList")}}-Objekt zurück, das alle {{domxref("TextTrack")}}-Objekte auflistet, eines für jede mit dem Medium verknüpfte Textspur. Die {{domxref("TextTrack.cues")}}-Eigenschaft gibt dann eine `TextTrackCueList` zurück, die die Cues für diese bestimmte Spur enthält.

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues);
};
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
