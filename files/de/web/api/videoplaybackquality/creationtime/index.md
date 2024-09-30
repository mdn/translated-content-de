---
title: "VideoPlaybackQuality: creationTime-Eigenschaft"
short-title: creationTime
slug: Web/API/VideoPlaybackQuality/creationTime
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`creationTime`**-Eigenschaft auf der
[`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Schnittstelle gibt die Anzahl der Millisekunden an, die seit der Erstellung des Browsing-Kontexts vergangen sind, als diese Qualitätsprobe aufgezeichnet wurde.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das die Anzahl der Millisekunden angibt, die zwischen der Erstellung des Browsing-Kontexts und dem Zeitpunkt, zu dem diese Probe der Videoqualität gewonnen wurde, vergangen sind.

Details zur Bestimmung der Zeit finden Sie unter [`Performance.now()`](/de/docs/Web/API/Performance/now).

## Beispiele

Dieses Beispiel ruft `getVideoPlaybackQuality()` auf, um ein
[`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zu erhalten, und ermittelt dann, welcher Prozentsatz der Frames entweder durch Korruption verloren gegangen ist oder fallengelassen wurde. Wenn dieser Wert 10 % (0,1) übersteigt, wird eine Funktion namens `lostFramesThresholdExceeded()` aufgerufen, um möglicherweise einen Qualitätsindikator zu aktualisieren, um einen Anstieg des Frameverlusts anzuzeigen.

```js
const videoElem = document.getElementById("my_vid");
const quality = videoElem.getVideoPlaybackQuality();

if (
  (quality.corruptedVideoFrames + quality.droppedVideoFrames) /
    quality.totalVideoFrames >
  0.1
) {
  lostFramesThresholdExceeded();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality), die
  `VideoPlaybackQuality`-Objekte zurückgibt
