---
title: "XRQuadLayer: width-Eigenschaft"
short-title: Breite
slug: Web/API/XRQuadLayer/width
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`width`**-Eigenschaft der {{domxref("XRQuadLayer")}}-Schnittstelle repräsentiert die Breite der Schicht in Metern.

## Wert

Eine Zahl, die die Breite der Schicht in Metern darstellt.

## Beispiele

### Festlegen der Dimension und Position einer Schicht

Dieser Beispielcode positioniert die Schicht zwei Meter vom Ursprung des `xrReferenceSpace` mit einer `height` und `width` von 1,5 Metern entfernt.

```js
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRQuadLayer.height")}}
