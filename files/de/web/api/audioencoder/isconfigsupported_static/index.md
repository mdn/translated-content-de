---
title: "AudioEncoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/AudioEncoder/isConfigSupported_static
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`isConfigSupported()`** statische Methode der {{domxref("AudioEncoder")}} Schnittstelle überprüft, ob die gegebene Konfiguration unterstützt wird (d. h., ob {{domxref("AudioEncoder")}} Objekte erfolgreich mit der gegebenen Konfiguration konfiguriert werden können).

## Syntax

```js-nolint
AudioEncoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuchobjekt, das von {{domxref("AudioEncoder.configure")}} akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein booleanischer Wert, der `true` ist, wenn die gegebene Konfiguration vom Encoder unterstützt wird.
- `config`
  - : Eine Kopie der gegebenen Konfiguration mit allen vom Encoder erkannten Feldern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist; das heißt, wenn erforderliche Werte fehlen (wie ein leeres `codec`-Feld) oder ungültige Werte (wie eine negative `sampleRate`) vorhanden sind.

## Beispiele

Das folgende Beispiel testet, ob der Browser mehrere Audiocodecs unterstützt.

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
