---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 8bb665b943fa480ea22b22135f58d97c0caca316
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedAudioFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Audioframe in der Empfangs- oder Sendepipeline von WebRTC, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

Das Interface bietet Methoden und Eigenschaften, um Metadaten über den Frame abzurufen, wodurch dessen Format und Reihenfolge in der Sequenz der Frames bestimmt werden kann.
Die `data`-Eigenschaft bietet Zugriff auf die kodierten Frame-Daten als Puffer, die verschlüsselt oder anderweitig von einem Transformationsprozess modifiziert sein können.

> [!NOTE]
> Diese Funktion ist in [_dedizierten_ Web-Workern](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanzeigenschaften

- {{domxref("RTCEncodedAudioFrame.timestamp")}} {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begann.
- {{domxref("RTCEncodedAudioFrame.data")}}
  - : Gibt einen Puffer zurück, der die kodierten Frame-Daten enthält.

## Instanzmethoden

- {{DOMxRef("RTCEncodedAudioFrame.getMetadata()")}}
  - : Gibt die mit dem Frame verbundenen Metadaten zurück.

## Beispiele

Dieses Code-Snippet zeigt einen Handler für das `rtctransform`-Ereignis in einem {{domxref("Worker")}}, der einen {{domxref("TransformStream")}} implementiert und kodierte Frames durch diesen von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein {{domxref("RTCRtpScriptTransformer")}}, das Gegenstück auf der Worker-Seite von {{domxref("RTCRtpScriptTransform")}}).

Wenn der Transformer in einen Audiostream eingefügt wird, wird die `transform()`-Methode mit einem `RTCEncodedAudioFrame` aufgerufen, sobald ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, mit einer fiktiven Verschlüsselungsfunktion modifiziert und dann im Controller eingereiht werden kann (dies leitet es letztendlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

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

Beachten Sie, dass vollständigere Beispiele unter [Verwendung von WebRTC-Encoded-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-Encoded-Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- {{domxref("TransformStream")}}
- {{DOMxRef("RTCRtpScriptTransformer")}}
- {{DOMxRef("RTCEncodedVideoFrame")}}
