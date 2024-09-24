---
title: "RTCEncodedVideoFrame: Daten-Eigenschaft"
short-title: Daten
slug: Web/API/RTCEncodedVideoFrame/data
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`data`**-Eigenschaft des {{domxref("RTCEncodedVideoFrame")}}-Interfaces gibt einen Puffer zurück, der die Frame-Daten enthält.

## Wert

Ein {{jsxref("ArrayBuffer")}}.

## Beispiele

Dieses Beispiel zu [WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) zeigt, wie Sie die Frame-Daten in einer {{domxref("TransformStream")}}-`transform()`-Funktion erhalten und alle Bits negieren könnten.

Die `transform()`-Funktion konstruiert ein {{jsxref("DataView")}} auf dem Puffer in der `data`-Eigenschaft des Frames und erstellt auch eine Ansicht auf einem neuen {{jsxref("ArrayBuffer")}}.
Sie schreibt dann die invertierten Bytes der Originaldaten in den neuen Puffer, weist den Puffer der `data`-Eigenschaft des kodierten Frames zu und reiht den modifizierten Frame im Stream ein.

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

Beachten Sie, dass der umgebende Code, der hier gezeigt wird, in [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) beschrieben wird.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC-kodierten Transformationen](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
