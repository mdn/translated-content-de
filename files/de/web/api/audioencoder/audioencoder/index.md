---
title: "AudioEncoder: AudioEncoder() Konstruktor"
short-title: AudioEncoder()
slug: Web/API/AudioEncoder/AudioEncoder
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioEncoder()`** Konstruktor erstellt ein neues [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Objekt, wobei die bereitgestellte `init.output` Callback-Funktion als Ausgabe-Collback und die bereitgestellte `init.error` Callback-Funktion als Fehler-Collback zugewiesen werden. Der [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) wird auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new AudioEncoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das zwei erforderliche Callback-Funktionen enthält.
    - `output`
      - : Eine Callback-Funktion, die ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt als erstes Argument und ein optionales Metadatenobjekt als zweites Argument nimmt. Das Metadatenobjekt hat ein Mitglied, `decoderConfig`, das ein Objekt als Wert enthält mit:
        - `codec`
          - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) enthält.
        - `sampleRate`
          - : Ein ganzzahliger Wert, der die Anzahl der Rahmproben pro Sekunde darstellt.
        - `numberOfChannels`
          - : Ein ganzzahliger Wert, der die Anzahl der Audiokanäle darstellt.
        - `description` {{optional_inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der eine Sequenz von codec-spezifischen Bytes enthält, die gewöhnlich als extradata bekannt sind.
    - `error`
      - : Eine Callback-Funktion, die ein {{jsxref("Error")}}-Objekt als einziges Argument nimmt.

## Beispiele

Im folgenden Beispiel wird ein `AudioEncoder` mit den zwei erforderlichen Callback-Funktionen erstellt, eine zur Bearbeitung des dekodierten Frames und die andere zur Fehlerbehandlung.

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
