---
title: "AudioEncoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) Schnittstelle reiht eine Steuerungsnachricht ein, um den Audio-Encoder für die Codierung von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) enthält. Weitere Informationen zur Erstellung von Codec-Strings finden Sie im ["Codecs" Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine Ganzzahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}
      - : Ein aufgezählter Wert, der den Bitratenmodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:
        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder dieselbe Bitrate beibehält, unabhängig vom Audiocontent. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch bevorzugt wird.
        - `"variable"` (default)
          - : Ermöglicht es einem Audio-Encoder, seine Bitrate entsprechend dem zu codierenden Audiocontent zu erhöhen oder zu senken, um Bandbreite/Binärgröße zu sparen und dennoch eine Zielqualität beizubehalten. Beispielsweise könnte ein Encoder seine Bitrate senken, wenn er Stille codiert, und sie wieder auf eine volle Bitrate zurücksetzen, wenn Sprache codiert wird.

        Spezifische Code-Encoder-Implementierungen können leicht unterschiedliche Terminologie verwenden (zum Beispiel CBR vs VBR für Opus), sollten jedoch alle den allgemeinen Konzepten "constant" versus "variable" Bitrate zugeordnet werden.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen spezifisch für den Opus-Codec an. Der Wert ist ein `OpusEncoderConfig` Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein aufgezählter Wert, der den beabsichtigten Anwendungstyp des Encoders angibt. Mögliche Werte sind:
            - `audio` (default)
              - : Verarbeitet das Signal originalgetreu zum ursprünglichen Eingangssignal.
            - `lowdelay`
              - : Konfiguriert beim Verarbeiten des Signals die minimale mögliche Kodierungsverzögerung durch Deaktivieren bestimmter Betriebsmodi.
            - `voip`
              - : Verarbeitet das Signal für verbesserte Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders basierend auf den in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/info/rfc6716/#section-2.1.5) beschriebenen Aspekten definiert. Der gültige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben ist, ist der Standardwert plattformabhängig, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein aufgezählter Wert, der das Format angibt, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (default)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu decodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu decodieren. In diesem Fall werden die Metadaten des codierten Audiostreams in der Dekoderkonfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description) Eigenschaft des in [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergebenen Config-Objekts.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Frame-Dauer in Mikrosekunden von `EncodedAudioChunk`s definiert, die vom Encoder ausgegeben werden. Wenn nicht angegeben, ist die Standarddauer für `frameDuration` `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders angibt. Der gültige Bereich ist 0 bis 100. Wenn nicht angegeben, beträgt der Standardwert für `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein aufgezählter Wert, der den Standardwert für den zu codierenden Audiosignaltyp angibt. Mögliche Werte sind:
            - `auto` (default)
              - : Das Audiosignal wird nicht als ein bestimmter Typ spezifiziert.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder diskontinuierliche Übertragung (Discontinuous Transmission, DTX) verwendet, die die Bitrate während Stille oder Hintergrundrauschens reduziert. Wenn DTX aktiviert ist, wird nur ein Frame alle 400 Millisekunden codiert. Wenn nicht angegeben, ist der Standardwert für `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus-in-band-Fehlerkorrektur (Forward Error Correction, FEC) bietet. Dies führt zu Paketen, die als perceptuell wichtige Sprachinformation — wie Einsetze oder Transienten — betrachtet werden, die bei einer niedrigeren Bitrate neu codiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, ist der Standardwert für `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil decodieren kann.

## Beispiele

### Einfaches Konfigurationsbeispiel

Das folgende Beispiel erstellt einen neuen [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und konfiguriert ihn mit einigen der verfügbaren Optionen.

```js
const init = {
  output: handleOutput,
  error(e) {
    console.log(e.message);
  },
};

let config = {
  codec: "mp3",
  sampleRate: 44100,
  numberOfChannels: 2,
  bitrate: 128_000, // 128 kbps
  bitrateMode: "constant",
};

let encoder = new AudioEncoder(init);
encoder.configure(config);
```

### Opus-spezifisches Konfigurationsbeispiel

Das folgende Beispiel erstellt einen neuen [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und konfiguriert ihn mit Opus-spezifischen Optionen.

```js
const init = {
  output: handleOutput,
  error(e) {
    console.log(e.message);
  },
};

let opusConfig = {
  application: "voip",
  complexity: 9,
  signal: "voice",
  usedtx: true,
};

let config = {
  codec: "opus",
  sampleRate: 44100,
  numberOfChannels: 2,
  bitrate: 128_000,
  opus: opusConfig,
};

let encoder = new AudioEncoder(init);
encoder.configure(config);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
