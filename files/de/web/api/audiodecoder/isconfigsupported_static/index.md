---
title: "AudioDecoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/AudioDecoder/isConfigSupported_static
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`isConfigSupported()`** statische Methode der {{domxref("AudioDecoder")}}-Schnittstelle prüft, ob die angegebene Konfiguration unterstützt wird (d.h. ob {{domxref("AudioDecoder")}}-Objekte erfolgreich mit der gegebenen Konfiguration konfiguriert werden können).

## Syntax

```js-nolint
AudioDecoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuchobjekt, das von {{domxref("AudioDecoder.configure")}} akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein boolescher Wert, der `true` ist, wenn die gegebene Konfiguration vom Decoder unterstützt wird.
- `config`
  - : Eine Kopie der gegebenen Konfiguration mit allen vom Decoder erkannten Feldern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist; das heißt, wenn es keine erforderlichen Werte hat (wie ein leeres `codec`-Feld) oder ungültige Werte hat (zum Beispiel eine negative `sampleRate`).

## Beispiele

Das folgende Beispiel testet, ob der Browser verschiedene Audio-Codecs unterstützt.

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
