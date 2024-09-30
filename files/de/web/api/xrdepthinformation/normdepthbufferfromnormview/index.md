---
title: "XRDepthInformation: normDepthBufferFromNormView-Eigenschaft"
short-title: normDepthBufferFromNormView
slug: Web/API/XRDepthInformation/normDepthBufferFromNormView
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ Eigenschaft **`normDepthBufferFromNormView`** des [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Interfaces enthält die 3D-geometrische Transformation, die angewendet werden muss, wenn auf den Tiefenpuffer zugegriffen wird.

## Wert

Eine [`XRRigidTransform`](/de/docs/Web/API/XRRigidTransform), die angewendet werden muss, wenn auf den Tiefenpuffer zugegriffen wird. Die Transformationsmatrix ändert das Koordinatensystem von normalisierten Ansichtskoordinaten zu normalisierten Tiefenpufferkoordinaten, die dann durch die `width` und `height` des Tiefenpuffers skaliert werden können, um die absoluten Tiefenpufferkoordinaten zu erhalten.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation) (CPU) oder [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation) (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte werden das `normDepthBufferFromNormView` des Tiefenpuffers enthalten, das Sie für weitere Berechnungen verwenden können.

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
