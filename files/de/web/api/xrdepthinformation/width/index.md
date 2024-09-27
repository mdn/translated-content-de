---
title: "XRDepthInformation: Breite-Eigenschaft"
short-title: width
slug: Web/API/XRDepthInformation/width
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`width`**-Eigenschaft des [`XRDepthInformation`](/de/docs/Web/API/XRDepthInformation)-Interfaces enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Wert

Eine ganze Zahl ohne Vorzeichen.

## Beispiele

Verwenden Sie [`XRFrame.getDepthInformation()`](/de/docs/Web/API/XRFrame/getDepthInformation) (CPU) oder [`XRWebGLBinding.getDepthInformation()`](/de/docs/Web/API/XRWebGLBinding/getDepthInformation) (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte enthalten die `width` des Tiefenpuffers, die Sie für weitere Berechnungen nutzen können.

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
