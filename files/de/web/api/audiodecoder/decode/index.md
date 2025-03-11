---
title: "AudioDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/AudioDecoder/decode
l10n:
  sourceCommit: d666d5ed812b56cbc9c6cba853494976da1f1dd2
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes Stück Audio zu decodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt, das ein Stück kodiertes Audio repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` aufgrund der Abhängigkeit von anderen Frames für die Dekodierung nicht dekodiert werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
