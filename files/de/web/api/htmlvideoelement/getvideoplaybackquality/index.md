---
title: "HTMLVideoElement: getVideoPlaybackQuality() Methode"
short-title: getVideoPlaybackQuality()
slug: Web/API/HTMLVideoElement/getVideoPlaybackQuality
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

Die **{{domxref("HTMLVideoElement")}}**-Methode **`getVideoPlaybackQuality()`** erstellt und gibt ein {{domxref("VideoPlaybackQuality")}}-Objekt zurück, das Metriken enthält, einschließlich wie viele Frames verloren gegangen sind.

Die zurückgegebenen Daten können verwendet werden, um die Qualität des Videostreams zu bewerten.

## Syntax

```js-nolint
getVideoPlaybackQuality()
```

### Parameter

Keine.

### Rückgabewert

Ein {{domxref("VideoPlaybackQuality")}}-Objekt, das Informationen über die aktuelle Wiedergabequalität des Videoelements bietet.

## Beispiele

Dieses Beispiel aktualisiert ein Element, um die Gesamtzahl der bisher im Wiedergabeprozess verstrichenen Videoframes anzuzeigen. Dieser Wert umfasst alle verlorenen oder beschädigten Frames, ist also nicht identisch mit der "Gesamtzahl der abgespielten Frames."

```js
const videoElem = document.getElementById("my_vid");
const counterElem = document.getElementById("counter");
const quality = videoElem.getVideoPlaybackQuality();

counterElem.innerText = quality.totalVideoFrames;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das {{HTMLElement("video")}}-Element
- Die {{domxref("VideoPlaybackQuality")}}-Schnittstelle.
