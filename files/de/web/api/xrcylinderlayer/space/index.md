---
title: "XRCylinderLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRCylinderLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der Schnittstelle [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer) repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisierung des `space` der Zylinder-Ebene

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinder-Ebene und erfordert die Angabe einer `space`-Eigenschaft. Die Eigenschaft `XRCylinderLayer.space` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Raum zu erhalten oder ihn auf einen neuen festzulegen.

```js
const cylinderLayer = xrGlBinding.createCylinderLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

cylinderLayer.space = someOtherSpace;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer)
