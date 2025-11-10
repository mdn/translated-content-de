---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`**-Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces zeigt an, ob dieses Frame ein Schlüsselbild (key frame), ein Delta-Frame oder ein leeres Frame ist.

## Wert

Der Typ kann einen der folgenden Werte haben:

- `key`
  - : Dies ist ein "Schlüsselbild", das alle Informationen enthält, die benötigt werden, um ein Bild darzustellen.
    Es kann ohne Bezugnahme auf andere Frames dekodiert werden.
- `delta`
  - : Dies ist ein "Delta-Frame", das Änderungen an einem Bild im Verhältnis zu einem vorherigen Frame enthält.
    Das Frame kann nicht dekodiert werden, ohne Zugang zu den Frame(s) zu haben, auf die es sich bezieht.
- `empty`
  - : Dieses Frame enthält keine Daten.
    Dieser Wert ist unerwartet und kann darauf hindeuten, dass die Transformation eine Referenz zu Frames hält, nachdem sie transformiert und an [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) weitergeleitet wurden (nachdem das Worker-Seiten-Frame-Objekt zurück zur Haupt-Thread-WebRTC-Pipeline übertragen wurde, wird es keine Daten mehr haben).

## Beispiele

Die Implementierung einer `transform()`-Funktion in einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` betrachten und den Transformationscode basierend darauf ändern, ob es sich um ein Schlüsselbild oder ein Delta-Frame handelt:

```js
const transformer = new TransformStream({
  async transform(encodedFrame, controller) {
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
