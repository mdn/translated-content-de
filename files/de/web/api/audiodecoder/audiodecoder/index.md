---
title: "AudioDecoder: AudioDecoder() Konstruktor"
short-title: AudioDecoder()
slug: Web/API/AudioDecoder/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioDecoder()`** Konstruktor erstellt ein neues {{domxref("AudioDecoder")}} Objekt mit dem bereitgestellten `init.output` Rückruf als zugewiesenem Ausgaberückruf, dem bereitgestellten `init.error` Rückruf als Fehler-Rückruf und dem {{domxref("AudioDecoder.state")}} auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new AudioDecoder(init)
```

### Parameter

- `init`
  - : Ein Wörterbuchobjekt, das zwei erforderliche Rückrufe enthält.
    - `output`
      - : Ein Rückruf, dem ein einzelnes Argument eines {{domxref("AudioData")}} Objekts übergeben wird.
    - `error`
      - : Ein Rückruf, dem ein einzelnes Argument des aufgetretenen Fehlers übergeben wird.

## Beispiele

Im folgenden Beispiel wird ein `AudioDecoder` mit den zwei erforderlichen Rückruffunktionen erstellt, einer zur Verarbeitung des decodierten Abschnitts und einer zur Fehlerbehandlung.

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
