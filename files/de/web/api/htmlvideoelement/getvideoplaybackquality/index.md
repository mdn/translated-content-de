---
title: "HTMLVideoElement: getVideoPlaybackQuality() Methode"
short-title: getVideoPlaybackQuality()
slug: Web/API/HTMLVideoElement/getVideoPlaybackQuality
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ APIRef("HTML DOM") }}

Die **[`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)** Methode
**`getVideoPlaybackQuality()`** erstellt und gibt ein
[`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt zurück, das Metriken enthält, einschließlich der Anzahl der verlorenen Frames.

Die zurückgegebenen Daten können zur Bewertung der Qualität des Videostreams verwendet werden.

## Syntax

```js-nolint
getVideoPlaybackQuality()
```

### Parameter

Keine.

### Rückgabewert

Ein [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality)-Objekt, das Informationen über die aktuelle Wiedergabequalität des Videoelements bereitstellt.

## Beispiele

Dieses Beispiel aktualisiert ein Element, um die Gesamtzahl der Videoframes anzuzeigen, die bisher im Wiedergabeprozess vergangen sind. Dieser Wert umfasst alle verlorenen oder beschädigten Frames, daher ist er nicht identisch mit der "Gesamtzahl der abgespielten Frames."

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

- Das {{HTMLElement("video")}} Element
- Die [`VideoPlaybackQuality`](/de/docs/Web/API/VideoPlaybackQuality) Schnittstelle.
