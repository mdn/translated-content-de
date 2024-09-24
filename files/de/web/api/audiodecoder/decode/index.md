---
title: "AudioDecoder: decode()-Methode"
short-title: decode()
slug: Web/API/AudioDecoder/decode
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`decode()`**-Methode der {{domxref("AudioDecoder")}}-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um ein gegebenes Audio-Stück zu decodieren.

## Syntax

```js-nolint
decode(chunk)
```

### Parameter

- `chunk`
  - : Ein {{domxref("EncodedAudioChunk")}}-Objekt, das ein kodiertes Audio-Stück darstellt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("AudioDecoder.state","state")}} nicht `"configured"` ist.
- `DataError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das `chunk` aufgrund der Abhängigkeit von anderen Frames zur Decodierung nicht decodiert werden kann.

## Beispiele

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
