---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces gibt an, ob dieser Frame ein Schlüsselbild, ein Delta-Frame oder ein leerer Frame ist.

## Wert

Der Typ kann einen der folgenden Werte annehmen:

- `key`
  - : Dies ist ein "Schlüsselbild", das alle Informationen enthält, die zur Darstellung eines Bildes benötigt werden.
    Es kann ohne Bezugnahme auf andere Frames dekodiert werden.
- `delta`
  - : Dies ist ein "Delta-Frame", der Änderungen an einem Bild im Vergleich zu einem vorherigen Frame enthält.
    Der Frame kann nicht dekodiert werden, ohne Zugriff auf die referenzierten Frames zu haben.
- `empty`
  - : Dieser Frame enthält keine Daten.
    Dieser Wert ist unerwartet und kann darauf hindeuten, dass die Transformation eine Referenz auf Frames hält, nachdem sie transformiert und an [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) übergeben wurden (nachdem das Frame-Objekt zur Haupt-Thread-WebRTC-Pipeline zurückgeschickt wurde, werden keine Daten mehr vorhanden sein).

## Beispiele

Die Implementierung einer `transform()`-Funktion in einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` betrachten und den Transformationscode basierend darauf ändern, ob es sich um ein Schlüsselbild oder einen Delta-Frame handelt:

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
