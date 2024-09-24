---
title: "XREquirectLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XREquirectLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der {{domxref("XREquirectLayer")}}-Schnittstelle repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Benutzers.

## Wert

Ein {{domxref("XRSpace")}}.

## Beispiele

### Aktualisierung des space einer equirect-Ebene

Die Methode {{domxref("XRWebGLBinding.createEquirectLayer()")}} erstellt eine equirect-Ebene und erfordert, dass eine `space`-Eigenschaft bereitgestellt wird. Die Eigenschaft `XREquirectLayer.space` kann nach der Erstellung der Ebene verwendet werden, um den verwendeten Raum zu erhalten oder um ihn auf einen neuen zu setzen.

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

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
