---
title: "XRCylinderLayer: aspectRatio-Eigenschaft"
short-title: aspectRatio
slug: Web/API/XRCylinderLayer/aspectRatio
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`aspectRatio`**-Eigenschaft der [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Schnittstelle repräsentiert das Verhältnis des sichtbaren Zylinderabschnitts. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders, geteilt durch seine Höhe. Die Breite wird berechnet, indem der [`radius`](/de/docs/Web/API/XRCylinderLayer/radius) mit dem [`centralAngle`](/de/docs/Web/API/XRCylinderLayer/centralAngle) multipliziert wird.

## Wert

Eine Zahl, die das Verhältnis des sichtbaren Zylinderabschnitts darstellt.

## Beispiele

### Abrufen des Aspect Ratios einer Ebene

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinderschicht und ermöglicht es, ein `aspectRatio` anzugeben. Die Eigenschaft `XRCylinder.aspectRatio` kann nach der Erstellung der Ebene verwendet werden, um das verwendete {{Glossary("aspect_ratio", "Seitenverhältnis")}} abzurufen oder es auf ein neues zu setzen.

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

cylinderLayer.aspectRatio; // 2
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRCylinderLayer.centralAngle`](/de/docs/Web/API/XRCylinderLayer/centralAngle)
- [`XRCylinderLayer.radius`](/de/docs/Web/API/XRCylinderLayer/radius)
