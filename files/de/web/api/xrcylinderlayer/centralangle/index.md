---
title: "XRCylinderLayer: centralAngle Eigenschaft"
short-title: centralAngle
slug: Web/API/XRCylinderLayer/centralAngle
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`centralAngle`**-Eigenschaft der {{domxref("XRCylinderLayer")}}-Schnittstelle repräsentiert den Winkel in Radiant des sichtbaren Abschnitts des Zylinders.

## Wert

Eine Zahl, die den Winkel in Radiant des sichtbaren Abschnitts des Zylinders darstellt.

## Beispiele

### Ermitteln des zentralen Winkels einer Ebene

Die Methode {{domxref("XRWebGLBinding.createCylinderLayer()")}} erstellt eine Zylinderebene und ermöglicht es, einen `centralAngle` festzulegen. Die Eigenschaft `XRCylinder.centralAngle` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten zentralen Winkel zu ermitteln oder ihn auf einen neuen Wert zu setzen.

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

- {{domxref("XRCylinderLayer.aspectRatio")}}
- {{domxref("XRCylinderLayer.radius")}}
- {{jsxref("Math.PI")}}
