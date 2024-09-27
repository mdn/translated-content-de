---
title: "TextTrackCueList: getCueById()-Methode"
short-title: getCueById()
slug: Web/API/TextTrackCueList/getCueById
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebVTT")}}

Die **`getCueById()`**-Methode des [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList)-Interfaces gibt die erste [`VTTCue`](/de/docs/Web/API/VTTCue) in der Liste zurück, die durch das `TextTrackCueList`-Objekt repräsentiert wird, deren Kennung mit dem Wert von `id` übereinstimmt.

## Syntax

```js-nolint
getCueById(id)
```

### Parameter

- `id`
  - : Ein Zeichenstring, der eine Kennung für das Cue ist.

### Rückgabewert

Ein [`VTTCue`](/de/docs/Web/API/VTTCue)-Objekt.

## Beispiele

Die [`TextTrack.cues`](/de/docs/Web/API/TextTrack/cues)-Eigenschaft gibt eine [`TextTrackCueList`](/de/docs/Web/API/TextTrackCueList) zurück, die die aktuellen Cues für diesen speziellen Track enthält. Das Aufrufen von `cues.getCueById("second")` gibt die [`VTTCue`](/de/docs/Web/API/VTTCue) mit einer ID von "second" zurück.

```plain
WEBVTT

first
00:00:00.000 --> 00:00:00.999 line:80%
Hildy!

second
00:00:01.000 --> 00:00:01.499 line:80%
How are you?
```

```js
const video = document.getElementById("video");
video.onplay = () => {
  console.log(video.textTracks[0].cues.getCueById("second")); // a VTTCue object;
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
