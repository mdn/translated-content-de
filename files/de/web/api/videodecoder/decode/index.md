---
title: "VideoDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/VideoDecoder/decode
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der {{domxref("VideoDecoder")}}-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um einen gegebenen Videodatenblock zu dekodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein {{domxref("EncodedVideoChunk")}}-Objekt, das einen kodierten Videodatenblock darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("VideoDecoder.state","state")}} nicht `configured` ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `chunk` nicht dekodiert werden kann, weil er zum Dekodieren auf andere Frames angewiesen ist.

## Beispiele

Das folgende Beispiel zeigt, wie die `decode()`-Methode verwendet wird, um {{domxref("EncodedVideoChunk")}}-Objekte, die aus kodierten Videodaten erstellt wurden, zu dekodieren.

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
