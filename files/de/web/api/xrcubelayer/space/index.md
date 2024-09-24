---
title: "XRCubeLayer: space Eigenschaft"
short-title: space
slug: Web/API/XRCubeLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der {{domxref("XRCubeLayer")}}-Schnittstelle repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers.

## Wert

Ein {{domxref("XRSpace")}}.

## Beispiele

### Aktualisieren des space der Cube-Ebene

Die Methode {{domxref("XRWebGLBinding.createCubeLayer()")}} erstellt eine Cube-Ebene und erfordert, dass eine `space`-Eigenschaft angegeben wird. Die `XRCubeLayer.space`-Eigenschaft kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Raum abzurufen oder auf einen neuen zu setzen.

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

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
