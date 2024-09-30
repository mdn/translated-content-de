---
title: "XREquirectLayer: transform-Eigenschaft"
short-title: transform
slug: Web/API/XREquirectLayer/transform
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`transform`**-Eigenschaft der [`XREquirectLayer`](/de/docs/Web/API/XREquirectLayer)-Schnittstelle repräsentiert den Versatz und die Orientierung relativ zum [`space`](/de/docs/Web/API/XREquirectLayer/space) der Ebene.

## Wert

Ein [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform).

## Beispiele

### Festlegen der Position der equirekten Ebene

Dieses Beispiel positioniert die Ebene zwei Meter vom Ursprung des `xrReferenceSpace` entfernt.

```js
const equirectLayer = xrGlBinding.createEquirectLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

equirectLayer.transform = new XRRigidTransform({ z: -2 });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform)
- [`XREquirectLayer.space`](/de/docs/Web/API/XREquirectLayer/space)
