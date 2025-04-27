---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`RTCEncodedAudioFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Audio-Frame im Empfangs- oder Sendepipeline von WebRTC, der mithilfe eines [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

Die Schnittstelle stellt Methoden und Eigenschaften zur Verfügung, um Metadaten des Frames abzurufen, was es ermöglicht, das Format und die Reihenfolge innerhalb der Sequenz der Frames zu bestimmen. Die `data`-Eigenschaft bietet Zugriff auf die kodierten Frame-Daten als Buffer, der möglicherweise verschlüsselt oder anderweitig durch einen Transform modifiziert wurde.

## Instanzeigenschaften

- [`RTCEncodedAudioFrame.timestamp`](/de/docs/Web/API/RTCEncodedAudioFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begonnen hat.
- [`RTCEncodedAudioFrame.data`](/de/docs/Web/API/RTCEncodedAudioFrame/data)
  - : Gibt einen Buffer zurück, der die kodierten Frame-Daten enthält.

## Instanzmethoden

- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
  - : Gibt die mit dem Frame verbundenen Metadaten zurück.

## Beispiele

Dieser Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Gegenstück auf der Worker-Seite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Audio-Stream eingesetzt wird, wird die `transform()`-Methode aufgerufen mit einem `RTCEncodedAudioFrame`, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird. Die `transform()`-Methode zeigt, wie dies gelesen, mithilfe einer fiktiven Verschlüsselungsfunktion modifiziert und dann im Controller eingereiht werden könnte (dies leitet es letztlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

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
