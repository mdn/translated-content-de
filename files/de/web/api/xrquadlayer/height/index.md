---
title: "XRQuadLayer: height-Eigenschaft"
short-title: height
slug: Web/API/XRQuadLayer/height
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`height`**-Eigenschaft der [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer)-Schnittstelle repräsentiert die Höhe der Ebene in Metern.

## Wert

Eine Zahl, die die Höhe der Ebene in Metern darstellt.

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieser Beispielcode positioniert die Ebene zwei Meter vom Ursprung des `xrReferenceSpace` entfernt mit einer `height` und `width` von 1,5 Metern.

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

- [`XRQuadLayer.width`](/de/docs/Web/API/XRQuadLayer/width)
