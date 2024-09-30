---
title: "XREquirectLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XREquirectLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert die räumliche Beziehung des Layers zur physischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisieren des `equirect` Layers space

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erzeugt einen `equirect` Layer und erfordert, dass eine `space`-Eigenschaft bereitgestellt wird. Die Eigenschaft `XREquirectLayer.space` kann nach der Erstellung des Layers verwendet werden, um den verwendeten Raum abzurufen oder ihn auf einen neuen zu setzen.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

equirectLayer.space = someOtherSpace;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSpace`](/de/docs/Web/API/XRSpace)
- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer)
