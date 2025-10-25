---
title: RTCEncodedVideoFrame
slug: Web/API/RTCEncodedVideoFrame
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`RTCEncodedVideoFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Videorahmen in der WebRTC-Empfänger- oder Sender-Pipeline, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

## Konstruktor

- [`RTCEncodedVideoFrame()`](/de/docs/Web/API/RTCEncodedVideoFrame/RTCEncodedVideoFrame)
  - : Copy-Konstruktor. Erstellt ein neues und unabhängiges `RTCEncodedVideoFrame`-Objekt aus einem anderen Rahmen und überschreibt dabei optional einige der kopierten Metadaten.

## Instanz-Eigenschaften

- [`RTCEncodedVideoFrame.type`](/de/docs/Web/API/RTCEncodedVideoFrame/type) {{ReadOnlyInline}}
  - : Gibt zurück, ob der aktuelle Rahmen ein Schlüsselrahmen, Delta-Rahmen oder leerer Rahmen ist.
- [`RTCEncodedVideoFrame.timestamp`](/de/docs/Web/API/RTCEncodedVideoFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Rahmens begann.
- [`RTCEncodedVideoFrame.data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Rahmendaten enthält.

## Instanz-Methoden

- [`RTCEncodedVideoFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata)
  - : Gibt die mit dem Rahmen assoziierten Metadaten zurück.

## Beschreibung

Rohvideodaten werden als eine Sequenz von Rahmen generiert, wobei jeder Rahmen ein zweidimensionales Array von Pixelwerten ist.
Videokodierer transformieren dieses Rohmaterial in eine komprimierte Darstellung des Originals für Übertragung und Speicherung.
Ein gängiger Ansatz ist das Senden von "Schlüsselbildern", die genügend Informationen enthalten, um ein vollständiges Bild bei relativ niedriger Rate wiederzugeben, und zwischen den Schlüsselrahmen das Senden von vielen kleineren "Delta-Rahmen", die nur die Änderungen seit dem vorherigen Rahmen kodieren.

Es gibt viele verschiedene Codecs, wie H.264, VP8 und VP9, die jeweils unterschiedliche Kodierungsprozesse und Konfigurationen haben und unterschiedliche Kompromisse zwischen Komprimierungseffizienz und Videoqualität bieten.

Das **`RTCEncodedVideoFrame`** repräsentiert einen einzelnen Rahmen, der mit einem bestimmten Videokodierer kodiert wurde.
Die [`type`](/de/docs/Web/API/RTCEncodedVideoFrame/type)-Eigenschaft gibt an, ob der Rahmen ein "Schlüssel" oder "Delta"-Rahmen ist, und Sie können die Methode [`getMetadata()`](/de/docs/Web/API/RTCEncodedVideoFrame/getMetadata) verwenden, um weitere Details über die Kodierungsmethode zu erhalten.
Die [`data`](/de/docs/Web/API/RTCEncodedVideoFrame/data)-Eigenschaft bietet Zugriff auf die kodierten Bilddaten für den Rahmen, die dann modifiziert ("transformiert") werden können, wenn Rahmen gesendet oder empfangen werden.

## Beispiele

### Transformieren eines kodierten Videorahmens

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Rahmen durch diesen von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Videostream eingefügt wird, wird die Methode `transform()` mit einem `RTCEncodedVideoFrame` aufgerufen, sobald ein neuer Rahmen in `event.transformer.readable` eingereiht wird.
Die Methode `transform()` zeigt, wie dies gelesen werden kann, indem die Bits invertiert werden, und dann in den Controller eingereiht wird (dies leitet es letztendlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
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

Beachten Sie, dass ausführlichere Beispiele unter [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)
