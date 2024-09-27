---
title: "EncodedVideoChunk: type-Eigenschaft"
short-title: type
slug: Web/API/EncodedVideoChunk/type
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Interfaces gibt einen Wert zurück, der angibt, ob der Video-Chunk ein Schlüssel-Chunk ist, der nicht auf andere Frames für die Dekodierung angewiesen ist.

## Wert

Ein String, einer der folgenden:

- `"key"`
  - : Die Daten sind ein Schlüssel-Chunk.
- `"delta"`
  - : Die Daten sind kein Schlüssel-Chunk.

## Beispiele

Im folgenden Beispiel wird der `type` in der Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);

console.log(chunk.type); //"key"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
