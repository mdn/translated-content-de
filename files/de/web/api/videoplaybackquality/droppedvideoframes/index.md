---
title: "VideoPlaybackQuality: Eigenschaft droppedVideoFrames"
short-title: droppedVideoFrames
slug: Web/API/VideoPlaybackQuality/droppedVideoFrames
l10n:
  sourceCommit: 1a91b0b63f0cbaca9125bd48d4e5bc8afed2a7a3
---

{{APIRef("HTML DOM")}}

Die schreibgeschützte **`droppedVideoFrames`**-Eigenschaft der {{domxref("VideoPlaybackQuality")}}-Schnittstelle gibt die Anzahl der Video-Frames zurück, die fallengelassen wurden, anstatt angezeigt zu werden, seit das letzte Mal das Medium in das {{domxref("HTMLVideoElement")}} geladen wurde.

## Wert

Ein unsignierter 64-Bit-Wert, der die Anzahl der fallengelassenen Frames angibt, seit das letzte Mal das Medium im {{HTMLElement("video")}}-Element geladen oder neu geladen wurde. Diese Information kann verwendet werden, um zu bestimmen, ob der Videostream herabgestuft werden sollte, um das Falllassen von Frames zu vermeiden.

Frames werden typischerweise entweder vor oder nach ihrer Dekodierung fallengelassen, wenn festgestellt wird, dass es nicht möglich sein wird, sie zum richtigen Zeitpunkt auf dem Bildschirm darzustellen.

## Beispiele

Dieses Beispiel ruft {{domxref("HTMLVideoElement.getVideoPlaybackQuality", "getVideoPlaybackQuality()")}} auf, um ein {{domxref("VideoPlaybackQuality")}}-Objekt zu erhalten und bestimmt dann, welcher Prozentsatz der Frames fallengelassen wurde. Dieser Wert wird dann in einem Element zur Referenz für den Benutzer angezeigt.

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

- Die {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}}-Methode, die `VideoPlaybackQuality`-Objekte erstellt und zurückgibt
