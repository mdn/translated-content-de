---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 7cf04da4f63ea96edfddde0a74ac0d0b1bc4d12e
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`**-Eigenschaft des {{domxref("RTCEncodedVideoFrame")}} Interfaces gibt an, ob dieser Frame ein Schlüsselbild, ein Delta-Frame oder ein leerer Frame ist.

## Wert

Der Typ kann einen der folgenden Werte haben:

- `key`
  - : Dies ist ein "Schlüsselbild", das alle Informationen enthält, die erforderlich sind, um ein Bild darzustellen.
    Es kann ohne Bezugnahme auf andere Frames dekodiert werden.
- `delta`
  - : Dies ist ein "Delta-Frame", das Änderungen an einem Bild relativ zu einem vorherigen Frame enthält.
    Der Frame kann nicht dekodiert werden, ohne Zugriff auf die referenzierten Frame(s) zu haben.
- `empty`
  - : Dieser Frame enthält keine Daten.
    Dieser Wert ist unerwartet und kann darauf hindeuten, dass die Transformation nach der Transformation noch eine Referenz zu Frames hält und an {{domxref("RTCRtpScriptTransformer.writable")}} übergeben wurde (nach der Rückübertragung in die Haupt-Thread-WebRTC-Pipeline wird das Worker-Seiten-Frame-Objekt keine Daten haben).

## Beispiele

Die Implementierung einer `transform()`-Funktion in einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` betrachten und den Transformationscode basierend darauf modifizieren, ob es sich um ein Schlüsselbild oder ein Delta-Frame handelt:

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
