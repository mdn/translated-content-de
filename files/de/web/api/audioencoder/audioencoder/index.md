---
title: "AudioEncoder: AudioEncoder() Konstruktor"
short-title: AudioEncoder()
slug: Web/API/AudioEncoder/AudioEncoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioEncoder()`** Konstruktor erstellt ein neues [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Objekt mit dem bereitgestellten `init.output`-Callback als Ausgabe-Callback, dem bereitgestellten `init.error`-Callback als Fehler-Callback und setzt den [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) auf `"unconfigured"`.

## Syntax

```js-nolint
new AudioEncoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das zwei erforderliche Callbacks enthält.
    - `output`
      - : Ein Callback, das ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt als erstes Argument und optional ein Metadatenobjekt als zweites Argument nimmt. Das Metadatenobjekt hat ein Mitglied, `decoderConfig`, das ein Objekt als Wert enthält, mit:
        - `codec`
          - : Ein String, der eine [gültige Codec-Zeichenkette](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält.
        - `sampleRate`
          - : Ein Integer, der die Anzahl der Samples pro Sekunde darstellt.
        - `numberOfChannels`
          - : Ein Integer, der die Anzahl der Audiokanäle darstellt.
        - `description` {{optional_inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}} mit einer Sequenz von codec-spezifischen Bytes, die gemeinhin als Extradata bekannt sind.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}}-Objekt als einziges Argument nimmt.

## Beispiele

Im folgenden Beispiel wird ein `AudioEncoder` mit den beiden erforderlichen Callback-Funktionen erstellt, eine zur Verarbeitung des dekodierten Frames und die andere zur Fehlerbehandlung.

```js
const audioEncoder = new AudioEncoder({
  output: processAudio,
  error: onEncoderError,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
