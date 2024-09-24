---
title: "XRQuadLayer: Eigenschaft transform"
short-title: transform
slug: Web/API/XRQuadLayer/transform
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`transform`**-Eigenschaft der {{domxref("XRQuadLayer")}}-Schnittstelle repräsentiert den Versatz und die Orientierung relativ zum {{domxref("XRQuadLayer.space", "Raum")}} der Ebene.

## Wert

Ein {{domxref("XRRigidTransform")}}.

## Beispiele

### Festlegen der Dimension und Position einer Ebene

Dieses Beispiel positioniert die Ebene zwei Meter vom Ursprung des `xrReferenceSpace` entfernt mit einer `Höhe` und `Breite` von 1,5 Metern.

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

- {{domxref("XRRigidTransform")}}
- {{domxref("XRQuadLayer.space")}}
