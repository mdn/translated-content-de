---
title: "XREquirectLayer: transform Eigenschaft"
short-title: transform
slug: Web/API/XREquirectLayer/transform
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`transform`**-Eigenschaft des {{domxref("XREquirectLayer")}}-Interfaces repräsentiert den Offset und die Orientierung relativ zum {{domxref("XREquirectLayer.space", "space")}} der Ebene.

## Wert

Ein {{domxref("XRRigidTransform")}}.

## Beispiele

### Positionierung der Equirekt-Schicht

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

- {{domxref("XRRigidTransform")}}
- {{domxref("XREquirectLayer.space")}}
