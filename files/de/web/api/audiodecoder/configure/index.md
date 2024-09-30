---
title: "AudioDecoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioDecoder/configure
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Audiodecoder für das Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuch-Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs" Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Strings.
    - `sampleRate`
      - : Eine ganze Zahl, die die Anzahl der Rahmenproben pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine ganze Zahl, die die Anzahl der Audiokanäle darstellt.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codecspezifischen Bytes enthält, allgemein bekannt als extradata.

> [!NOTE]
> Die Registrierung in der [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweist auf eine Spezifikation, die festlegt, ob und wie das optionale `description`-Element ausgefüllt werden muss.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das angegebene `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioDecoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das angegebene `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

Das folgende Beispiel konfiguriert den `audioDecoder` mit dem `opus` Codec.

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
