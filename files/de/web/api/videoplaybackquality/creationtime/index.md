---
title: "VideoPlaybackQuality: Eigenschaft creationTime"
short-title: creationTime
slug: Web/API/VideoPlaybackQuality/creationTime
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`creationTime`**-Eigenschaft der
{{domxref("VideoPlaybackQuality")}}-Schnittstelle gibt die Anzahl der Millisekunden an, die seit der Erstellung des Browsing-Kontexts vergangen sind, als diese Qualitätsprobe aufgezeichnet wurde.

## Wert

Ein {{domxref("DOMHighResTimeStamp")}}-Objekt, das die Anzahl der Millisekunden angibt, die zwischen der Erstellung des Browsing-Kontexts und dem Zeitpunkt, zu dem diese Probe der Videoqualität erfasst wurde, vergangen sind.

Für Details dazu, wie die Zeit bestimmt wird, siehe {{domxref("Performance.now()")}}.

## Beispiele

Dieses Beispiel ruft `getVideoPlaybackQuality()` auf, um ein
{{domxref("VideoPlaybackQuality")}}-Objekt zu erhalten, und bestimmt dann, welcher Prozentsatz der Frames entweder durch Beschädigung oder durch das Verwerfen verloren gegangen ist. Wenn dieser über 10% (0.1) liegt, wird eine Funktion `lostFramesThresholdExceeded()` aufgerufen, möglicherweise um einen Qualitätsindikator zu aktualisieren, der einen Anstieg des Frameverlusts anzeigt.

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

- Die {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}-Methode, die
  `VideoPlaybackQuality`-Objekte zurückgibt.
