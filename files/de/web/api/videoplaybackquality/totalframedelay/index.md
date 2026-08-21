---
title: "VideoPlaybackQuality: totalFrameDelay-Eigenschaft"
short-title: totalFrameDelay
slug: Web/API/VideoPlaybackQuality/totalFrameDelay
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Media Source Extensions")}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`VideoPlaybackQuality.totalFrameDelay`** liefert ein `double`, das die Summe der Frame-Verzögerungen seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält. Die Frame-Verzögerung ist der Unterschied zwischen der theoretischen Präsentationszeit eines Frames und seiner effektiven Anzeigezeit.

## Wert

Eine Zahl.

## Beispiele

```js
const videoElt = document.getElementById("my_vid");
const quality = videoElt.getVideoPlaybackQuality();

alert(quality.totalFrameDelay);
```

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zum Erstellen und Zurückgeben dieses Interfaces.
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
