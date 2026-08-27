---
title: "XRCylinderLayer: centralAngle-Eigenschaft"
short-title: centralAngle
slug: Web/API/XRCylinderLayer/centralAngle
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralAngle`**-Eigenschaft des [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Interfaces repräsentiert den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders.

## Wert

Eine Zahl, die den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders darstellt.

## Beispiele

### Abrufen des zentralen Winkels einer Schicht

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinderschicht und ermöglicht es Ihnen, einen `centralAngle` anzugeben. Die Eigenschaft `XRCylinder.centralAngle` kann nach der Erstellung der Schicht verwendet werden, um den verwendeten zentralen Winkel zu erhalten oder ihn auf einen neuen Wert zu setzen.

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
