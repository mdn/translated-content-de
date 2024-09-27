---
title: "VideoDecoder: decode() Methode"
short-title: decode()
slug: Web/API/VideoDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Interfaces reiht eine Kontrollnachricht ein, um ein gegebenes Videostück zu dekodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekt, das ein Stück kodierten Videos repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) nicht `configured` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` nicht dekodiert werden kann, weil er für die Dekodierung auf andere Frames angewiesen ist.

## Beispiele

Das folgende Beispiel zeigt, wie die `decode()`-Methode verwendet wird, um [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte zu dekodieren, die aus kodierten Videodaten erstellt wurden.

```js
const responses = await downloadVideoChunksFromServer(timestamp);
for (const response of responses) {
  const chunk = new EncodedVideoChunk({
    timestamp: response.timestamp,
    type: response.key ? "key" : "delta",
    data: new Uint8Array(response.body),
  });
  decoder.decode(chunk);
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
