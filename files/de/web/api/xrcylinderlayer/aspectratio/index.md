---
title: "XRCylinderLayer: Eigenschaft aspectRatio"
short-title: aspectRatio
slug: Web/API/XRCylinderLayer/aspectRatio
l10n:
  sourceCommit: 1fc327ab47c4fc89eff6e1d05780babd720e4b13
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`aspectRatio`**-Eigenschaft der {{domxref("XRCylinderLayer")}}-Schnittstelle stellt das Verhältnis des sichtbaren Zylinderschnitts dar. Es ist das Verhältnis der Breite des sichtbaren Abschnitts des Zylinders zu seiner Höhe. Die Breite wird berechnet, indem der {{domxref("XRCylinderLayer.radius", "Radius")}} mit dem {{domxref("XRCylinderLayer.centralAngle", "Zentralwinkel")}} multipliziert wird.

## Wert

Eine Zahl, die das Verhältnis des sichtbaren Zylinderschnitts darstellt.

## Beispiele

### Abrufen des Seitenverhältnisses einer Ebene

Die Methode {{domxref("XRWebGLBinding.createCylinderLayer()")}} erstellt eine zylindrische Ebene und ermöglicht die Angabe eines `aspectRatio`. Die Eigenschaft `XRCylinder.aspectRatio` kann nach der Erstellung der Ebene verwendet werden, um das verwendete {{glossary("Seitenverhältnis")}} zu erhalten oder es auf ein neues festzulegen.

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

- {{domxref("XRCylinderLayer.centralAngle")}}
- {{domxref("XRCylinderLayer.radius")}}
