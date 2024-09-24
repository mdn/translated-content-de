---
title: "EncodedVideoChunk: type Eigenschaft"
short-title: type
slug: Web/API/EncodedVideoChunk/type
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`** schreibgeschützte Eigenschaft des {{domxref("EncodedVideoChunk")}}-Interfaces gibt einen Wert zurück, der angibt, ob der Videoteil ein Schlüsselteil ist, das nicht auf andere Frames zum Dekodieren angewiesen ist.

## Wert

Ein String, einer von:

- `"key"`
  - : Die Daten sind ein Schlüsselteil.
- `"delta"`
  - : Die Daten sind kein Schlüsselteil.

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
