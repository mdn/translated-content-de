---
title: "XRQuadLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRQuadLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft des [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Interfaces repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieses Beispiel positioniert die Ebene in zwei Metern Entfernung von `newSpace` mit einer `height` und `width` von 1,5 Metern.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

quadLayer.space = newSpace;
quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRQuadLayer.transform`](/de/docs/Web/API/XRQuadLayer/transform)
