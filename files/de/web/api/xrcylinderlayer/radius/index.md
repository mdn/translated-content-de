---
title: "XRCylinderLayer: radius Eigenschaft"
short-title: radius
slug: Web/API/XRCylinderLayer/radius
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft des [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Interfaces repräsentiert den Radius des Zylinders.

## Wert

Eine Zahl, die den Radius des Zylinders darstellt.

## Beispiele

### Erhalten des Radius eines Layers

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinder-Schicht und ermöglicht es, einen `radius` zu spezifizieren. Die Eigenschaft `XRCylinder.radius` kann nach der Erstellung der Schicht verwendet werden, um den verwendeten Radius abzurufen oder auf einen neuen Wert zu setzen.

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
