---
title: "VideoPlaybackQuality: Eigenschaft totalFrameDelay"
short-title: totalFrameDelay
slug: Web/API/VideoPlaybackQuality/totalFrameDelay
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Media Source Extensions")}}{{deprecated_header}}{{Non-standard_header}}

Die schreibgeschützte Eigenschaft **`VideoPlaybackQuality.totalFrameDelay`** gibt ein `double` zurück, das die Summe der Rahmenverzögerungen seit der Erstellung des zugehörigen {{domxref("HTMLVideoElement")}} enthält. Die Rahmenverzögerung ist der Unterschied zwischen der theoretischen Präsentationszeit eines Rahmens und der tatsächlichen Anzeigezeit.

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

- Die Methode {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} zum Konstruieren und Zurückgeben dieser Schnittstelle.
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
