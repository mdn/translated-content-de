---
title: "XRCylinderLayer: transform-Eigenschaft"
short-title: transform
slug: Web/API/XRCylinderLayer/transform
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`transform`**-Eigenschaft des {{domxref("XRCylinderLayer")}}-Interfaces repräsentiert den Versatz und die Orientierung relativ zum {{domxref("XRCylinderLayer.space", "space")}} der Schicht.

## Wert

Ein {{domxref("XRRigidTransform")}}.

## Beispiele

### Positionierung der Zylinderschicht

Dieser Beispielcode positioniert die Schicht zwei Meter vom Ursprung des `xrReferenceSpace` entfernt.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

cylinderLayer.transform = new XRRigidTransform({ z: -2 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRRigidTransform")}}
- {{domxref("XRCylinderLayer.space")}}
