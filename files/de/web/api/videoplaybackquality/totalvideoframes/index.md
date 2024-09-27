---
title: "VideoPlaybackQuality: totalVideoFrames Eigenschaft"
short-title: totalVideoFrames
slug: Web/API/VideoPlaybackQuality/totalVideoFrames
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`totalVideoFrames`** des [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Interfaces gibt die Gesamtanzahl der Videoframes zurück, die angezeigt oder seit dem Laden der Medien verworfen wurden.

## Wert

Die Gesamtanzahl der Frames, die das {{HTMLElement("video")}}-Element seit dem Laden der Medien angezeigt oder verworfen hat. Im Wesentlichen ist dies die Anzahl der Frames, die das Element _präsentiert hätte_, wenn keine Probleme aufgetreten wären.

Dieser Wert wird zurückgesetzt, wenn die Medien neu geladen oder ersetzt werden.

## Beispiele

Dieses Beispiel ruft [`getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) auf, um ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zu erhalten, und ermittelt dann, welcher Prozentsatz der Frames durch Korruption oder Ablegen verloren gegangen ist. Wenn dieser Wert 10 % (0,1) überschreitet, wird eine Funktion namens `lostFramesThresholdExceeded()` aufgerufen, um möglicherweise einen Qualitätsindikator zu aktualisieren, der einen Anstieg des Frame-Verlusts anzeigt.

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

Ein ähnlicher Algorithmus könnte verwendet werden, um zu versuchen, zu einem Video mit niedrigerer Auflösung zu wechseln, das weniger Bandbreite benötigt, um zu vermeiden, dass Frames ausgelassen werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode, um dieses Interface zu konstruieren und zurückzugeben.
