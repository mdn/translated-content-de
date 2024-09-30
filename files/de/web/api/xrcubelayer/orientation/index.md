---
title: "XRCubeLayer: orientation-Eigenschaft"
short-title: orientation
slug: Web/API/XRCubeLayer/orientation
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`orientation`**-Eigenschaft der [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Schnittstelle repräsentiert die Orientierung relativ zur `space`-Eigenschaft.

## Wert

Ein [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly).

## Beispiele

### Aktualisierung der Orientierung der Würfelschicht

Die Methode [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer) erstellt eine Würfelschicht und ermöglicht die Angabe einer `orientation`. Die Eigenschaft `XRCubeLayer.orientation` kann nach der Erstellung der Schicht verwendet werden, um die aktuelle Orientierung zu erhalten oder um sie auf eine neue festzulegen.

```js
const cubeLayer = xrGlBinding.createCubeLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
  orientation: DOMPointReadOnly.fromPoint({ x: 0.0, y: 0.0, z: 0.0, w: 1.0 }),
});

cubeLayer.orientation = someOtherPoint;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`DOMPointReadOnly`](/de/docs/Web/API/DOMPointReadOnly)
- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer)
