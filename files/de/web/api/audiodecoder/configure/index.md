---
title: "AudioDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/AudioDecoder/configure
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode des [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Interfaces stellt eine Steuerungsnachricht in die Warteschlange, um den Audiodecoder für das Dekodieren von Datenblöcken zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Strings.
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Abtastungen pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes, häufig als Extradata bekannt, enthält.

> [!NOTE]
> Die Einträge im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied zu befüllen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User-Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Im folgenden Beispiel wird der `audioDecoder` mit dem `opus`-Codec konfiguriert.

```js
audioDecoder.configure({
  codec: "opus",
  sampleRate: 44100,
  numberOfChannels: 2,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
