---
title: TextTrackCueList
slug: Web/API/TextTrackCueList
l10n:
  sourceCommit: 3975bcf6caa09c9c5f7fddf2eef2be6c021d00f6
---

{{APIRef("WebVTT")}}

Die **`TextTrackCueList`** Schnittstelle der [WebVTT API](/de/docs/Web/API/WebVTT_API) ist ein array-ähnliches Objekt, das eine dynamisch aktualisierende Liste von [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) Objekten darstellt.

Eine Instanz dieses Typs wird von [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) abgerufen, um alle Cues im [`TextTrack`](/de/docs/Web/API/TextTrack) Objekt zu erhalten. Diese Schnittstelle hat keinen Konstruktor.

## Instanzeigenschaften

- [`TextTrackCueList.length`](/de/docs/Web/API/TextTrackCueList/length) {{ReadOnlyInline}}
  - : Ein `unsigned long`, das die Anzahl der Cues in der Liste angibt.

## Instanzmethoden

- [`TextTrackCueList.getCueById()`](/de/docs/Web/API/TextTrackCueList/getCueById)
  - : Gibt das erste [`TextTrackCue`](/de/docs/Web/API/TextTrackCue) Objekt mit der übergebenen Kennung zurück.

## Beispiele

Die [`HTMLMediaElement.textTracks`](/de/docs/Web/API/HTMLMediaElement/textTracks) Eigenschaft gibt ein [`TextTrackList`](/de/docs/Web/API/TextTrackList) Objekt zurück, das alle [`TextTrack`](/de/docs/Web/API/TextTrack) Objekte auflistet, eines für jede Textspur, die mit dem Medium verknüpft ist. Die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues) Eigenschaft gibt dann eine `TextTrackCueList` zurück, die die Cues für diese bestimmte Spur enthält.

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
