---
title: "XREquirectLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XREquirectLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert die räumliche Beziehung des Layers zur physikalischen Umgebung des Nutzers.

## Wert

Ein [`XRSpace`](/de/docs/Web/API/XRSpace).

## Beispiele

### Aktualisierung des Equirect-Layerspace

Die Methode [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer) erstellt einen Equirect-Layer und erfordert eine `space`-Eigenschaft. Die `XREquirectLayer.space`-Eigenschaft kann nach der Erstellung des Layers verwendet werden, um den verwendeten Space zu erhalten oder ihn auf einen neuen zu setzen.

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
