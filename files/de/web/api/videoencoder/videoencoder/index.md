---
title: "VideoEncoder: VideoEncoder() Konstruktor"
short-title: VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoEncoder()`** Konstruktor erstellt ein neues [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Objekt mit dem bereitgestellten `options.output` Callback als Ausgabe-Callback und dem bereitgestellten `options.error` Callback als Fehler-Callback und setzt den [`VideoEncoder.state`](/de/docs/Web/API/VideoEncoder/state) auf `"unconfigured"`.

## Syntax

```js-nolint
new VideoEncoder(options)
```

### Parameter

- `options`
  - : Ein Objekt, das zwei erforderliche Callbacks enthält.
    - `output`
      - : Ein Callback, das ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekt als erstes Argument und ein optionales Metadata-Objekt als zweites Argument nimmt. Das Metadata-Objekt hat drei Mitglieder:
        - `decoderConfig` {{Optional_Inline}}
          - : Ein Objekt, das enthält:
            - `codec`
              - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält.
            - `description` {{Optional_Inline}}
              - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}}, die eine Sequenz von codec-spezifischen Bytes enthält, allgemein bekannt als "extradata".
            - `codedWidth` {{Optional_Inline}}
              - : Eine Ganzzahl, die die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln repräsentiert, möglicherweise einschließlich unsichtbarer Abstände und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
            - `codedHeight` {{Optional_Inline}}
              - : Eine Ganzzahl, die die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln repräsentiert, möglicherweise einschließlich unsichtbarer Abstände und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
            - `displayAspectWidth` {{Optional_Inline}}
              - : Eine Ganzzahl, die die horizontale Dimension des [Seitenverhältnisses](/de/docs/Glossary/aspect_ratio) des [`VideoFrame`](/de/docs/Web/API/VideoFrame) bei der Anzeige repräsentiert.
            - `displayAspectHeight` {{Optional_Inline}}
              - : Eine Ganzzahl, die die vertikale Dimension des Seitenverhältnisses des [`VideoFrame`](/de/docs/Web/API/VideoFrame) bei der Anzeige repräsentiert.
            - `colorSpace` {{Optional_Inline}}
              - : Ein Objekt, das Sie dem [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Konstruktor als `init`-Argument übergeben, das den [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) für [`VideoFrames`](/de/docs/Web/API/VideoFrame), die mit diesem `decoderConfig`-Objekt verbunden sind, konfiguriert. Wenn `colorSpace` existiert, überschreiben die bereitgestellten Werte alle Onstream-Werte aus dem Bitstream.
            - `hardwareAcceleration` {{Optional_Inline}}
              - : Ein String, der die Hardwarebeschleunigung für diesen Codec konfiguriert. Standardmäßig auf `"no-preference"` gesetzt. Optionen sind:
                - `"no-preference"`
                - `"prefer-hardware"`
                - `"prefer-software"`
            - `optimizeForLatency` {{Optional_Inline}}
              - : Ein boolescher Wert, der angibt, ob der ausgewählte Decoder so konfiguriert werden sollte, dass die Anzahl der [`EncodedVideoChunks`](/de/docs/Web/API/EncodedVideoChunk) minimiert wird, die dekodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird.
        - `svc` {{Optional_Inline}}
          - : Ein optionales Objekt mit nur einem Mitglied: `temporalLayerId`, welches eine Zahl ist, die die [temporale Schicht](https://w3c.github.io/webcodecs/#temporal-layer) für das zugehörige [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) identifiziert.
        - `alphaSideData` {{Optional_Inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}}, oder eine {{jsxref("DataView")}},
            die die zusätzlichen Alpha-Kanal-Daten des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) enthält.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}}-Objekt als einziges Argument nimmt.

## Beispiele

Im folgenden Beispiel wird ein `VideoEncoder` mit den zwei erforderlichen Callback-Funktionen erstellt, eine zur Verarbeitung der kodierten Frames und die andere zur Fehlerbehandlung.

```js
const videoEncoder = new VideoEncoder({
  output(chunk, metadata) {
    console.log(chunk.timestamp);
    console.log(chunk.byteLength);
    console.log(JSON.stringify(metadata));
  },
  error(error) {
    console.log(error);
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
