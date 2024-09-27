---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die readonly **`type`**-Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces gibt an, ob es sich bei diesem Frame um einen Key-Frame, Delta-Frame oder leeren Frame handelt.

## Wert

Der Typ kann einen der folgenden Werte haben:

- `key`
  - : Dies ist ein "Key-Frame", der alle Informationen enthält, die benötigt werden, um ein Bild darzustellen.
    Er kann ohne Bezug auf andere Frames dekodiert werden.
- `delta`
  - : Dies ist ein "Delta-Frame", der Änderungen an einem Bild im Vergleich zu einem vorherigen Frame enthält.
    Der Frame kann nicht dekodiert werden, ohne Zugriff auf die referenzierten Frame(s) zu haben.
- `empty`
  - : Dieser Frame enthält keine Daten.
    Dieser Wert ist unerwartet und kann darauf hinweisen, dass die Transformation eine Referenz auf Frames hält, nachdem sie transformiert und an [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) übergeben wurden (nach der Rückübertragung in die Haupt-Thread-WebRTC-Pipeline hat das Worker-Seiten-Frame-Objekt keine Daten mehr).

## Beispiele

Die Implementierung einer `transform()`-Funktion in einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` berücksichtigen und den Transformationscode basierend darauf ändern, ob es sich um einen Key-Frame oder Delta-Frame handelt:

```js
const transformer = new TransformStream({
  transform: async (encodedFrame, controller) => {
    if (encodedFrame.type === "key") {
      // Apply key frame transformation
    } else if (encodedFrame.type === "delta") {
      // Apply delta frame transformation
    } else {
      // Empty
      // Check transform is not holding reference to frames after processing!
    }
    controller.enqueue(encodedFrame);
  },
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung von WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
