---
title: "XRCylinderLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRCylinderLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft des [`XRCylinderLayer`](/de/docs/Web/API/XRCylinderLayer)-Interfaces repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisierung des Raumbezugs der Zylinderebene

Die Methode [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer) erstellt eine Zylinderebene und erfordert die Bereitstellung einer `space`-Eigenschaft. Die `XRCylinderLayer.space`-Eigenschaft kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Raum zu erhalten oder um ihn auf einen neuen zu setzen.

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
