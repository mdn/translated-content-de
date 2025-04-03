---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`RTCEncodedAudioFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen kodierten Audio-Frame in der WebRTC-Empfänger- oder Sender-Pipeline, der mit einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

Die Schnittstelle bietet Methoden und Eigenschaften, um Metadaten über den Frame abzurufen, sodass dessen Format und Reihenfolge in der Frame-Sequenz bestimmt werden können.
Die `data`-Eigenschaft bietet Zugriff auf die kodierten Frame-Daten als ein Puffer, der möglicherweise durch eine Transformation verschlüsselt oder anderweitig modifiziert wurde.

## Instanzeigenschaften

- [`RTCEncodedAudioFrame.timestamp`](/de/docs/Web/API/RTCEncodedAudioFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitstempel zurück, zu dem die Abtastung des Frames begonnen hat.
- [`RTCEncodedAudioFrame.data`](/de/docs/Web/API/RTCEncodedAudioFrame/data)
  - : Gibt einen Puffer zurück, der die kodierten Frame-Daten enthält.

## Instanzmethoden

- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
  - : Gibt die mit dem Frame verknüpften Metadaten zurück.

## Beispiele

Dieses Code-Snippet zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert und kodierte Frames durch ihn von `event.transformer.readable` zu `event.transformer.writable` leitet (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Worker-Pendant zu [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Audio-Stream eingefügt ist, wird die `transform()`-Methode aufgerufen mit einem `RTCEncodedAudioFrame`, wann immer ein neuer Frame in `event.transformer.readable` eingereiht wird.
Die `transform()`-Methode zeigt, wie dies gelesen, mit einer fiktiven Verschlüsselungsfunktion modifiziert und dann im Controller eingereiht werden kann (dies leitet es schließlich durch zu `event.transformer.writable` und dann zurück in die WebRTC-Pipeline).

```js
addEventListener("rtctransform", (event) => {
  const transform = new TransformStream({
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
