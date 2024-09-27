---
title: "AudioDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/AudioDecoder/decode
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle stellt eine Kontrollnachricht in die Warteschlange, um ein gegebenes Audiosegment zu decodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt, das ein codiertes Audiosegment repräsentiert.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` nicht decodiert werden kann, da er zum Decodieren auf andere Frames angewiesen ist.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
