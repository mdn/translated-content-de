---
title: "VideoPlaybackQuality: creationTime-Eigenschaft"
short-title: creationTime
slug: Web/API/VideoPlaybackQuality/creationTime
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`creationTime`**-Eigenschaft des [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Interfaces gibt die Anzahl der Millisekunden an, die seit der Erstellung des Browsing-Kontextes vergangen sind, als diese Qualitätsprobe aufgezeichnet wurde.

## Wert

Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp)-Objekt, das anzeigt, wie viele Millisekunden zwischen der Erstellung des Browsing-Kontextes und dem Zeitpunkt vergangen sind, zu dem diese Probe der Videoqualität erhalten wurde.

Einzelheiten dazu, wie die Zeit bestimmt wird, finden Sie unter [`Performance.now()`](/de/docs/Web/API/Performance/now).

## Beispiele

Dieses Beispiel ruft `getVideoPlaybackQuality()` auf, um ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zu erhalten, und bestimmt dann, welcher Prozentsatz der Frames entweder durch Beschädigung oder durch fallen gelassen zu werden, verloren gegangen ist. Wenn dieser Wert 10% (0,1) übersteigt, wird eine Funktion namens `lostFramesThresholdExceeded()` aufgerufen, um möglicherweise einen Qualitätsindikator zu aktualisieren, um eine Zunahme des Frame-Verlusts anzuzeigen.

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

- Die [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode, die `VideoPlaybackQuality`-Objekte zurückgibt
