---
title: "XRCubeLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRCubeLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Schnittstelle repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisierung des Bereichs der Würfelebene

Die Methode [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer) erstellt eine Würfelebene und erfordert eine `space`-Eigenschaft, die bereitgestellt werden muss. Die `XRCubeLayer.space`-Eigenschaft kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Bereich abzurufen oder ihn auf einen neuen einzustellen.

```js
const cubeLayer = xrGlBinding.createCubeLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

cubeLayer.space = someOtherSpace;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer)
