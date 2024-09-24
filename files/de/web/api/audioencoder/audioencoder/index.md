---
title: "AudioEncoder: AudioEncoder() Konstruktor"
short-title: AudioEncoder()
slug: Web/API/AudioEncoder/AudioEncoder
l10n:
  sourceCommit: 06b418a190b8e4a46682ab706d14984e7db34862
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioEncoder()`** Konstruktor erstellt ein neues {{domxref("AudioEncoder")}} Objekt mit dem bereitgestellten `init.output` Callback als zugewiesenem Ausgabe-Callback, dem bereitgestellten `init.error` Callback als Fehler-Callback und dem {{domxref("AudioEncoder.state")}}, das auf `"unconfigured"` gesetzt ist.

## Syntax

```js-nolint
new AudioEncoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das zwei erforderliche Rückruf-Funktionen enthält.
    - `output`
      - : Ein Callback, welches ein {{domxref("EncodedAudioChunk")}} Objekt als erstes Argument und optional ein Metadatenobjekt als zweites annimmt. Das Metadatenobjekt hat ein Mitglied, `decoderConfig`, das ein Objekt als Wert enthält mit:
        - `codec`
          - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#audio-codec-registry) enthält.
        - `sampleRate`
          - : Ein Integer, der die Anzahl der Frame-Samples pro Sekunde darstellt.
        - `numberOfChannels`
          - : Ein Integer, der die Anzahl der Audiokanäle darstellt.
        - `description` {{optional_inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das eine Sequenz von codec-spezifischen Bytes enthält, die allgemein als Extradata bekannt sind.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}} Objekt als einziges Argument annimmt.

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
