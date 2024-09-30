---
title: "EncodedVideoChunk: copyTo()-Methode"
short-title: copyTo()
slug: Web/API/EncodedVideoChunk/copyTo
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Interfaces kopiert den kodierten Videodaten-Chunk.

## Syntax

```js-nolint
copyTo(destination)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, in den die Daten kopiert werden können.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) erstellt und anschließend kopiert.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedVideoChunk(init);

chunk.copyTo(newBuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
