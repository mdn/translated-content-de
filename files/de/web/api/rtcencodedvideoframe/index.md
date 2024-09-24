---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`RTCEncodedVideoFrame`** der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videoframe im WebRTC-Empfänger oder -Sender, der mit einem [WebRTC-kodierten Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

> [!NOTE]
> Dieses Feature ist in [_Dedizierten_ Web-Workern](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanz-Eigenschaften

- {{domxref("RTCEncodedVideoFrame.type")}} {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Frame ein Schlüsselbild, ein Delta-Frame oder ein leerer Frame ist.
- {{domxref("RTCEncodedVideoFrame.timestamp")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begonnen hat.
- {{domxref("RTCEncodedVideoFrame.data")}}
  - : Gibt einen Puffer zurück, der die codierten Frame-Daten enthält.

## Instanz-Methoden

- {{DOMxRef("RTCEncodedVideoFrame.getMetadata()")}}
  - : Gibt die mit dem Frame verknüpften Metadaten zurück.

## Beschreibung

Rohvideodaten werden als Folge von Frames generiert, wobei jeder Frame ein zweidimensionales Array von Pixelwerten darstellt. Videoencoder wandeln diesen rohen Input in eine komprimierte Darstellung des Originals um, um die Übertragung und Speicherung zu erleichtern. Ein gängiger Ansatz ist das Senden von "Schlüsselframes", die genügend Informationen enthalten, um ein ganzes Bild mit relativ niedriger Rate wiederherzustellen. Zwischen den Schlüsselframes werden viele kleinere "Delta-Frames" gesendet, die nur die Änderungen seit dem vorherigen Frame codieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die jeweils unterschiedliche Kodierungsprozesse und Konfigurationen haben, die verschiedene Kompromisse zwischen Kompressionseffizienz und Videoqualität bieten.

Die **`RTCEncodedVideoFrame`** stellt einen einzelnen Frame dar, der mit einem bestimmten Videoencoder codiert wurde. Die {{domxref("RTCEncodedVideoFrame.type","type")}}-Eigenschaft gibt an, ob der Frame ein "Schlüssel-" oder "Delta-" Frame ist, und Sie können die {{DOMxRef("RTCEncodedVideoFrame.getMetadata()","getMetadata()")}}-Methode verwenden, um weitere Details über die Kodierungsmethode zu erhalten. Die {{domxref("RTCEncodedVideoFrame.data", "data")}}-Eigenschaft ermöglicht den Zugriff auf die codierten Bilddaten des Frames, die dann modifiziert ("transformiert") werden können, wenn Frames gesendet oder empfangen werden.

## Beispiele

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis in einem {{domxref("Worker")}}, der einen {{domxref("TransformStream")}} implementiert und codierte Frames von `event.transformer.readable` zu `event.transformer.writable` durch ihn leitet (`event.transformer` ist ein {{domxref("RTCRtpScriptTransformer")}}, das Worker-Gegenstück von {{domxref("RTCRtpScriptTransform")}}).

Wenn der Transformer in einen Videostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedVideoFrame` aufgerufen, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird. Die `transform()`-Methode zeigt, wie dies gelesen, durch Invertieren der Bits modifiziert und dann im Controller eingereiht werden kann (dies leitet es letztendlich durch das `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

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
- {{domxref("TransformStream")}}
- {{DOMxRef("RTCRtpScriptTransformer")}}
- {{DOMxRef("RTCEncodedAudioFrame")}}
