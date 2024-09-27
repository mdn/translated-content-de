---
title: "AudioDecoder: AudioDecoder()-Konstruktor"
short-title: AudioDecoder()
slug: Web/API/AudioDecoder/AudioDecoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioDecoder()`**-Konstruktor erstellt ein neues [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Objekt mit dem bereitgestellten `init.output`-Callback als Ausgabe-Callback, dem bereitgestellten `init.error`-Callback als Fehler-Callback und setzt den [`AudioDecoder.state`](/de/docs/Web/API/AudioDecoder/state) auf `"unconfigured"`.

## Syntax

```js-nolint
new AudioDecoder(init)
```

### Parameter

- `init`
  - : Ein Wörterbuchobjekt, das zwei erforderliche Callbacks enthält.
    - `output`
      - : Ein Callback, dem ein einzelnes Argument eines [`AudioData`](/de/docs/Web/API/AudioData)-Objekts übergeben wird.
    - `error`
      - : Ein Callback, dem ein einzelnes Argument des ausgelösten Fehlers übergeben wird.

## Beispiele

Im folgenden Beispiel wird ein `AudioDecoder` mit den zwei erforderlichen Callback-Funktionen erstellt: eine zum Verarbeiten des dekodierten Chunks und eine zum Bearbeiten von Fehlern.

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
