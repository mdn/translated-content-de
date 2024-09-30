---
title: "VideoDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/VideoDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`** Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes Videostück zu dekodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekt, das ein Stück kodiertes Video darstellt.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/VideoDecoder/state) nicht `configured` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` aufgrund von Abhängigkeiten zu anderen Frames nicht dekodiert werden kann.

## Beispiele

Das folgende Beispiel zeigt, wie Sie die `decode()`-Methode verwenden, um [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte zu dekodieren, die aus kodierten Videodaten erstellt wurden.

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
