---
title: VideoPlaybackQuality
slug: Web/API/VideoPlaybackQuality
l10n:
  sourceCommit: bc46402e6a78656881da7060812387fb6a5bb0e3
---

{{APIRef("HTML DOM")}}

Ein **`VideoPlaybackQuality`**-Objekt wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben und enthält Metriken, die verwendet werden können, um die Wiedergabequalität eines Videos zu bestimmen.

## Instanz-Eigenschaften

_Das `VideoPlaybackQuality`-Interface erbt keine Eigenschaften von anderen Interfaces._

- [`creationTime`](/de/docs/Web/API/VideoPlaybackQuality/creationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), das die Zeit in Millisekunden zwischen dem Beginn der Navigation und der Erstellung des Objekts enthält.
- [`droppedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der Videoframes angibt, die seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) ausgelassen wurden.
- [`totalVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/totalVideoFrames) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) erstellten und ausgelassenen Videoframes angibt.

### Veraltete Eigenschaften

- [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned long`, der die Anzahl der seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) beschädigten Videoframes angibt. Ein beschädigter Frame kann erstellt oder ausgelassen werden.
- [`totalFrameDelay`](/de/docs/Web/API/VideoPlaybackQuality/totalFrameDelay) {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein `double`, das die Summe der Frame-Verspätungen seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält. Die Frame-Verspätung ist der Unterschied zwischen der theoretischen Präsentationszeit eines Frames und seiner tatsächlichen Anzeigedauer.

## Instanz-Methoden

_Das `VideoPlaybackQuality`-Interface hat keine Methoden und erbt keine._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode, um ein `VideoPlaybackQuality`-Objekt zu erhalten
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
