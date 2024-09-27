---
title: "XRCylinderLayer: centralAngle-Eigenschaft"
short-title: centralAngle
slug: Web/API/XRCylinderLayer/centralAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralAngle`**-Eigenschaft der [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Schnittstelle repräsentiert den Winkel in Radianten des sichtbaren Abschnitts des Zylinders.

## Wert

Eine Zahl, die den Winkel in Radianten des sichtbaren Abschnitts des Zylinders darstellt.

## Beispiele

### Abrufen des zentralen Winkels eines Layers

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt einen Zylinder-Layer und ermöglicht es, einen `centralAngle` anzugeben. Die Eigenschaft `XRCylinder.centralAngle` kann nach der Layer-Erstellung verwendet werden, um den verwendeten zentralen Winkel zu erhalten oder ihn auf einen neuen zu setzen.

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

cylinderLayer.centralAngle; // 1.0471975511965976
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCylinderLayer.aspectRatio`](/de/docs/Web/API/XRCylinderLayer/aspectRatio)
- [`XRCylinderLayer.radius`](/de/docs/Web/API/XRCylinderLayer/radius)
- {{jsxref("Math.PI")}}
