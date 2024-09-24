---
title: "AudioEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der {{domxref("AudioEncoder")}}-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für das Kodieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der eine [gültige Codec-Zeichenkette](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion von Codec-Zeichenketten.
    - `sampleRate`
      - : Eine ganze Zahl, die die Anzahl der Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine ganze Zahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine ganze Zahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein enumerierter Wert, der den Bitratenmodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:

        - `"constant"`
          - : Zwingt einen Audio-Encoder, dieselbe Bitrate beizubehalten, unabhängig vom Audioinhalt. Dies kann nützlich sein, wenn ein vorhersehbarer Bandbreitenverbrauch wünschenswert ist.
        - `"variable"` (Standardeinstellung)

          - : Ermöglicht einem Audio-Encoder, seine Bitrate gemäß dem Inhalt des Audios, das er kodiert, zu erhöhen oder zu senken, um Bandbreite/Binärgröße zu sparen, während ein Zielqualitätsniveau beibehalten wird. Beispielsweise könnte ein Encoder seine Bitrate reduzieren, wenn er Stille kodiert, und zu voller Bitrate zurückkehren, wenn er Sprache kodiert.

        Spezifische Codec-Encoder-Implementierungen können leicht unterschiedliche Terminologien verwenden (zum Beispiel CBR vs VBR für Opus), aber alle sollten dem allgemeinen Konzept von "konstanter" gegenüber "variabler" Bitrate entsprechen.

    - `opus` {{optional_inline}}
      - : Gibt Codec-Konfigurationsoptionen an, die speziell für den Opus-Codec sind. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders spezifiziert. Mögliche Werte sind:
            - `audio` (Standardeinstellung)
              - : Verarbeitet das Signal originalgetreu zum ursprünglichen Eingang.
            - `lowdelay`
              - : Konfiguriert die minimale mögliche Kodierungsverzögerung, indem bestimmte Betriebsmodi deaktiviert werden, wenn das Signal verarbeitet wird.
            - `voip`
              - : Verarbeitet das Signal für eine verbesserte Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders definiert, basierend auf den in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschriebenen Aspekten. Der gültige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben ist, ist der Standardwert plattformspezifisch, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format festlegt, in dem der Encoder {{domxref("EncodedAudioChunk")}}s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standardeinstellung)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den kodierten Audiostream zu dekodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. In diesem Fall sind keine Metadaten erforderlich, um den kodierten Audiostream zu dekodieren. In diesem Fall werden die Metadaten des kodierten Audiostreams in der Dekoderkonfiguration angegeben — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description)-Eigenschaft des in {{domxref("AudioDecoder.configure()")}} übergebenen Konfigurationsobjekts.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Bilddauer in Mikrosekunden für `EncodedAudioChunk`s definiert, die vom Encoder ausgegeben werden. Falls nicht angegeben, beträgt der Standardwert für `frameDuration` `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der gültige Bereich ist 0 bis 100. Falls nicht angegeben, beträgt der Standardwert für `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für den Typ des zu kodierenden Audiosignals spezifiziert. Mögliche Werte sind:
            - `auto` (Standardeinstellung)
              - : Das Audiosignal wird nicht als bestimmter Typ spezifiziert.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Discontinous Transmission (DTX) verwendet, wodurch die Bitrate während der Stille oder Hintergrundgeräusche reduziert wird. Wenn DTX aktiviert ist, wird nur alle 400 Millisekunden ein Frame kodiert. Falls nicht angegeben, beträgt der Standardwert für `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus-in-band Forward Error Correction (FEC) bereitstellt. Dies führt dazu, dass Pakete, die als wahrnehmbar wichtige Sprachinformationen enthalten gelten — wie Anfänge oder Transienten — mit einer niedrigeren Bitrate neu kodiert und einem nachfolgenden Paket hinzugefügt werden. Falls nicht angegeben, beträgt der Standardwert für `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` ungültig ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der {{domxref("AudioEncoder.state","state")}} `"closed"` ist.
- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn das bereitgestellte `config` gültig ist, der Benutzeragent jedoch keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

## Beispiele

### Grundlegendes Konfigurationsbeispiel

Das folgende Beispiel erstellt einen neuen {{domxref("AudioEncoder")}} und konfiguriert ihn mit einigen der verfügbaren Optionen.

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

Das folgende Beispiel erstellt einen neuen {{domxref("AudioEncoder")}} und konfiguriert ihn mit Opus-spezifischen Optionen.

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
