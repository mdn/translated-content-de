---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`RTCEncodedVideoFrame`** des [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert einen codierten Video-Frame in der WebRTC-Empfänger- oder Senderpipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

## Instanz-Eigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Schlüssel-Frame, Delta-Frame oder leerer Frame ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem das Sampling des Frames begonnen hat.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer zurück, der die codierten Frame-Daten enthält.

## Instanz-Methoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die Metadaten zurück, die mit dem Frame verknüpft sind.

## Beschreibung

Rohvideodaten werden als Folge von Frames erzeugt, wobei jeder Frame ein zweidimensionales Array von Pixelwerten ist. Videoencoder wandeln diesen Rohinput in eine komprimierte Darstellung des Originals zur Übertragung und Speicherung um. Ein gängiger Ansatz besteht darin, "Schlüssel-Frames" zu senden, die genügend Informationen enthalten, um ein ganzes Bild bei relativ niedriger Rate zu reproduzieren, und zwischen Schlüssel-Frames viele wesentlich kleinere "Delta-Frames" zu senden, die nur die Änderungen seit dem vorherigen Frame kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die jeweils unterschiedliche Kodierungsprozesse und Konfigurationen haben und verschiedene Kompromisse zwischen Kompressionseffizienz und Videoqualität bieten.

Die **`RTCEncodedVideoFrame`** repräsentiert einen einzelnen Frame, der mit einem bestimmten Videoencoder kodiert ist. Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft gibt an, ob der Frame ein "Schlüssel-" oder "Delta-"Frame ist, und Sie können die Methode [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata) verwenden, um weitere Details zur Kodierungsmethode zu erhalten. Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten für den Frame, die dann bei der Sendung oder beim Empfang modifiziert ("transformiert") werden können.

## Beispiele

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Event in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames vom `event.transformer.readable` zu `event.transformer.writable` weiterleitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Workerseite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformator in einen Videostream eingefügt wird, wird die Methode `transform()` mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird. Die Methode `transform()` zeigt, wie dies gelesen, durch Invertieren der Bits modifiziert und dann im Controller eingereiht werden könnte (dies leitet es letztlich durch `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

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

Beachten Sie, dass ausführlichere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
