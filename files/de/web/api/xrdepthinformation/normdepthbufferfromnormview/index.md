---
title: "XRDepthInformation: normDepthBufferFromNormView-Eigenschaft"
short-title: normDepthBufferFromNormView
slug: Web/API/XRDepthInformation/normDepthBufferFromNormView
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`normDepthBufferFromNormView`**-Eigenschaft der {{DOMxRef("XRDepthInformation")}}-Schnittstelle enthält die 3D-geometrische Transformation, die angewendet werden muss, wenn in den Tiefenpuffer indiziert wird.

## Wert

Ein {{domxref("XRRigidTransform")}}, der angewendet werden muss, wenn in den Tiefenpuffer indiziert wird. Die Transformation, die die Matrix darstellt, ändert das Koordinatensystem von normalisierten Ansichtskoordinaten zu normalisierten Tiefenpufferkoordinaten, die dann durch die `Breite` und `Höhe` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpufferkoordinaten zu erhalten.

## Beispiele

Verwenden Sie {{domxref("XRFrame.getDepthInformation()")}} (CPU) oder {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte werden das `normDepthBufferFromNormView` des Tiefenpuffers enthalten, das Sie für weitere Berechnungen verwenden können.

```js
const normDepthFromNormViewMatrix =
  depthData.normDepthBufferFromNormView.matrix;
const normViewFromNormDepth =
  depthData.normDepthBufferFromNormView.inverse.matrix;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
