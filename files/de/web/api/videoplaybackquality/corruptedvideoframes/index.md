---
title: "VideoPlaybackQuality: Eigenschaft corruptedVideoFrames"
short-title: corruptedVideoFrames
slug: Web/API/VideoPlaybackQuality/corruptedVideoFrames
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte Eigenschaft **`corruptedVideoFrames`** der Schnittstelle [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) gibt die Anzahl der beschädigten Videoframes an, die seit dem letzten Laden oder Neuladen des {{HTMLElement("video")}}-Elements empfangen wurden.

## Wert

Die Anzahl der beschädigten Videoframes, die seit dem letzten Laden oder Neuladen des {{HTMLElement("video")}}-Elements empfangen wurden.

Es liegt am {{Glossary("user_agent", "User-Agent")}} zu entscheiden, ob ein beschädigter Videoframe angezeigt wird oder nicht. Wenn ein beschädigter Frame verworfen wird, werden sowohl `corruptedVideoFrames` als auch [`droppedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames) erhöht.

## Beispiele

In diesem Beispiel wird der Prozentsatz der beschädigten Frames ermittelt, und wenn der Wert größer als 5% ist, wird eine Funktion namens `downgradeVideo()` aufgerufen, die implementiert werden könnte, um zu einem anderen Video zu wechseln, das das Netzwerk möglicherweise weniger belastet.

```js
const videoElem = document.getElementById("my_vid");
const quality = videoElem.getVideoPlaybackQuality();

if (quality.corruptedVideoFrames / quality.totalVideoFrames > 0.05) {
  downgradeVideo(videoElem);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zum Konstruieren und Zurückgeben dieser Schnittstelle
