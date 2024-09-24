---
title: "XRDepthInformation: width-Eigenschaft"
short-title: Breite
slug: Web/API/XRDepthInformation/width
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die _schreibgeschützte_ **`width`**-Eigenschaft der {{DOMxRef("XRDepthInformation")}}-Schnittstelle enthält die Breite des Tiefenpuffers (Anzahl der Spalten).

## Wert

Ein unsignierter ganzzahliger Wert.

## Beispiele

Verwenden Sie {{domxref("XRFrame.getDepthInformation()")}} (CPU) oder {{domxref("XRWebGLBinding.getDepthInformation()")}} (WebGL), um Tiefeninformationen zu erhalten. Die zurückgegebenen Objekte enthalten die `width` des Tiefenpuffers, die Sie für weitere Berechnungen verwenden können.

```js
const smallerDepthDimension = Math.min(depthInfo.width, depthInfo.height);
const largerDepthDimension = Math.max(depthInfo.width, depthInfo.height);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
