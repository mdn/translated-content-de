---
title: "XRQuadLayer: space-Eigenschaft"
short-title: space
slug: Web/API/XRQuadLayer/space
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`space`**-Eigenschaft der {{domxref("XRQuadLayer")}}-Schnittstelle repräsentiert die räumliche Beziehung der Ebene mit der physischen Umgebung des Benutzers.

## Wert

Ein {{domxref("XRSpace")}}.

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieses Beispiel positioniert die Ebene zwei Meter entfernt von `newSpace` mit einer `height` und `width` von 1,5 Metern.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

quadLayer.space = newSpace;
quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSpace")}}
- {{domxref("XRQuadLayer.transform")}}
