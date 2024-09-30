---
title: VideoPlaybackQuality
slug: Web/API/VideoPlaybackQuality
l10n:
  sourceCommit: bc46402e6a78656881da7060812387fb6a5bb0e3
---

{{APIRef("HTML DOM")}}

Ein **`VideoPlaybackQuality`**-Objekt wird von der Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zurückgegeben und enthält Metriken, die zur Bestimmung der Wiedergabequalität eines Videos verwendet werden können.

## Instanz-Eigenschaften

_Die Schnittstelle `VideoPlaybackQuality` erbt keine Eigenschaften von anderen Schnittstellen._

- [`creationTime`](/de/docs/Web/API/VideoPlaybackQuality/creationTime) {{ReadOnlyInline}}
  - : Ein [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp), der die Zeit in Millisekunden zwischen dem Start der Navigation und der Erzeugung des Objekts enthält.
- [`droppedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) ausgelassenen Videoframes angibt.
- [`totalVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/totalVideoFrames) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die Anzahl der seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) erstellten und ausgelassenen Videoframes angibt.

### Veraltete Eigenschaften

- [`corruptedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/corruptedVideoFrames) {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Ein `unsigned long`, der die Anzahl der seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) beschädigten Videoframes angibt. Ein beschädigter Frame kann erstellt oder ausgelassen werden.
- [`totalFrameDelay`](/de/docs/Web/API/VideoPlaybackQuality/totalFrameDelay) {{ReadOnlyInline}} {{deprecated_inline}} {{Non-standard_Inline}}
  - : Ein `double`, das die Summe der Frame-Verzögerung seit der Erstellung des zugehörigen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält. Die Frame-Verzögerung ist der Unterschied zwischen der theoretischen Präsentationszeit eines Frames und seiner effektiven Anzeigedauer.

## Instanz-Methoden

_Die Schnittstelle `VideoPlaybackQuality` besitzt keine Methoden und erbt keine._

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality), um ein `VideoPlaybackQuality`-Objekt zu erhalten
- [`MediaSource`](/de/docs/Web/API/MediaSource)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
