---
title: "AudioEncoder: configure() Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`** Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für die Codierung von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Dictionary-Objekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) enthält. Weitere Informationen zur Codec-String-Konstruktion finden Sie im Abschnitt ["codecs"-Parameter](/de/docs/Web/Media/Guides/Formats/codecs_parameter#codec_options_by_container).
    - `sampleRate`
      - : Eine Ganzzahl, die die Anzahl der Framerates pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine Ganzzahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine Ganzzahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein Enumerated Value, das den Bitratemodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:

        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder eine konstante Bitrate aufrechterhält, unabhängig vom Audioinhalt. Dies kann nützlich sein, wenn vorhersehbarer Bandbreitenverbrauch bevorzugt wird.
        - `"variable"` (Standard)

          - : Ermöglicht es einem Audio-Encoder, seine Bitrate je nach Inhalt des zu codierenden Audios zu erhöhen oder zu senken, um Bandbreite/Binärgröße zu sparen und gleichzeitig eine Zielqualität beizubehalten. Beispielsweise könnte ein Encoder seine Bitrate senken, wenn er Stille kodiert, und bei der Kodierung von Sprache wieder auf eine vollständige Bitrate zurückkehren.

        Spezifische Implementierungen von Codec-Encodern könnten leicht unterschiedliche Terminologien verwenden (zum Beispiel CBR vs VBR für Opus), sollten aber alle auf das allgemeine Konzept von "konstanter" gegenüber "variabler" Bitrate abbilden.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen an, die speziell für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein Enumerated Value, der den beabsichtigten Anwendungstyp des Encoders spezifiziert. Mögliche Werte sind:
            - `audio` (Standard)
              - : Verarbeitet das Signal originalgetreu zum Eingangssignal.
            - `lowdelay`
              - : Konfiguriert beim Verarbeiten des Signals die minimale mögliche Kodierungsverzögerung durch Deaktivierung bestimmter Betriebsmodi.
            - `voip`
              - : Verarbeitet das Signal für eine verbesserte Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, welche die rechnerische Komplexität des Encoders definiert, basierend auf den Aspekten, die in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschrieben sind. Der gültige Bereich reicht von 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben wird, ist der Standardwert plattformabhängig, wobei die Spezifikation empfiehlt, für mobile Plattformen 5 und für alle anderen Plattformen 9 zu verwenden.
        - `format` {{optional_inline}}
          - : Ein Enumerated Value, der das Format spezifiziert, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standard)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu decodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den codierten Audiostream zu decodieren. In diesem Fall werden die Metadaten des codierten Audiostreams in der Decoder-Konfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description)-Eigenschaft des Config-Objekts, das an [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Framedauer in Mikrosekunden definiert, die von dem Encoder ausgegebenen `EncodedAudioChunk`s entspricht. Wenn nicht angegeben, beträgt der Standardwert für `frameDuration` `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der gültige Bereich reicht von 0 bis 100. Wenn nicht angegeben, beträgt der Standardwert für `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein Enumerated Value, der den Standardwert für die Art des zu kodierenden Audiosignals spezifiziert. Mögliche Werte sind:
            - `auto` (Standard)
              - : Das Audiosignal wird nicht als eine bestimmte Art angegeben.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Discontinuous Transmission (DTX), welches die Bitrate während Stille oder Hintergrundrauschen verringert, verwendet. Wenn DTX aktiviert ist, wird nur alle 400 Millisekunden ein Frame kodiert. Wenn nicht angegeben, beträgt der Standardwert für `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus In-Band Forward Error Correction (FEC) bereitstellt. Dies führt zu Paketen, die als besonders wichtige Sprachinformationen enthalten werden — wie Anfänge oder Übergänge —, um mit geringerer Bitrate neu kodiert und zu einem nachfolgenden Paket hinzugefügt zu werden. Wenn nicht angegeben, beträgt der Standardwert für `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil decodieren kann.

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
