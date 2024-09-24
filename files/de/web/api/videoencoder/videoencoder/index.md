---
title: "VideoEncoder: VideoEncoder() Konstruktor"
short-title: VideoEncoder()
slug: Web/API/VideoEncoder/VideoEncoder
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("WebCodecs API")}}{{SecureContext_Header}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoEncoder()`** Konstruktor erzeugt ein neues {{domxref("VideoEncoder")}}-Objekt, wobei der bereitgestellte `options.output`-Callback als Output-Callback und der bereitgestellte `options.error`-Callback als Fehler-Callback zugewiesen wird. Der {{domxref("VideoEncoder.state")}} wird auf `"unconfigured"` gesetzt.

## Syntax

```js-nolint
new VideoEncoder(options)
```

### Parameter

- `options`
  - : Ein Objekt, das zwei erforderliche Callbacks enthält.
    - `output`
      - : Ein Callback, das ein {{domxref("EncodedVideoChunk")}}-Objekt als erstes Argument und optional ein Metadaten-Objekt als zweites Argument entgegennimmt. Das Metadaten-Objekt hat drei Mitglieder:
        - `decoderConfig` {{Optional_Inline}}
          - : Ein Objekt, das Folgendes enthält:
            - `codec`
              - : Ein String, der einen [gültigen Codec-String](https://www.w3.org/TR/webcodecs-codec-registry/#video-codec-registry) enthält.
            - `description` {{Optional_Inline}}
              - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das eine Sequenz von codec-spezifischen Bytes enthält, allgemein bekannt als "Extradata".
            - `codedWidth` {{Optional_Inline}}
              - : Ein Integer, der die Breite des {{domxref("VideoFrame")}} in Pixeln darstellt, möglicherweise einschließlich unsichtbarer Abstände, und vor möglichen Verhältnis-Anpassungen.
            - `codedHeight` {{Optional_Inline}}
              - : Ein Integer, der die Höhe des {{domxref("VideoFrame")}} in Pixeln darstellt, möglicherweise einschließlich unsichtbarer Abstände, und vor möglichen Verhältnis-Anpassungen.
            - `displayAspectWidth` {{Optional_Inline}}
              - : Ein Integer, der die horizontale Dimension des {{domxref("VideoFrame")}}-{{glossary("Seitenverhältnis")}} beim Anzeigen darstellt.
            - `displayAspectHeight` {{Optional_Inline}}
              - : Ein Integer, der die vertikale Dimension des aspect ratio des {{domxref("VideoFrame")}} beim Anzeigen darstellt.
            - `colorSpace` {{Optional_Inline}}
              - : Ein Objekt, das Sie dem {{domxref("VideoColorSpace")}}-Konstruktor als `init`-Argument übergeben und das {{domxref("VideoFrame.colorSpace")}} für {{domxref("VideoFrame","VideoFrames")}} konfiguriert, die mit diesem `decoderConfig`-Objekt verknüpft sind. Wenn `colorSpace` existiert, überschreiben die bereitgestellten Werte alle In-Band-Werte aus dem Bitstrom.
            - `hardwareAcceleration` {{Optional_Inline}}
              - : Ein String, der die Hardware-Beschleunigung für diesen Codec konfiguriert. Standard ist `"no-preference"`. Optionen sind:
                - `"no-preference"`
                - `"prefer-hardware"`
                - `"prefer-software"`
            - `optimizeForLatency` {{Optional_Inline}}
              - : Ein Boolean, der darstellt, ob der ausgewählte Decoder so konfiguriert werden sollte, dass die Anzahl der {{domxref("EncodedVideoChunk","EncodedVideoChunks")}}, die dekodiert werden müssen, bevor ein {{domxref("VideoFrame")}} ausgegeben wird, minimiert wird.
        - `svc` {{Optional_Inline}}
          - : Ein optionales Objekt mit nur einem Mitglied: `temporalLayerId`, das eine Nummer ist, die die [temporal layer](https://w3c.github.io/webcodecs/#temporal-layer) für das zugehörige {{domxref("EncodedVideoChunk")}} identifiziert.
        - `alphaSideData` {{Optional_Inline}}
          - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}
            das die zusätzlichen Alphakanal-Daten des {{domxref("EncodedVideoChunk")}} enthält.
    - `error`
      - : Ein Callback, das ein {{jsxref("Error")}}-Objekt als einziges Argument entgegennimmt.

## Beispiele

Im folgenden Beispiel wird ein `VideoEncoder` mit den zwei erforderlichen Callback-Funktionen erstellt, eine für die Verarbeitung des codierten Frames und die andere zur Behandlung von Fehlern.

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
