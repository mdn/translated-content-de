---
title: "XRCylinderLayer: Eigenschaft radius"
short-title: radius
slug: Web/API/XRCylinderLayer/radius
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`radius`**-Eigenschaft der {{domxref("XRCylinderLayer")}}-Schnittstelle repräsentiert den Radius des Zylinders.

## Wert

Eine Zahl, die den Radius des Zylinders darstellt.

## Beispiele

### Ermitteln des Radius eines Layers

Die Methode {{domxref("XRWebGLBinding.createCylinderLayer()")}} erstellt einen Zylinder-Layer und erlaubt die Angabe eines `radius`. Die Eigenschaft `XRCylinder.radius` kann nach der Erstellung des Layers verwendet werden, um den verwendeten Radius abzurufen oder ihn auf einen neuen Wert zu setzen.

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

- {{domxref("XRCylinderLayer.aspectRatio")}}
- {{domxref("XRCylinderLayer.centralAngle")}}
- {{jsxref("Math.PI")}}
