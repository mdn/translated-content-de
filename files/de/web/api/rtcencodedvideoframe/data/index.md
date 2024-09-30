---
title: "RTCEncodedVideoFrame: data-Eigenschaft"
short-title: data
slug: Web/API/RTCEncodedVideoFrame/data
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`data`**-Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces gibt einen Puffer zurück, der die Frame-Daten enthält.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Dieses Beispiel [WebRTC encoded transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Frame-Daten in einer `transform()`-Funktion eines [`TransformStream`](/de/docs/Web/API/TransformStream) abrufen und alle Bits negieren könnten.

Die `transform()`-Funktion erstellt eine {{jsxref("DataView")}} auf dem Puffer in der Frame-`data`-Eigenschaft und erstellt auch eine Ansicht auf einem neuen {{jsxref("ArrayBuffer")}}.
Dann schreibt sie die invertierten Bytes in den ursprünglichen Daten in den neuen Puffer, weist den Puffer der codierten Frame-`data`-Eigenschaft zu und reiht das modifizierte Frame in den Stream ein.

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

Beachten Sie, dass der hier gezeigte umgebende Code in [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
