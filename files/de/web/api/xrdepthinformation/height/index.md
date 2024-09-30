---
title: "XRDepthInformation: height Eigenschaft"
short-title: height
slug: Web/API/XRDepthInformation/height
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`height`**-Eigenschaft des [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Interfaces enthält die Höhe des Tiefenpuffers (Anzahl der Zeilen).

## Wert

Ein nicht signierter Long-Integer.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation) (CPU) oder [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation) (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte enthalten die `height` des Tiefenpuffers, die Sie für weitere Berechnungen verwenden können.

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
