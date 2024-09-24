---
title: "VideoPlaybackQuality: totalVideoFrames-Eigenschaft"
short-title: totalVideoFrames
slug: Web/API/VideoPlaybackQuality/totalVideoFrames
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("HTML DOM")}}

Die **`totalVideoFrames`**-Eigenschaft des {{domxref("VideoPlaybackQuality")}}-Interfaces gibt die Gesamtzahl der Videoframes zurück, die seit dem Laden der Medien angezeigt oder verworfen wurden.

## Wert

Die Gesamtanzahl der Frames, die das {{HTMLElement("video")}}-Element seit dem Laden der Medien angezeigt oder verworfen hat. Im Wesentlichen ist dies die Anzahl der Frames, die das Element _präsentiert hätte_, hätte es keine Probleme gegeben.

Dieser Wert wird zurückgesetzt, wenn die Medien neu geladen oder ersetzt werden.

## Beispiele

Dieses Beispiel ruft {{domxref("HTMLVideoElement.getVideoPlaybackQuality", "getVideoPlaybackQuality()")}} auf, um ein {{domxref("VideoPlaybackQuality")}}-Objekt zu erhalten, und bestimmt dann, welcher Prozentsatz der Frames verloren gegangen ist, sei es durch Beschädigung oder Verwurf. Wenn dieser Wert 10% (0,1) überschreitet, wird eine Funktion namens `lostFramesThresholdExceeded()` aufgerufen, um möglicherweise einen Qualitätsindikator zu aktualisieren, um einen Anstieg des Frameverlusts anzuzeigen.

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

Ein ähnlicher Algorithmus könnte verwendet werden, um zu versuchen, auf ein Video mit niedrigerer Auflösung umzuschalten, das weniger Bandbreite benötigt, um das Verlieren von Frames zu vermeiden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}-Methode zum Erstellen und Zurückgeben dieses Interfaces.
