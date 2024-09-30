---
title: "XRCylinderLayer: Eigenschaft radius"
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

### Abrufen des Radius eines Layers

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erzeugt einen Zylinder-Layer und ermöglicht es, einen `radius` anzugeben. Die Eigenschaft `XRCylinder.radius` kann nach der Layer-Erstellung verwendet werden, um den verwendeten Radius zu erhalten oder um ihn auf einen neuen zu setzen.

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
