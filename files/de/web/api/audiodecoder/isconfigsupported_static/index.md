---
title: "AudioDecoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/AudioDecoder/isConfigSupported_static
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`isConfigSupported()`** statische Methode der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Schnittstelle überprüft, ob die angegebene Konfiguration unterstützt wird (das heißt, ob [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) Objekte erfolgreich mit der angegebenen Konfiguration konfiguriert werden können).

## Syntax

```js-nolint
AudioDecoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuch-Objekt, das von [`AudioDecoder.configure`](/de/docs/Web/API/AudioDecoder/configure) akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein boolescher Wert, der `true` ist, wenn die angegebene Konfiguration vom Decoder unterstützt wird.
- `config`
  - : Eine Kopie der angegebenen Konfiguration mit allen vom Decoder erkannten Feldern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist; das heißt, wenn erforderliche Werte fehlen (wie ein leeres `codec`-Feld) oder ungültige Werte (wie eine negative `sampleRate`) enthalten sind.

## Beispiele

Das folgende Beispiel testet, ob der Browser mehrere Audio-Codecs unterstützt.

```js
const codecs = ["mp4a.40.2", "mp3", "alaw", "ulaw"];
const configs = [];
for (const codec of codecs) {
  configs.push({
    codec,
    sampleRate: 48000,
    numberOfChannels: 1,
    not_supported_field: 123,
  });
}
for (const config of configs) {
  const support = await AudioDecoder.isConfigSupported(config);
  console.log(
    `AudioDecoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
