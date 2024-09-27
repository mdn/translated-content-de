---
title: "EncodedAudioChunk: type-Eigenschaft"
short-title: type
slug: Web/API/EncodedAudioChunk/type
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`**-Eigenschaft des schreibgeschützten [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces gibt einen Wert zurück, der anzeigt, ob der Audio-Chunck ein Schlüssel-Chunck ist, der nicht auf andere Frames für das Decoding angewiesen ist.

## Wert

Ein String, einer von:

- `"key"`
  - : Die Daten sind ein Schlüssel-Chunck.
- `"delta"`
  - : Die Daten sind kein Schlüssel-Chunck.

## Beispiele

Im folgenden Beispiel wird der `type` in der Konsole ausgegeben.

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
