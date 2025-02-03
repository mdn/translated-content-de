---
title: "AudioEncoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 27bceead8e9b1fe9c92df0fa5e418f81bd5b9fdf
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) Schnittstelle platziert eine Steuerungsnachricht, um den Audio-Encoder zur Codierung von Teilen zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der eine [gültige Codec-Zeichenfolge](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Details zur Konstruktion der Codec-Zeichenfolge finden Sie im Abschnitt ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Eine ganze Zahl, die die Anzahl der Rahmproben pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine ganze Zahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine ganze Zahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein enumerierter Wert, der den Bitratenmodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:

        - `"constant"`
          - : Zwingt einen Audio-Encoder dazu, dieselbe Bitrate beizubehalten, unabhängig vom Audioinhalt. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch wünschenswert ist.
        - `"variable"` (Standard)

          - : Ermöglicht einem Audio-Encoder, seine Bitrate je nach Inhalt des zu codierenden Audios zu erhöhen oder zu verringern, um Bandbreite/Größe zu sparen, während dennoch eine Zielqualität beibehalten wird. Beispielsweise könnte ein Encoder seine Bitrate beim Codieren von Stille senken und zur vollen Bitrate zurückkehren, wenn Sprache codiert wird.

        Bestimmte Codec-Encoder-Implementierungen können leicht unterschiedliche Terminologie verwenden (zum Beispiel CBR vs VBR für Opus), aber sie sollten alle dem allgemeinen Konzept von "konstanter" gegen "variabler" Bitrate entsprechen.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen an, die spezifisch für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig` Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders spezifiziert. Mögliche Werte sind:
            - `audio` (Standard)
              - : Verarbeitet das Signal getreu dem ursprünglichen Eingang.
            - `lowdelay`
              - : Konfiguriert bei der Signalverarbeitung die minimal mögliche Codierungsverzögerung durch Deaktivieren bestimmter Betriebsmodi.
            - `voip`
              - : Verarbeitet Signal zur Verbesserung der Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders basierend auf den in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschriebenen Aspekten definiert. Der gültige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben wird, ist der Standardwert plattformspezifisch, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format angibt, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standard)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu dekodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu dekodieren. In diesem Fall werden die Metadaten des codierten Audiostreams in der Decoder-Konfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description) Eigenschaft des Konfigurationsobjekts, das in [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Rahmendauer in Mikrosekunden von durch den Encoder ausgegebenen `EncodedAudioChunk`s definiert. Wenn nicht angegeben, liegt der Standardwert von `frameDuration` bei `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der gültige Bereich ist 0 bis 100. Wenn nicht angegeben, ist der Standardwert von `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für den zu codierenden Audiosignaltyp angibt. Mögliche Werte sind:
            - `auto` (Standard)
              - : Das Audiosignal ist nicht als bestimmter Typ spezifiziert.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Diskontinuierliche Übertragung (DTX) verwendet, die die Bitrate während Stille oder Hintergrundgeräuschen reduziert. Wenn DTX aktiviert ist, wird nur alle 400 Millisekunden ein Rahmen codiert. Wenn nicht angegeben, ist der Standardwert von `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus-In-Band-Vorwärtsfehlerkorrektur (FEC) bereitstellt. Dies führt dazu, dass Pakete, von denen festgestellt wird, dass sie wahrnehmbar wichtige Sprachinformationen enthalten — wie Einsätze oder Transienten — mit einer niedrigeren Bitrate neu codiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, ist der Standardwert von `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

### Einfaches Konfigurationsbeispiel

Das folgende Beispiel erstellt einen neuen [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und konfiguriert ihn mit einigen der verfügbaren Optionen.

```js
const init = {
  output: handleOutput,
  error: (e) => {
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
  error: (e) => {
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
