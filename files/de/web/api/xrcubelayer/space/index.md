---
title: "XRCubeLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRCubeLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft des [`XRCubeLayer`](/de/docs/Web/API/XRCubeLayer)-Interfaces repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisieren des `space` einer Würfelebene

Die Methode [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer) erstellt eine Würfelebene und erfordert, dass eine `space`-Eigenschaft angegeben wird. Die `XRCubeLayer.space`-Eigenschaft kann nach der Erstellung der Ebene verwendet werden, um den verwendeten `space` abzurufen oder um ihn auf einen neuen zu setzen.

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
