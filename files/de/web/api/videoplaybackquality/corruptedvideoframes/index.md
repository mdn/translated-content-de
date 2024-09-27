---
title: "VideoPlaybackQuality: corruptedVideoFrames-Eigenschaft"
short-title: corruptedVideoFrames
slug: Web/API/VideoPlaybackQuality/corruptedVideoFrames
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die schreibgeschützte **`corruptedVideoFrames`**-Eigenschaft des [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Interfaces gibt die Anzahl der beschädigten Videoframes an, die seit dem letzten Laden oder Neuladen des {{HTMLElement("video")}}-Elements empfangen wurden.

## Wert

Die Anzahl der beschädigten Videoframes, die seit dem letzten Laden oder Neuladen des {{HTMLElement("video")}}-Elements empfangen wurden.

Es liegt im Ermessen des [User-Agents](/de/docs/Glossary/user_agent), ob ein beschädigtes Videoframe angezeigt wird oder nicht. Wenn ein beschädigtes Frame verworfen wird, werden sowohl `corruptedVideoFrames` als auch [`droppedVideoFrames`](/de/docs/Web/API/VideoPlaybackQuality/droppedVideoFrames) inkrementiert.

## Beispiele

Dieses Beispiel bestimmt den Prozentsatz der Frames, die beschädigt wurden. Wenn der Wert größer als 5% ist, wird eine Funktion namens `downgradeVideo()` aufgerufen, die implementiert werden könnte, um auf ein anderes Video umzuschalten, das das Netzwerk weniger belastet.

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

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) zum Erstellen und Zurückgeben dieses Interfaces.
