---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 3dd7df0af3b0ada1a7c5784cc2bc5448adcda8af
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`type`** schreibgeschützte Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces gibt an, ob dieser Frame ein Schlüsselbild (key frame), ein Delta-Bild oder ein leerer Frame ist.

## Wert

Der Typ kann einen der folgenden Werte haben:

- `key`
  - : Dies ist ein "Schlüsselbild", das alle Informationen enthält, die zum Rendern eines Bildes erforderlich sind.
    Es kann dekodiert werden, ohne dass auf andere Frames verwiesen wird.
- `delta`
  - : Dies ist ein "Delta-Bild", das Änderungen an einem Bild relativ zu einem vorherigen Frame enthält.
    Der Frame kann nicht dekodiert werden, ohne Zugriff auf den/die referenzierten Frame(s).
- `empty`
  - : Dieser Frame enthält keine Daten.
    Dieser Wert ist unerwartet und kann darauf hinweisen, dass die Transformation einen Verweis auf Frames hält, nachdem sie transformiert und an [`RTCRtpScriptTransformer.writable`](/de/docs/Web/API/RTCRtpScriptTransformer/writable) weitergeleitet wurden (nachdem sie zurück zur Hauptthread-WebRTC-Pipeline transferiert wurden, wird das Frame-Objekt der Workerseite keine Daten enthalten).

## Beispiele

Die Implementierung einer `transform()`-Funktion in einem [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` überprüfen und den Transformationscode anpassen, je nachdem, ob es sich um ein Schlüsselbild oder einen Delta-Frame handelt:

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

- [Using WebRTC Encoded Transforms](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms)
