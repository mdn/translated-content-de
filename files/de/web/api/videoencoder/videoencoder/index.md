---
title: "VideoEncoder: VideoEncoder() Konstruktor"
short-title: VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
l10n:
  sourceCommit: 941ade970fd7ebad52af692b6ac27cfd96f94100
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoEncoder()`** Konstruktor erstellt ein neues [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)-Objekt, wobei die bereitgestellte `options.output`-Rückruffunktion als Ausgaberückruf und die bereitgestellte `options.error`-Rückruffunktion als Fehlerrückruf zugewiesen werden. Zudem wird der [`VideoEncoder.state`](/de/docs/Web/API/VideoEncoder/state) auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new VideoEncoder(options)
```

### Parameter

- `options`
  - : Ein Objekt, das zwei erforderliche Rückruffunktionen enthält.
    - `output`
      - : Eine Rückruffunktion, die ein [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekt als erstes Argument und optional ein Metadatenobjekt als zweites Argument erhält. Das Metadatenobjekt hat drei Mitglieder:
        - `decoderConfig` {{Optional_Inline}}
          - : Ein Objekt, das folgendes enthält:
            - `codec`
              - : Ein String, der einen [gültigen Codec-String](https://w3c.github.io/webcodecs/codec_registry.html#video-codec-registry) enthält.
            - `description` {{Optional_Inline}}
              - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, die eine Folge von codecspezifischen Bytes enthält, allgemein bekannt als "extradata".
            - `codedWidth` {{Optional_Inline}}
              - : Eine Ganzzahl, die die Breite des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, möglicherweise einschließlich nicht sichtbarer Auffüllung und vor möglichen Verhältnis-Anpassungen.
            - `codedHeight` {{Optional_Inline}}
              - : Eine Ganzzahl, die die Höhe des [`VideoFrame`](/de/docs/Web/API/VideoFrame) in Pixeln darstellt, möglicherweise einschließlich nicht sichtbarer Auffüllung und vor möglichen Verhältnis-Anpassungen.
            - `displayAspectWidth` {{Optional_Inline}}
              - : Eine Ganzzahl, die die horizontale Abmessung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} des [`VideoFrame`](/de/docs/Web/API/VideoFrame) bei der Wiedergabe darstellt.
            - `displayAspectHeight` {{Optional_Inline}}
              - : Eine Ganzzahl, die die vertikale Abmessung des Seitenverhältnisses des [`VideoFrame`](/de/docs/Web/API/VideoFrame) bei der Wiedergabe darstellt.
            - `colorSpace` {{Optional_Inline}}
              - : Ein Objekt, das an den [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Konstruktor als `init`-Argument übergeben wird und den [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) für die mit diesem `decoderConfig`-Objekt verknüpften [`VideoFrames`](/de/docs/Web/API/VideoFrame) konfiguriert. Wenn `colorSpace` existiert, überschreiben die angegebenen Werte alle im Bitstream enthaltenen In-Band-Werte.
            - `hardwareAcceleration` {{Optional_Inline}}
              - : Ein String, der die Hardware-Beschleunigung für diesen Codec konfiguriert. Standardwert ist `"no-preference"`. Optionen sind:
                - `"no-preference"`
                - `"prefer-hardware"`
                - `"prefer-software"`
            - `optimizeForLatency` {{Optional_Inline}}
              - : Ein boolean, der angibt, ob der ausgewählte Decoder so konfiguriert werden soll, dass die Anzahl der [`EncodedVideoChunks`](/de/docs/Web/API/EncodedVideoChunk), die decodiert werden müssen, bevor ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) ausgegeben wird, minimiert wird.
        - `svc` {{Optional_Inline}}
          - : Ein optionales Objekt mit nur einem Mitglied: `temporalLayerId`, was eine Nummer ist, die die [Zeitliche Ebene](https://w3c.github.io/webcodecs/#temporal-layer) für das zugehörige [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) identifiziert.
        - `alphaSideData` {{Optional_Inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, eine {{jsxref("TypedArray")}} oder eine {{jsxref("DataView")}}, die die zusätzlichen Alpha-Kanal-Daten des [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) enthält.
    - `error`
      - : Eine Rückruffunktion, die ein {{jsxref("Error")}}-Objekt als einziges Argument erhält.

## Beispiele

Im folgenden Beispiel wird ein `VideoEncoder` mit den zwei erforderlichen Rückruffunktionen erstellt, eine zur Verarbeitung des kodierten Frames und die andere zur Behandlung von Fehlern.

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
