---
title: "AudioEncoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode des [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Interfaces stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für die Kodierung von Datenblöcken zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe [„codecs“-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container) für Details zur Erstellung von Codec-Strings.
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine Ganzzahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein enumerierter Wert, der das Bitratenmodus bestimmt, das der Encoder verwenden sollte. Mögliche Werte sind:

        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder die gleiche Bitrate beibehält, unabhängig vom Audiomaterial. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch bevorzugt wird.
        - `"variable"` (Standard)

          - : Erlaubt einem Audio-Encoder, seine Bitrate entsprechend dem Inhalt des zu kodierenden Audios zu erhöhen oder zu senken, um die Bandbreite/Binärgröße zu erhalten und gleichzeitig eine Zielqualität aufrechtzuerhalten. Beispielsweise könnte ein Encoder seine Bitrate senken, wenn er Stille kodiert, und zur vollen Bitrate zurückkehren, wenn er Sprache kodiert.

        Spezifische Codec-Encoder-Implementierungen können leicht unterschiedliche Terminologien verwenden (z. B. CBR vs. VBR für Opus), sollten jedoch alle dem allgemeinen Konzept der „konstanten“ gegenüber „variablen“ Bitrate entsprechen.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen an, die spezifisch für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders angibt. Mögliche Werte sind:
            - `audio` (Standard)
              - : Verarbeitet das Signal getreu dem ursprünglichen Eingang.
            - `lowdelay`
              - : Reduziert die mögliche Kodierungsverzögerung durch Deaktivieren bestimmter Betriebsmodi minimal.
            - `voip`
              - : Verarbeitet das Signal für eine verbesserte Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders definiert, basierend auf den in Abschnitt [RFC6716, 2.1.5. — Komplexität](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschriebenen Aspekten. Der gültige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben ist, ist der Standardwert plattformspezifisch, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format angibt, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standard)
              - : Ausgabe der `EncodedAudioChunk`s im Opus-Format. In diesem Fall sind keine Metadaten erforderlich, um den kodierten Audiostream zu dekodieren.
            - `ogg`
              - : Ausgabe der `EncodedAudioChunk`s im Ogg-Format. In diesem Fall werden die Metadaten des kodierten Audiostreams in der Decoder-Konfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description) Eigenschaft des Konfigurationsobjekts, das in [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Bilddauer in Mikrosekunden der vom Encoder ausgegebenen `EncodedAudioChunk`s definiert. Wenn nicht angegeben, beträgt `frameDuration` standardmäßig `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der gültige Bereich ist 0 bis 100. Wenn nicht angegeben, beträgt `packetlossperc` standardmäßig `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für die Art des kodierten Audiosignals angibt. Mögliche Werte sind:
            - `auto` (Standard)
              - : Das Audiosignal ist nicht als von einem bestimmten Typ spezifiziert.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein wahrheitswertiger Wert, der angibt, ob der Encoder die unterbrochene Übertragung (Discontinuous Transmission, DTX) verwendet, die die Bitrate während Stille oder Hintergrundgeräuschen reduziert. Wenn DTX aktiviert ist, wird nur ein Frame alle 400 Millisekunden kodiert. Wenn nicht angegeben, beträgt `usedtx` standardmäßig `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein wahrheitswertiger Wert, der angibt, ob der Encoder Opus In-Band-Fehlerkorrektur (FEC) bereitstellt. Dies führt dazu, dass Pakete, die als wichtig für die Sprachwahrnehmung angesehen werden — wie Anfänge oder Übergänge — mit einer niedrigeren Bitrate erneut kodiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, beträgt `useinbandfec` standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der User-Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
