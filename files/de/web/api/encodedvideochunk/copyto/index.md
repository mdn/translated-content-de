---
title: "EncodedVideoChunk: copyTo() Methode"
short-title: copyTo()
slug: Web/API/EncodedVideoChunk/copyTo
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`** Methode des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Interface kopiert den kodierten Chunk der Videodaten.

## Syntax

```js-nolint
copyTo(destination)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, in den die Daten kopiert werden können.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) erstellt und dann kopiert.

```js
const init = {
  type: "key",
  data: videoBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedVideoChunk(init);

chunk.copyTo(newBuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
