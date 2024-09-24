---
title: "VideoPlaybackQuality: Eigenschaft corruptedVideoFrames"
short-title: corruptedVideoFrames
slug: Web/API/VideoPlaybackQuality/corruptedVideoFrames
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

Die unveränderliche Eigenschaft **`corruptedVideoFrames`** des {{domxref("VideoPlaybackQuality")}}-Interfaces gibt die Anzahl der beschädigten Video-Frames an, die empfangen wurden, seit das {{HTMLElement("video")}}-Element zuletzt geladen oder neu geladen wurde.

## Wert

Die Anzahl der beschädigten Video-Frames, die empfangen wurden, seit das {{HTMLElement("video")}}-Element zuletzt geladen oder neu geladen wurde.

Es liegt im Ermessen des {{Glossary("user agent")}}, ob ein beschädigter Video-Frame angezeigt wird oder nicht. Wenn ein beschädigter Frame verworfen wird, dann werden sowohl `corruptedVideoFrames` als auch {{domxref("VideoPlaybackQuality.droppedVideoFrames", "droppedVideoFrames")}} inkrementiert.

## Beispiele

Dieses Beispiel bestimmt den Prozentsatz der Frames, die beschädigt wurden, und wenn der Wert größer als 5 % ist, wird eine Funktion namens `downgradeVideo()` aufgerufen, die implementiert werden könnte, um zu einem anderen Video zu wechseln, das das Netzwerk weniger beanspruchen könnte.

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

- Die {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}-Methode zur Konstruktion und Rückgabe dieses Interfaces.
