---
title: "AudioEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für die Codierung von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion des Codec-Strings.
    - `sampleRate`
      - : Ein Integer, der die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Ein Integer, der die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Ein Integer, der die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein enumerierter Wert, der den Bitratemodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:

        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder die gleiche Bitrate beibehält, unabhängig vom Audiocontent. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch bevorzugt wird.
        - `"variable"` (Standard)

          - : Erlaubt einem Audio-Encoder, seine Bitrate je nach Inhalt des zu codierenden Audios zu erhöhen oder zu senken, um Bandbreite/Binärgröße zu sparen und dennoch eine Zielqualität beizubehalten. Beispielsweise könnte ein Encoder seine Bitrate senken, wenn Stille codiert wird, und zu einer vollen Bitrate zurückkehren, wenn Sprache codiert wird.

        Spezifische Codec-Encoder-Implementierungen können leicht unterschiedliche Terminologien verwenden (zum Beispiel CBR vs VBR für Opus), sollten aber alle dem allgemeinen Konzept von "konstanter" versus "variabler" Bitrate entsprechen.

    - `opus` {{optional_inline}}
      - : Spezifiziert Codec-Konfigurationsoptionen, die spezifisch für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders bestimmt. Mögliche Werte sind:
            - `audio` (Standard)
              - : Verarbeitet das Signal originalgetreu zum ursprünglichen Eingangs.
            - `lowdelay`
              - : Konfiguriert eine minimale mögliche Kodierungsverzögerung, indem bestimmte Betriebsarten deaktiviert werden, während das Signal verarbeitet wird.
            - `voip`
              - : Verarbeitet das Signal zur Verbesserung der Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders definiert, basierend auf den Aspekten, die in Abschnitt [RFC6716, 2.1.5. — Komplexität](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschrieben sind. Der gültige Bereich reicht von 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben wird, ist der Standardwert plattformabhängig, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format spezifiziert, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standard)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten notwendig, um den codierten Audiostream zu decodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten notwendig, um den codierten Audiostream zu decodieren. In diesem Fall werden die Metadaten des codierten Audiostreams in der Dekoderkonfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description) Eigenschaft des Konfigurationsobjekts, das an [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Rahmendauer in Mikrosekunden der `EncodedAudioChunk`s definiert, die vom Encoder ausgegeben werden. Wenn nicht angegeben, beträgt der Standardwert für `frameDuration` `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustrate des Encoders definiert. Der gültige Bereich liegt zwischen 0 und 100. Wenn nicht angegeben, beträgt der Standardwert für `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für die Art des zu codierenden Audiosignals festlegt. Mögliche Werte sind:
            - `auto` (Standard)
              - : Das Audiosignal ist nicht als eine bestimmte Art spezifiziert.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Diskontinuierliche Übertragung (DTX) verwendet, die die Bitrate während Stille oder Hintergrundgeräuschen reduziert. Wenn DTX aktiviert ist, wird nur ein Frame alle 400 Millisekunden codiert. Wenn nicht angegeben, lautet der Standardwert für `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus In-Band Error Correction (FEC) bereitstellt. Dies führt dazu, dass Pakete, die als wahrnehmbar wichtige Sprachinformationen enthalten (wie zum Beispiel Anstiege oder Transienten), mit einer niedrigeren Bitrate re-kodiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, lautet der Standardwert für `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, jedoch der User-Agent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

### Grundlegendes Konfigurationsbeispiel

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
