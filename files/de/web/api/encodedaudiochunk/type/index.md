---
title: "EncodedAudioChunk: type-Eigenschaft"
short-title: type
slug: Web/API/EncodedAudioChunk/type
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`** Eigenschaft des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces gibt einen Wert zurück, der angibt, ob der Audio-Chunk ein Schlüssel-Chunk ist, der nicht auf andere Frames zur Dekodierung angewiesen ist.

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
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

console.log(chunk.type); //"key"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
