---
title: "VideoPlaybackQuality: droppedVideoFrames-Eigenschaft"
short-title: droppedVideoFrames
slug: Web/API/VideoPlaybackQuality/droppedVideoFrames
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`droppedVideoFrames`**-Eigenschaft der [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Schnittstelle gibt die Anzahl der Videoframes zurück, die fallengelassen wurden, anstatt seit dem letzten Laden der Medien im [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) angezeigt zu werden.

## Wert

Ein unsignierter 64-Bit-Wert, der die Anzahl der Frames angibt, die seit dem letzten Laden oder Neuladen der Medien im {{HTMLElement("video")}}-Element fallengelassen wurden. Diese Information kann verwendet werden, um festzustellen, ob der Videostream herabgestuft werden sollte, um das Fallenlassen von Frames zu vermeiden.

Frames werden typischerweise entweder vor oder nach dem Decodieren fallengelassen, wenn festgestellt wird, dass es nicht möglich sein wird, sie zur richtigen Zeit auf den Bildschirm zu zeichnen.

## Beispiele

Dieses Beispiel ruft [`getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) auf, um ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zu erhalten, und bestimmt dann, welcher Prozentsatz der Frames fallengelassen wurde. Dieser Wert wird dann in einem Element zur Information des Benutzers angezeigt.

```js
const videoElem = document.getElementById("my_vid");
const percentElem = document.getElementById("percent");
const quality = videoElem.getVideoPlaybackQuality();

const dropPercent =
  (quality.droppedVideoFrames / quality.totalVideoFrames) * 100;
percentElem.innerText = Math.trunc(dropPercent).toString(10);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality)-Methode, die `VideoPlaybackQuality`-Objekte erstellt und zurückgibt
