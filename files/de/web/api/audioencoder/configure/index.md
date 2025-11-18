---
title: "AudioEncoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode des [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Interfaces reiht eine Steuerungsnachricht ein, um den Audio-Encoder zum Kodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`
  - : Ein Dictionary-Objekt, das die folgenden Mitglieder enthält:
    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) enthält. Weitere Informationen zur Konstruktion des Codec-Strings finden Sie im ["codecs" Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Ein Integer, der die Anzahl der Framesamples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Ein Integer, der die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Ein Integer, der die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}
      - : Ein enumerierter Wert, der den Bitratenmodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:
        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder die gleiche Bitrate beibehält, unabhängig vom Audiogehalt. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch erwünscht ist.
        - `"variable"` (Voreinstellung)
          - : Erlaubt einem Audio-Encoder, seine Bitrate entsprechend dem Inhalt des zu kodierenden Audios zu erhöhen oder zu senken, um Bandbreite/Datenmenge zu sparen, während dennoch eine Zielqualität beibehalten wird. Beispielsweise könnte ein Encoder seine Bitrate senken, wenn er Stille kodiert, und auf eine volle Bitrate zurückgreifen, wenn er Sprache kodiert.

        Spezifische Codec-Encoder-Implementierungen können leicht unterschiedliche Begriffe verwenden (zum Beispiel, CBR vs VBR für Opus), sollten aber alle auf das allgemeine Konzept einer "konstanten" gegenüber einer "variablen" Bitrate abbilden.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen an, die spezifisch für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders spezifiziert. Mögliche Werte sind:
            - `audio` (Voreinstellung)
              - : Verarbeitet das Signal getreu dem ursprünglichen Eingang.
            - `lowdelay`
              - : Bei der Signalverarbeitung, minimale mögliche Kodierungsverzögerung konfigurieren, indem bestimmte Betriebsmodi deaktiviert werden.
            - `voip`
              - : Verarbeitet Signale zur Verbesserung der Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders definiert, basierend auf den in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschriebenen Aspekten. Der zulässige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben ist, ist der Standardwert plattformabhängig; die Spezifikation empfiehlt 5 für mobile Plattformen und 9 für alle anderen Plattformen.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format angibt, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Voreinstellung)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den kodierten Audio-Stream zu dekodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den kodierten Audio-Stream zu dekodieren. In diesem Fall werden die Metadaten des kodierten Audio-Streams in der Decoder-Konfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description)-Eigenschaft des Konfigurationsobjekts, das in [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Frame-Dauer in Mikrosekunden von `EncodedAudioChunk`s definiert, die der Encoder ausgibt. Wenn nicht angegeben, ist die `frameDuration` standardmäßig `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der zulässige Bereich ist 0 bis 100. Wenn nicht angegeben, ist `packetlossperc` standardmäßig `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für die Art des zu kodierenden Audiosignals angibt. Mögliche Werte sind:
            - `auto` (Voreinstellung)
              - : Das Audiosignal ist nicht spezifiziert, von einem bestimmten Typ zu sein.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Diskontinuierliche Übertragung (DTX) verwendet, die die Bitrate während Stille oder Hintergrundgeräuschen verringert. Wenn DTX aktiviert ist, wird nur ein Frame alle 400 Millisekunden kodiert. Wenn nicht angegeben, ist `usedtx` standardmäßig `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus in-band Forward Error Correction (FEC) bereitstellt. Dies führt dazu, dass Pakete, die als enthalten bedeutende Sprachinformation bestimmt werden — wie Anfänge oder Transienten — mit einer niedrigeren Bitrate erneut kodiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, ist `useinbandfec` standardmäßig `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

### Grundlegendes Konfigurationsbeispiel

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

### Beispiel für eine Opus-spezifische Konfiguration

Das folgende Beispiel erstellt einen neuen [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und konfiguriert ihn mit opusspezifischen Optionen.

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
