---
title: "EncodedAudioChunk: Eigenschaft type"
short-title: type
slug: Web/API/EncodedAudioChunk/type
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`type`** des {{domxref("EncodedAudioChunk")}}-Interfaces gibt an, ob das Audio-Chunk ein Schlüssel-Chunk ist, welches beim Dekodieren nicht auf andere Frames angewiesen ist.

## Wert

Ein String, einer der folgenden:

- `"key"`
  - : Die Daten sind ein Schlüssel-Chunk.
- `"delta"`
  - : Die Daten sind kein Schlüssel-Chunk.

## Beispiele

Im folgenden Beispiel wird `type` in der Konsole ausgegeben.

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

## Kompatibilität der Browser

{{Compat}}
