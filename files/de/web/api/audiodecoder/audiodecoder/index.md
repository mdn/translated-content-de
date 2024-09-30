---
title: "AudioDecoder: AudioDecoder() Konstruktor"
short-title: AudioDecoder()
slug: Web/API/AudioDecoder/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioDecoder()`** Konstruktor erstellt ein neues [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Objekt mit dem bereitgestellten `init.output` Rückruf als Ausgabe-Rückruf, dem bereitgestellten `init.error` Rückruf als Fehler-Rückruf und dem [`AudioDecoder.state`](/de/docs/Web/API/AudioDecoder/state) auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new AudioDecoder(init)
```

### Parameter

- `init`
  - : Ein Wörterbuchobjekt, das zwei erforderliche Rückrufe enthält.
    - `output`
      - : Ein Rückruf, der mit einem einzelnen Argument eines [`AudioData`](/de/docs/Web/API/AudioData)-Objekts aufgerufen wird.
    - `error`
      - : Ein Rückruf, der mit einem einzelnen Argument des aufgetretenen Fehlers aufgerufen wird.

## Beispiele

Im folgenden Beispiel wird ein `AudioDecoder` mit den beiden erforderlichen Rückruffunktionen erstellt, einer zum Verarbeiten des dekodierten Chunks und der anderen zur Fehlerbehandlung.

```js
const audioDecoder = new AudioDecoder({
  output: processAudio,
  error: onEncoderError,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
