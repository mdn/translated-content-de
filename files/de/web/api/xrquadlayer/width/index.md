---
title: "XRQuadLayer: width Eigenschaft"
short-title: width
slug: Web/API/XRQuadLayer/width
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`width`**-Eigenschaft des [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Interfaces gibt die Breite der Ebene in Metern an.

## Wert

Eine Zahl, die die Breite der Ebene in Metern darstellt.

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieser Beispielcode positioniert die Ebene zwei Meter vom Ursprung des `xrReferenceSpace` mit einer `height` und `width` von 1,5 Metern entfernt.

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

- [`XRQuadLayer.height`](/de/docs/Web/API/XRQuadLayer/height)
