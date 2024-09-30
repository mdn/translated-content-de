---
title: "XRLayerEvent: layer-Eigenschaft"
short-title: layer
slug: Web/API/XRLayerEvent/layer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`layer`**-Eigenschaft des [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent)-Interfaces ist ein Verweis auf die [`XRLayer`](/de/docs/Web/API/XRLayer), die das Ereignis generiert hat.

## Wert

Eine [`XRLayer`](/de/docs/Web/API/XRLayer).

## Beispiele

### Verwendung der `layer`-Eigenschaft

In diesem Beispiel wird die `layer`-Eigenschaft verwendet, um das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekt zu erhalten, das das Ereignis gesendet hat.

```js
myLayer.addEventListener("redraw", (e) => {
  if (typeof e.layer === "XRQuadLayer") {
    // redraw quad layer
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRLayer`](/de/docs/Web/API/XRLayer)
