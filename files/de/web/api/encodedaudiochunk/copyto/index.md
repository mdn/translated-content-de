---
title: "EncodedAudioChunk: Methode copyTo()"
short-title: copyTo()
slug: Web/API/EncodedAudioChunk/copyTo
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces kopiert den kodierten Audio-Datenblock.

## Syntax

```js-nolint
copyTo(destination)
```

### Parameter

- `destination`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, in das die Daten kopiert werden können.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Im folgenden Beispiel wird ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) erstellt und dann kopiert.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
const chunk = new EncodedAudioChunk(init);

chunk.copyTo(newBuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
