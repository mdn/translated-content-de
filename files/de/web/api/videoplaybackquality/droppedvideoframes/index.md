---
title: "VideoPlaybackQuality: droppedVideoFrames-Eigenschaft"
short-title: droppedVideoFrames
slug: Web/API/VideoPlaybackQuality/droppedVideoFrames
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`droppedVideoFrames`**-Eigenschaft der [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Schnittstelle gibt die Anzahl der Videoframes zurück, die seit dem letzten Laden des Mediums in das [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) verworfen wurden, anstatt angezeigt zu werden.

## Wert

Ein nicht vorzeichenbehafteter 64-Bit-Wert, der die Anzahl der Frames angibt, die seit dem letzten Laden oder Neuladen des Mediums im {{HTMLElement("video")}}-Element verworfen wurden. Diese Information kann verwendet werden, um zu entscheiden, ob der Videostream herabgestuft werden soll, um das Verwerfen von Frames zu vermeiden.

Frames werden typischerweise entweder vor oder nach ihrer Dekodierung verworfen, wenn festgestellt wird, dass es nicht möglich sein wird, sie zum richtigen Zeitpunkt auf dem Bildschirm darzustellen.

## Beispiele

Dieses Beispiel ruft [`getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality) auf, um ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zu erhalten, und bestimmt dann, welcher Prozentsatz der Frames verworfen wurde. Dieser Wert wird anschließend in einem Element zur Benutzung durch den Anwender angezeigt.

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

- Die Methode [`HTMLVideoElement.getVideoPlaybackQuality()`](/de/docs/Web/API/HTMLVideoElement/getVideoPlaybackQuality), welche `VideoPlaybackQuality`-Objekte erstellt und zurückgibt.
