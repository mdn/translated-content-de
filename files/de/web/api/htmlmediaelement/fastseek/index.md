---
title: "HTMLMediaElement: fastSeek() Methode"
short-title: fastSeek()
slug: Web/API/HTMLMediaElement/fastSeek
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.fastSeek()`** Methode sucht schnell eine neue Zeit im Medium, wobei Präzision gegen Geschwindigkeit eingetauscht wird.

> [!NOTE]
> Wenn Sie mit Präzision suchen müssen, sollten Sie stattdessen [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) setzen.

## Syntax

```js-nolint
fastSeek(time)
```

### Parameter

- `time`
  - : Ein Double.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel sucht schnell an die 20-Sekunden-Position des `<video>`-Elements.

```js
let myVideo = document.getElementById("myVideoElement");

myVideo.fastSeek(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTMLMediaElement.currentTime](/de/docs/Web/API/HTMLMediaElement/currentTime)
  für das Suchen ohne Präzisionseinbußen
