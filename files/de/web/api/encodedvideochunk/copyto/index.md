---
title: "EncodedVideoChunk: copyTo() Methode"
short-title: copyTo()
slug: Web/API/EncodedVideoChunk/copyTo
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`** Methode der {{domxref("EncodedVideoChunk")}} Schnittstelle kopiert das kodierte Stück der Videodaten.

## Syntax

```js-nolint
copyTo(destination)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}}, in die die Daten kopiert werden können.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird ein {{domxref("EncodedVideoChunk")}} erstellt und anschließend kopiert.

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
