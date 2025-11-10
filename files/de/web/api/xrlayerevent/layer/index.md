---
title: "XRLayerEvent: layer-Eigenschaft"
short-title: layer
slug: Web/API/XRLayerEvent/layer
l10n:
  sourceCommit: 364a4d02b10854ab7cef4ff4b0ec3616d4e1c8ab
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`layer`**-Eigenschaft des [`XRLayerEvent`](/de/docs/Web/API/XRLayerEvent)-Interfaces ist eine Referenz auf das [`XRLayer`](/de/docs/Web/API/XRLayer), das das Ereignis erzeugt hat.

## Wert

Ein [`XRLayer`](/de/docs/Web/API/XRLayer).

## Beispiele

### Verwendung der `layer`-Eigenschaft

In diesem Beispiel wird die `layer`-Eigenschaft verwendet, um das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekt zu erhalten, das das Ereignis gesendet hat.

```js
myLayer.addEventListener("redraw", (e) => {
  if (e.layer instanceof XRQuadLayer) {
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
