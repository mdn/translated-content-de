---
title: "AudioEncoder: configure()-Methode"
short-title: configure()
slug: Web/API/AudioEncoder/configure
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`configure()`**-Methode der [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Schnittstelle stellt eine Steuerungsnachricht in die Warteschlange, um den Audio-Encoder für das Codieren von Chunks zu konfigurieren.

## Syntax

```js-nolint
configure(config)
```

### Parameter

- `config`

  - : Ein Wörterbuchobjekt, das die folgenden Mitglieder enthält:

    - `codec`
      - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält. Siehe ["Codecs"-Parameter](/de/docs/Web/Media/Formats/codecs_parameter#codec_options_by_container) für Details zur Konstruktion des Codec-Strings.
    - `sampleRate`
      - : Eine ganze Zahl, die die Anzahl der Frame-Samples pro Sekunde darstellt.
    - `numberOfChannels`
      - : Eine ganze Zahl, die die Anzahl der Audiokanäle darstellt.
    - `bitrate` {{optional_inline}}
      - : Eine ganze Zahl, die die Bitrate darstellt.
    - `bitrateMode` {{optional_inline}}

      - : Ein enumerierter Wert, der den Bitratenmodus definiert, den der Encoder verwenden soll. Mögliche Werte sind:

        - `"constant"`
          - : Erzwingt, dass ein Audio-Encoder die gleiche Bitrate beibehält, unabhängig vom Audioinhalt. Dies kann nützlich sein, wenn vorhersehbarer Bandbreitenverbrauch vorzuziehen ist.
        - `"variable"` (Standard)

          - : Ermöglicht es einem Audio-Encoder, seine Bitrate je nach Inhalt des zu codierenden Audios zu erhöhen oder zu senken, um Bandbreite/Dateigröße zu sparen, während dennoch eine Zielqualität beibehalten wird. Beispielsweise könnte ein Encoder seine Bitrate beim Codieren von Stille senken und beim Codieren von Sprache auf eine volle Bitrate zurücksetzen.

        Spezifische Implementierungen von Codec-Encodern können leicht unterschiedliche Terminologien verwenden (zum Beispiel CBR vs. VBR für Opus), aber sie sollten alle auf das allgemeine Konzept von "konstanter" versus "variabler" Bitrate verweisen.

    - `opus` {{optional_inline}}
      - : Gibt codec-spezifische Konfigurationsoptionen für den Opus-Codec an. Sein Wert ist ein `OpusEncoderConfig`-Objekt, dessen mögliche Eigenschaften wie folgt sind:
        - `application` {{optional_inline}}
          - : Ein enumerierter Wert, der den beabsichtigten Anwendungstyp des Encoders angibt. Mögliche Werte sind:
            - `audio` (Standard)
              - : Verarbeitet das Signal getreu dem ursprünglichen Eingang.
            - `lowdelay`
              - : Konfiguriert die minimale mögliche Codierungsverzögerung, indem bestimmte Betriebsmodi deaktiviert werden.
            - `voip`
              - : Verarbeitet das Signal für verbesserte Sprachverständlichkeit.
        - `complexity` {{optional_inline}}
          - : Eine Zahl, die die rechnerische Komplexität des Encoders definiert, basierend auf den in Abschnitt [RFC6716, 2.1.5. — Complexity](https://www.rfc-editor.org/rfc/rfc6716#section-2.1.5) beschriebenen Aspekten. Der gültige Bereich ist 0 bis 10, wobei 10 die höchste Komplexität darstellt. Wenn kein Wert angegeben ist, ist der Standardwert plattformabhängig, wobei die Spezifikation 5 für mobile Plattformen und 9 für alle anderen Plattformen empfiehlt.
        - `format` {{optional_inline}}
          - : Ein enumerierter Wert, der das Format angibt, in dem der Encoder [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)s ausgeben soll. Mögliche Werte sind:
            - `opus` (Standard)
              - : Gibt `EncodedAudioChunk`s im Opus-Format aus. In diesem Fall sind keine Metadaten notwendig, um den codierten Audiostream zu dekodieren.
            - `ogg`
              - : Gibt `EncodedAudioChunk`s im Ogg-Format aus. Auch hier sind keine Metadaten notwendig, um den codierten Audiostream zu dekodieren. Die Metadaten des codierten Audiostreams werden in der Decoder-Konfiguration bereitgestellt — über die [`description`](/de/docs/Web/API/AudioDecoder/configure#description)-Eigenschaft des Konfigurationsobjekts, das an [`AudioDecoder.configure()`](/de/docs/Web/API/AudioDecoder/configure) übergeben wird.
        - `frameDuration` {{optional_inline}}
          - : Eine Zahl, die die Frame-Dauer in Mikrosekunden von `EncodedAudioChunk`s definiert, die vom Encoder ausgegeben werden. Wenn nicht angegeben, beträgt der Standardwert `frameDuration` `20000`.
        - `packetlossperc` {{optional_inline}}
          - : Eine Zahl, die den erwarteten Paketverlustprozentsatz des Encoders definiert. Der gültige Bereich ist 0 bis 100. Wenn nicht angegeben, beträgt der Standardwert `packetlossperc` `0`.
        - `signal` {{optional_inline}}
          - : Ein enumerierter Wert, der den Standardwert für die Art des codierten Audiosignals angibt. Mögliche Werte sind:
            - `auto` (Standard)
              - : Das Audiosignal ist nicht als bestimmter Typ angegeben.
            - `music`
              - : Das Audiosignal ist Musik.
            - `voice`
              - : Das Audiosignal ist Stimme oder Sprache.
        - `usedtx` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder die diskontinuierliche Übertragung (DTX) verwendet, welche die Bitrate während Stille oder Hintergrundgeräuschen reduziert. Wenn DTX aktiviert ist, wird nur alle 400 Millisekunden ein Frame codiert. Wenn nicht angegeben, ist der Standardwert `usedtx` `false`.
        - `useinbandfec` {{optional_inline}}
          - : Ein boolescher Wert, der angibt, ob der Encoder Opus-Inband-Fehlerkorrektur (FEC) bereitstellt. Dies führt dazu, dass Pakete, die als wahrnehmungstechnisch wichtige Sprachinformationen bestimmt sind — wie Einsätze oder Übergangsphasen — bei einer niedrigeren Bitrate neu codiert und einem nachfolgenden Paket hinzugefügt werden. Wenn nicht angegeben, beträgt der Standardwert `useinbandfec` `false`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn die angegebene `config` ungültig ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der [`state`](/de/docs/Web/API/AudioEncoder/state) `"closed"` ist.
- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die angegebene `config` gültig ist, aber der Benutzeragent keinen Codec bereitstellen kann, der dieses Profil dekodieren kann.

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
