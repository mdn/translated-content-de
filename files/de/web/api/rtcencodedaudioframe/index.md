---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 121546ed0718e92b3f99ae99b1a45869ea68ebe7
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedAudioFrame`** der [WebRTC-API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Audio-Frame in der WebRTC-Empfänger- oder Sender-Pipeline, der möglicherweise mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert wird.

Die Schnittstelle bietet Methoden und Eigenschaften, um Metadaten über den Frame abzurufen, was es ermöglicht, dessen Format und Reihenfolge in der Sequenz der Frames zu bestimmen.
Die `data`-Eigenschaft gewährt Zugriff auf die kodierten Frame-Daten als Puffer, die möglicherweise verschlüsselt oder anderweitig durch eine Transformation modifiziert sind.

## Instanz-Eigenschaften

- [`RTCEncodedAudioFrame.timestamp`](/de/docs/Web/API/RTCEncodedAudioFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begann.
- [`RTCEncodedAudioFrame.data`](/de/docs/Web/API/RTCEncodedAudioFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Frame-Daten enthält.

## Instanz-Methoden

- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
  - : Gibt die Metadaten zurück, die mit dem Frame verbunden sind.

## Beispiele

Dieses Codebeispiel zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames durch diesen vom `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf Worker-Seite zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Audio-Stream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedAudioFrame` aufgerufen, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, mithilfe einer fiktiven Verschlüsselungsfunktion modifiziert und dann im Controller eingereiht werden könnte (dies leitet es letztlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const async transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      //Encrypt frame bytes using the encryptFunction() method (not shown)
      for (let i = 0; i < encodedFrame.data.byteLength; ++i) {
        const encryptedByte = encryptFunction(~view.getInt8(i));
        newView.setInt8(i, encryptedByte);
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

Beachten Sie, dass vollständigere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zur Verfügung gestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
