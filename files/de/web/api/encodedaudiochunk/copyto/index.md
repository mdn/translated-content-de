---
title: "EncodedAudioChunk: copyTo() Methode"
short-title: copyTo()
slug: Web/API/EncodedAudioChunk/copyTo
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`copyTo()`**-Methode des [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Interfaces kopiert den kodierten Chunk von Audiodaten.

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

Im folgenden Beispiel wird ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) erstellt und dann kopiert.

```js
const init = {
  type: "key",
  data: audioBuffer,
  timestamp: 23000000,
  duration: 2000000,
};
chunk = EncodedAudioChunk(init);

chunk.copyTo(newBuffer);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
