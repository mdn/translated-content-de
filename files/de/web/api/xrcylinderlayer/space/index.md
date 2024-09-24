---
title: "XRCylinderLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRCylinderLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der {{domxref("XRCylinderLayer")}}-Schnittstelle repräsentiert die räumliche Beziehung der Ebene zur physischen Umgebung des Nutzers.

## Wert

Ein {{domxref("XRSpace")}}.

## Beispiele

### Aktualisieren des Raumbezugs der Zylinderebene

Die Methode {{domxref("XRWebGLBinding.createCylinderLayer()")}} erstellt eine Zylinderebene und erfordert eine `space`-Eigenschaft. Die `XRCylinderLayer.space`-Eigenschaft kann nach der Erstellung der Ebene verwendet werden, um den genutzten Raum abzurufen oder auf einen neuen zu setzen.

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

- {{domxref("XRSpace")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
