---
title: "AudioDecoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioDecoder/configure
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle reiht eine Steuerungsnachricht ein, um den Audiodecoder zum Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String mit einem [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry). Einzelheiten zur Erstellung von Codec-Strings finden Sie im ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codec-spezifischen Bytes enthält, die häufig als Extradata bekannt sind.

> [!NOTE]
> Die Registrierungen im [WebCodecs Codec Registry](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Mitglied zu füllen ist.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel konfiguriert den `audioDecoder` mit dem `opus`-Codec.

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
