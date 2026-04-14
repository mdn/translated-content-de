---
title: "RTCEncodedVideoFrame: type-Eigenschaft"
short-title: type
slug: Web/API/RTCEncodedVideoFrame/type
l10n:
  sourceCommit: 97dd70e4dd995c49c25719371d84b6b5aaaac940
---

{{APIRef("WebRTC")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte **`type`**-Eigenschaft des [`RTCEncodedVideoFrame`](/de/docs/Web/API/RTCEncodedVideoFrame)-Interfaces gibt an, ob dieser Frame ein Schlüsselbild oder ein Delta-Bild ist.

## Wert

Der Typ kann einen der folgenden Werte haben:

- `key`
  - : Dies ist ein "Schlüsselbild", das alle Informationen enthält, die benötigt werden, um ein Bild darzustellen.
    Es kann ohne Bezugnahme auf andere Frames decodiert werden.
- `delta`
  - : Dies ist ein "Delta-Bild", das Änderungen an einem Bild relativ zu einem vorherigen Frame enthält.
    Der Frame kann nicht ohne Zugang zu dem/den referenzierten Frame(s) decodiert werden.

## Beispiele

Die Implementierung einer `transform()`-Funktion in einer [WebRTC Encoded Transform](/de/docs/Web/API/WebRTC_API/Using_Encoded_Transforms) kann den `type` betrachten und den Transformcode basierend darauf ändern, ob es sich um ein Schlüsselbild oder ein Delta-Bild handelt:

```js
const transformer = new TransformStream({
  async transform(encodedFrame, controller) {
    if (encodedFrame.type === "key") {
      // Apply key frame transformation
    } else {
      // Apply delta frame transformation
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
