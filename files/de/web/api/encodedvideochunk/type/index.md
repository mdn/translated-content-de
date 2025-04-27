---
title: "EncodedVideoChunk: type-Eigenschaft"
short-title: type
slug: Web/API/EncodedVideoChunk/type
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`**-Eigenschaft der [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Schnittstelle gibt einen Wert zurück, der angibt, ob der Video-Chunk ein Schlüssel-Chunk ist, der nicht auf andere Frames zur Dekodierung angewiesen ist.

## Wert

Ein String, einer von:

- `"key"`
  - : Die Daten sind ein Schlüssel-Chunk.
- `"delta"`
  - : Die Daten sind kein Schlüssel-Chunk.

## Beispiele

Im folgenden Beispiel wird der `type` in die Konsole ausgegeben.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

console.log(chunk.type); // "key"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
