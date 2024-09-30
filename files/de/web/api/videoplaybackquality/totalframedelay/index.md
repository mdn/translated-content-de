---
title: "VideoPlaybackQuality: totalFrameDelay-Eigenschaft"
short-title: totalFrameDelay
slug: Web/API/VideoPlaybackQuality/totalFrameDelay
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Media Source Extensions")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`VideoPlaybackQuality.totalFrameDelay`** gibt ein `double` zurück, das die Summe der Bildverzögerung seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält. Die Bildverzögerung ist die Differenz zwischen der theoretischen Präsentationszeit eines Bildes und seiner tatsächlichen Anzeigedauer.

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

- Die [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode zum Erstellen und Zurückgeben dieses Interfaces.
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
