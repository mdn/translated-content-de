---
title: "AudioEncoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/AudioEncoder/isConfigSupported_static
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`isConfigSupported()`** der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle prüft, ob die angegebene Konfiguration unterstützt wird (d.h., ob [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Objekte erfolgreich mit der angegebenen Konfiguration eingerichtet werden können).

## Syntax

```js-nolint
AudioEncoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuchobjekt, das von [`AudioEncoder.configure`](/de/docs/Web/API/AudioEncoder/configure) akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein boolescher Wert, der `true` ist, wenn die angegebene Konfiguration vom Encoder unterstützt wird.
- `config`
  - : Eine Kopie der angegebenen Konfiguration mit allen vom Encoder erkannten Feldern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist; das heißt, wenn es keine erforderlichen Werte enthält (wie ein leeres `codec`-Feld) oder ungültige Werte hat (wie eine negative `sampleRate`).

## Beispiele

Das folgende Beispiel prüft, ob der Browser mehrere Audio-Codecs unterstützt.

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
  const support = await AudioEncoder.isConfigSupported(config);
  console.log(
    `AudioEncoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
