---
title: "AudioEncoder: AudioEncoder() Konstruktor"
short-title: AudioEncoder()
slug: Web/API/AudioEncoder/AudioEncoder
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{securecontext_header}}{{APIRef("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`AudioEncoder()`** Konstruktor erstellt ein neues [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)-Objekt, wobei die bereitgestellte `init.output`-Callback-Funktion als Output-Callback und die bereitgestellte `init.error`-Callback-Funktion als Fehler-Callback zugewiesen werden. Der [`AudioEncoder.state`](/de/docs/Web/API/AudioEncoder/state) wird auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new AudioEncoder(init)
```

### Parameter

- `init`
  - : Ein Objekt, das zwei erforderliche Callback-Funktionen enthält.
    - `output`
      - : Ein Callback, das ein [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekt als erstes Argument und ein optionales Metadatenobjekt als zweites Argument nimmt. Das Metadatenobjekt besitzt ein Mitglied `decoderConfig`, welches ein Objekt als Wert hat, das Folgendes enthält:
        - `codec`
          - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#audio-codec-registry) enthält.
        - `sampleRate`
          - : Ein Ganzzahlwert, der die Anzahl der Frame-Samples pro Sekunde repräsentiert.
        - `numberOfChannels`
          - : Ein Ganzzahlwert, der die Anzahl der Audiokanäle repräsentiert.
        - `description` {{optional_inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das eine Sequenz codec-spezifischer Bytes enthält, bekannt als Extradata.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}}-Objekt als einziges Argument nimmt.

## Beispiele

Im folgenden Beispiel wird ein `AudioEncoder` mit den zwei erforderlichen Callback-Funktionen erstellt: eine zur Verarbeitung des dekodierten Frames und eine zur Fehlerbehandlung.

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
