---
title: "AudioDecoder: decode() Methode"
short-title: decode()
slug: Web/API/AudioDecoder/decode
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode des [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interfaces reihen eine Steuerungsnachricht ein, um einen gegebenen Audio-Chunk zu decodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt, das einen codierten Audio-Chunk darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) nicht `"configured"` ist.
- `DataError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `chunk` aufgrund von Abhängigkeiten von anderen Frames nicht decodiert werden kann.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
