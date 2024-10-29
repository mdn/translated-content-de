---
title: "VideoEncoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/VideoEncoder/isConfigSupported_static
l10n:
  sourceCommit: 21b6abb0fae5d6df0fef94506995a781e3f5d49f
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die statische Methode **`isConfigSupported()`** der [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Schnittstelle prüft, ob [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) erfolgreich mit der angegebenen Konfiguration konfiguriert werden kann.

## Syntax

```js-nolint
VideoEncoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuch-Objekt, das von [`VideoEncoder.configure`](/de/docs/Web/API/VideoEncoder/configure) akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem Objekt aufgelöst wird, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein boolescher Wert, der `true` ist, wenn die angegebene Konfiguration vom Encoder unterstützt wird.
- `config`
  - : Eine Kopie der angegebenen Konfiguration mit allen vom Encoder erkannten Feldern.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Ausgelöst, wenn die bereitgestellte `config` ungültig ist; das heißt, wenn erforderliche Werte fehlen (wie ein leeres `codec`-Feld) oder ungültige Werte vorhanden sind (wie eine negative `width`).

## Beispiele

Das folgende Beispiel testet, ob der Browser beschleunigte und nicht-beschleunigte
Versionen mehrerer Videocodecs unterstützt.

```js
const codecs = [
  "avc1.420034",
  "hvc1.1.6.L123.00",
  "vp8",
  "vp09.00.10.08",
  "av01.0.04M.08",
];
const accelerations = ["prefer-hardware", "prefer-software"];

const configs = [];
for (const codec of codecs) {
  for (const acceleration of accelerations) {
    configs.push({
      codec,
      hardwareAcceleration: acceleration,
      width: 1280,
      height: 720,
      bitrate: 2_000_000,
      bitrateMode: "constant",
      framerate: 30,
      not_supported_field: 123,
    });
  }
}

for (const config of configs) {
  const support = await VideoEncoder.isConfigSupported(config);
  console.log(
    `VideoEncoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
