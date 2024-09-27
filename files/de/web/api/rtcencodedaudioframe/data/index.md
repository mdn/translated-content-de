---
title: "RTCEncodedAudioFrame: data-Eigenschaft"
short-title: data
slug: Web/API/RTCEncodedAudioFrame/data
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`data`**-Eigenschaft des [`RTCEncodedAudioFrame`](/de/docs/Web/API/RTCEncodedAudioFrame)-Interfaces gibt einen Puffer zurück, der die Daten für einen kodierten Frame enthält.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Dieses Beispiel für eine [WebRTC-kodierte Transformation](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Rahmendaten in einer `transform()`-Funktion eines [`TransformStream`](/de/docs/Web/API/TransformStream) erhalten und die Bits modifizieren könnten.

Die `transform()`-Funktion erstellt eine {{jsxref("DataView")}} auf dem Puffer in der Frame-Eigenschaft `data` und erstellt auch eine Ansicht auf einem neuen {{jsxref("ArrayBuffer")}}.
Dann schreibt sie die negierten Bytes der Originaldaten in den neuen Puffer, weist den Puffer der kodierten Frame-Eigenschaft `data` zu und stellt den modifizierten Frame in den Stream ein.

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

Beachten Sie, dass der umgebende Code, der hier gezeigt wird, in [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
