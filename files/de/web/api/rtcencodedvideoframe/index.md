---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 00f46adb5616d826821d63b11eac285faf1cf4a5
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedVideoFrame`** der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videoframe in der WebRTC-Empfänger- oder Senderpipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

## Instanzeigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Keyframe, Deltaframe oder leerer Frame ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitpunkt zurück, zu dem die Abtastung des Frames begonnen hat.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Framedaten enthält.

## Instanzmethoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die mit dem Frame verbundenen Metadaten zurück.

## Beschreibung

Rohvideodaten werden als eine Folge von Frames erzeugt, wobei jeder Frame ein zweidimensionales Array von Pixelwerten ist. Videoencoder wandeln diesen Rohinput in eine komprimierte Darstellung des Originals zur Übertragung und Speicherung um. Ein gängiger Ansatz besteht darin, „Keyframes“ zu senden, die genügend Informationen enthalten, um ein vollständiges Bild bei relativ niedriger Rate zu reproduzieren, und zwischen den Keyframes viele viel kleinere „Deltaframes“ zu senden, die nur die Änderungen seit dem vorherigen Frame kodieren.

Es gibt viele verschiedene Codecs, wie z.B. H.264, VP8 und VP9, die jeweils unterschiedliche Kodierungsprozesse und Konfigurationen haben und verschiedene Kompromisse zwischen Komprimierungseffizienz und Videoqualität bieten.

Der **`RTCEncodedVideoFrame`** repräsentiert einen einzelnen Frame, der mit einem bestimmten Videoencoder kodiert wurde. Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft gibt an, ob der Frame ein „Key“ oder „Delta“ Frame ist, und Sie können die [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)-Methode verwenden, um weitere Details über die Kodierungsmethode zu erhalten. Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten des Frames, die dann beim Senden oder Empfangen modifiziert („transformiert“) werden können.

## Beispiele

Dieser Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames durch diesen von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das arbeitende Gegenstück von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Videostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, sobald ein neuer Frame in `event.transformer.readable` eingereiht wird. Die `transform()`-Methode zeigt, wie dies gelesen, durch Invertieren der Bits modifiziert und dann auf den Controller eingereiht werden könnte (dies wird letztendlich durch bis zu `event.transformer.writable` geleitet und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Negate all bits in the incoming frame
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        newView.setInt8(i, ~view.getInt8(i));
      }

      encodedFrame.data = newData;
      controller.enqueue(encodedFrame);
    },
  });
  event.transformer.readable
    .pipeThrough(transform)
    .pipeTo(event.transformer.writable);
});
```

Beachten Sie, dass vollständigere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
