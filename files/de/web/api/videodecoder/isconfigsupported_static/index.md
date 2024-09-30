---
title: "VideoDecoder: isConfigSupported() statische Methode"
short-title: isConfigSupported()
slug: Web/API/VideoDecoder/isConfigSupported_static
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`isConfigSupported()`** statische Methode der [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Schnittstelle überprüft, ob die gegebene Konfiguration unterstützt wird (das heißt, ob [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)-Objekte erfolgreich mit der gegebenen Konfiguration konfiguriert werden können).

## Syntax

```js-nolint
VideoDecoder.isConfigSupported(config)
```

### Parameter

- `config`
  - : Das Wörterbuchobjekt, das von [`VideoDecoder.configure`](/de/docs/Web/API/VideoDecoder/configure) akzeptiert wird.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einem Objekt auflöst, das die folgenden Mitglieder enthält:

- `supported`
  - : Ein boolean-Wert, der `true` ist, wenn die gegebene Konfiguration vom Decoder unterstützt wird.
- `config`
  - : Eine Kopie der gegebenen Konfiguration mit allen Feldern, die vom Decoder erkannt werden.

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist; das heißt, wenn sie keine erforderlichen Werte hat (wie ein leeres `codec`-Feld) oder ungültige Werte hat (wie eine negative `codedWidth`).

## Beispiele

Das folgende Beispiel testet, ob der Browser beschleunigte und nicht beschleunigte Versionen mehrerer Videocodecs unterstützt.

```js
const codecs = ["avc1.42001E", "vp8", "vp09.00.10.08", "av01.0.04M.08"];
const accelerations = ["prefer-hardware", "prefer-software"];

const configs = [];
for (const codec of codecs) {
  for (const acceleration of accelerations) {
    configs.push({
      codec,
      hardwareAcceleration: acceleration,
      codedWidth: 1280,
      codedHeight: 720,
      not_supported_field: 123,
    });
  }
}

for (const config of configs) {
  const support = await VideoDecoder.isConfigSupported(config);
  console.log(
    `VideoDecoder's config ${JSON.stringify(support.config)} support: ${
      support.supported
    }`,
  );
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
