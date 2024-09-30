---
title: "HTMLMediaElement: fastSeek()-Methode"
short-title: fastSeek()
slug: Web/API/HTMLMediaElement/fastSeek
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("HTML DOM")}}

Die **`HTMLMediaElement.fastSeek()`**-Methode führt ein schnelles Suchen in den Medien zu einer neuen Zeit mit Präzisionseinbußen durch.

> [!NOTE]
> Wenn Sie mit Präzision suchen müssen, sollten Sie stattdessen [`HTMLMediaElement.currentTime`](/de/docs/Web/API/HTMLMediaElement/currentTime) setzen.

## Syntax

```js-nolint
fastSeek(time)
```

### Parameter

- `time`
  - : Ein Doppelwert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Dieses Beispiel sucht schnell zur 20-Sekunden-Position des `<video>`-Elements.

```js
let myVideo = document.getElementById("myVideoElement");

myVideo.fastSeek(20);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [HTMLMediaElement.currentTime](/de/docs/Web/API/HTMLMediaElement/currentTime) zum Suchen ohne Präzisionseinbußen
