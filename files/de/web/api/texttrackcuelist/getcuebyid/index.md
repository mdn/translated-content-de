---
title: "TextTrackCueList: getCueById()-Methode"
short-title: getCueById()
slug: Web/API/TextTrackCueList/getCueById
l10n:
  sourceCommit: 592f6ec42e54981b6573b58ec0343c9aa8cbbda8
---

{{APIRef("WebVTT")}}

Die **`getCueById()`**-Methode der {{domxref("TextTrackCueList")}}-Schnittstelle gibt den ersten {{domxref("VTTCue")}} in der Liste zurück, die durch das `TextTrackCueList`-Objekt dargestellt wird, dessen Identifikator mit dem Wert von `id` übereinstimmt.

## Syntax

```js-nolint
getCueById(id)
```

### Parameter

- `id`
  - : Ein String, der ein Identifikator für das Cue ist.

### Rückgabewert

Ein {{domxref("VTTCue")}}-Objekt.

## Beispiele

Die {{domxref("TextTrack.cues")}}-Eigenschaft gibt eine {{domxref("TextTrackCueList")}} zurück, die die aktuellen Cues für diesen bestimmten Track enthält. Der Aufruf von `cues.getCueById("second")` gibt den {{domxref("VTTCue")}} mit der ID "second" zurück.

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
  console.log(video.textTracks[0].cues.getCueById("second")); // ein VTTCue-Objekt;
};
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
