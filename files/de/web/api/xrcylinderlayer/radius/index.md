---
title: "XRCylinderLayer: radius-Eigenschaft"
short-title: radius
slug: Web/API/XRCylinderLayer/radius
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft der [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Schnittstelle repräsentiert den Radius des Zylinders.

## Wert

Eine Zahl, die den Radius des Zylinders darstellt.

## Beispiele

### Den Radius einer Ebene erhalten

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinder-Ebene und ermöglicht es Ihnen, einen `radius` zu spezifizieren. Die Eigenschaft `XRCylinder.radius` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Radius zu erhalten oder um ihn auf einen neuen Wert zu setzen.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 1200,
  viewPixelHeight: 600,
  centralAngle: (60 * Math.PI) / 180,
  aspectRatio: 2,
  radius: 2,
  transform: new XRRigidTransform(/* … */),
});

cylinderLayer.radius; // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCylinderLayer.aspectRatio`](/de/docs/Web/API/XRCylinderLayer/aspectRatio)
- [`XRCylinderLayer.centralAngle`](/de/docs/Web/API/XRCylinderLayer/centralAngle)
- {{jsxref("Math.PI")}}
