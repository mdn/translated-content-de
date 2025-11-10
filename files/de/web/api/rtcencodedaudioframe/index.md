---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 23398d025295ad1eaf1663a26fbe738a8fe12883
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`RTCEncodedAudioFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Audio-Frame in der WebRTC-Empfänger- oder Sender-Pipeline, der mithilfe eines [WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

Die Schnittstelle bietet Methoden und Eigenschaften, um Metadaten über den Frame zu erhalten, wodurch dessen Format und Reihenfolge in der Sequenz von Frames bestimmt werden können. Die `data`-Eigenschaft bietet Zugriff auf die kodierten Frame-Daten als Puffer, die verschlüsselt oder anderweitig durch einen Transformationsprozess modifiziert sein können.

## Konstruktor

- [`RTCEncodedAudioFrame()`](/de/docs/Web/API/RTCEncodedAudioFrame/RTCEncodedAudioFrame)
  - : Copy-Konstruktor. Erstellt ein neues und unabhängiges `RTCEncodedAudioFrame`-Objekt aus einem Frame, wobei optional einige der kopierten Metadaten überschrieben werden.

## Instanz-Eigenschaften

- [`RTCEncodedAudioFrame.timestamp`](/de/docs/Web/API/RTCEncodedAudioFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begonnen hat.
- [`RTCEncodedAudioFrame.data`](/de/docs/Web/API/RTCEncodedAudioFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Frame-Daten enthält.

## Instanz-Methoden

- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
  - : Gibt die mit dem Frame verbundenen Metadaten zurück.

## Beispiele

### Transformieren eines kodierten Audio-Frames

Dieses Code-Snippet zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames durch diesen von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Audiostream eingefügt wird, wird die `transform()`-Methode aufgerufen, wenn ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, mit einer fiktiven Verschlüsselungsfunktion modifiziert und dann in den Controller eingereiht werden kann (dies leitet es letztendlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
    async transform(encodedFrame, controller) {
      // Reconstruct the original frame.
      const view = new DataView(encodedFrame.data);

      // Construct a new buffer
      const newData = new ArrayBuffer(encodedFrame.data.byteLength);
      const newView = new DataView(newData);

      // Encrypt frame bytes using the encryptFunction() method (not shown)
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

Beachten Sie, dass vollständigere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
