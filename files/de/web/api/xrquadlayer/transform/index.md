---
title: "XRQuadLayer: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRQuadLayer/transform
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`transform`**-Eigenschaft des [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Interfaces repräsentiert den Versatz und die Orientierung relativ zum [`space`](/de/docs/Web/API/XRQuadLayer/space) der Ebene.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform).

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieser Beispielcode positioniert die Ebene zwei Meter vom Ursprung des `xrReferenceSpace` entfernt, mit einer `height` und `width` von jeweils 1,5 Metern.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)
- [`XRQuadLayer.space`](/de/docs/Web/API/XRQuadLayer/space)
