---
title: VideoPlaybackQuality
slug: Web/API/VideoPlaybackQuality
l10n:
  sourceCommit: bc46402e6a78656881da7060812387fb6a5bb0e3
---

{{APIRef("HTML DOM")}}

Ein **`VideoPlaybackQuality`** Objekt wird von der Methode {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} zurückgegeben und enthält Metriken, die zur Bestimmung der Wiedergabequalität eines Videos verwendet werden können.

## Instanz-Eigenschaften

_Die `VideoPlaybackQuality` Schnittstelle erbt keine Eigenschaften von anderen Schnittstellen._

- {{domxref("VideoPlaybackQuality.creationTime", "creationTime")}} {{ReadOnlyInline}}
  - : Ein {{domxref("DOMHighResTimeStamp")}}, der die Zeit in Millisekunden zwischen dem Start der Navigation und der Erstellung des Objekts enthält.
- {{domxref("VideoPlaybackQuality.droppedVideoFrames", "droppedVideoFrames")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der Videoframes angibt, die seit der Erstellung des zugehörigen {{domxref("HTMLVideoElement")}} ausgelassen wurden.
- {{domxref("VideoPlaybackQuality.totalVideoFrames", "totalVideoFrames")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der erstellten und ausgelassenen Videoframes seit der Erstellung des zugehörigen {{domxref("HTMLVideoElement")}} angibt.

### Veraltete Eigenschaften

- {{domxref("VideoPlaybackQuality.corruptedVideoFrames", "corruptedVideoFrames")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned long`, der die Anzahl der beschädigten Videoframes seit der Erstellung des zugehörigen {{domxref("HTMLVideoElement")}} angibt. Ein beschädigter Frame kann erstellt oder ausgelassen werden.
- {{domxref("VideoPlaybackQuality.totalFrameDelay", "totalFrameDelay")}} {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein `double`, der die Summe der Frame-Verzögerung seit der Erstellung des zugehörigen {{domxref("HTMLVideoElement")}} enthält. Die Frame-Verzögerung ist der Unterschied zwischen der theoretischen Präsentationszeit eines Frames und seiner tatsächlichen Anzeigedauer.

## Instanz-Methoden

_Die `VideoPlaybackQuality` Schnittstelle hat keine Methoden und erbt keine._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} Methode, um ein `VideoPlaybackQuality` Objekt zu erhalten
- {{domxref("MediaSource")}}
- {{domxref("SourceBuffer")}}
