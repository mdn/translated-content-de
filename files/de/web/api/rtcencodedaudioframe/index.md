---
title: RTCEncodedAudioFrame
slug: Web/API/RTCEncodedAudioFrame
l10n:
  sourceCommit: 0a9c10fc67901972221dc7b3d006334fbfa73dce
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`RTCEncodedAudioFrame`** der [WebRTC API](/de/docs/Web/API/WebRTC_API) repräsentiert einen codierten Audio-Frame in der WebRTC-Empfänger- oder -Senderpipeline, der mithilfe einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) modifiziert werden kann.

Das Interface bietet Methoden und Eigenschaften zum Abrufen von Metadaten über den Frame, sodass sein Format und seine Reihenfolge in der Sequenz der Frames bestimmt werden können. Die `data`-Eigenschaft ermöglicht den Zugriff auf die codierten Framedaten als Buffer, die verschlüsselt oder anderweitig durch eine Transformation modifiziert sein könnten.

> [!NOTE]
> Diese Funktion ist in [_Dedizierten_ Web Workern](/de/docs/Web/API/Web_Workers_API#worker_types) verfügbar.

## Instanzeigenschaften

- [`RTCEncodedAudioFrame.timestamp`](/de/docs/Web/API/RTCEncodedAudioFrame/timestamp) {{ReadOnlyInline}} {{deprecated_inline}} {{non-standard_inline}}
  - : Gibt den Zeitpunkt zurück, an dem die Abtastung des Frames begann.
- [`RTCEncodedAudioFrame.data`](/de/docs/Web/API/RTCEncodedAudioFrame/data)
  - : Gibt einen Buffer zurück, der die kodierten Framedaten enthält.

## Instanzmethoden

- [`RTCEncodedAudioFrame.getMetadata()`](/de/docs/Web/API/RTCEncodedAudioFrame/getMetadata)
  - : Gibt die mit dem Frame verbundenen Metadaten zurück.

## Beispiele

Dieser Codeausschnitt zeigt einen Handler für das `rtctransform`-Ereignis in einem [`Worker`](/de/docs/Web/API/Worker), der einen [`TransformStream`](/de/docs/Web/API/TransformStream) implementiert, und pipet codierte Frames durch ihn von `event.transformer.readable` zu `event.transformer.writable` (`event.transformer` ist ein [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer), das Pendant auf Worker-Seite von [`RTCRtpScriptTransform`](/de/docs/Web/API/RTCRtpScriptTransform)).

Wenn der Transformer in einen Audiostream eingesetzt wird, wird die `transform()`-Methode mit einem `RTCEncodedAudioFrame` aufgerufen, sobald ein neuer Frame in `event.transformer.readable` eingereiht wird. Die `transform()`-Methode zeigt, wie dies gelesen, mit einer fiktionalen Verschlüsselungsfunktion modifiziert und anschließend im Controller eingereiht werden könnte (das leitet es letztendlich zu `event.transformer.writable` zurück und dann in die WebRTC-Pipeline).

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

Beachten Sie, dass ausführlichere Beispiele in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) bereitgestellt werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
- [`TransformStream`](/de/docs/Web/API/TransformStream)
- [`RTCRtpScriptTransformer`](/de/docs/Web/API/RTCRtpScriptTransformer)
- [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)
