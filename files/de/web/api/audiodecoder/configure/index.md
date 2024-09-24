---
title: "AudioDecoder: configure()-Methode"
short-title: configure()
slug: Web/API/AudioDecoder/configure
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der {{domxref("AudioDecoder")}}-Schnittstelle stellt eine Kontrollnachricht in die Warteschlange, um den Audio-Decoder für das Dekodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuch-Objekt, das die folgenden Elemente enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Einzelheiten zum Aufbau des Codec-Strings finden Sie im Abschnitt ["Codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `description` {{optional_inline}}
      - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der eine Sequenz von codecspezifischen Bytes enthält, die allgemein als Extradata bekannt sind.

> [!NOTE]
> Die Einträge im [WebCodecs Codec Registry](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) verweisen auf eine Spezifikation, die beschreibt, ob und wie das optionale `description`-Element gefüllt wird.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("AudioDecoder.state","state")}} `"closed"` ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
