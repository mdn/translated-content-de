---
title: "XRCylinderLayer: Eigenschaft centralAngle"
short-title: centralAngle
slug: Web/API/XRCylinderLayer/centralAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralAngle`** Eigenschaft der [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer) Schnittstelle stellt den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders dar.

## Wert

Eine Zahl, die den Winkel in Bogenmaß des sichtbaren Abschnitts des Zylinders darstellt.

## Beispiele

### Ermitteln des zentralen Winkels einer Ebene

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinderebene und ermöglicht es, einen `centralAngle` anzugeben. Die Eigenschaft `XRCylinder.centralAngle` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten zentralen Winkel zu ermitteln oder um ihn auf einen neuen Wert zu setzen.

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
