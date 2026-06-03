---
title: "XRView: index-Eigenschaft"
short-title: index
slug: Web/API/XRView/index
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`index`**-Eigenschaft der [`XRView`](/de/docs/Web/API/XRView)-Schnittstelle ist schreibgeschützt und zeigt den Index der aktuellen `XRView` im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array an.

## Wert

Eine Zahl.

## Beispiele

### Grundlegende Verwendung

```js
console.log(xrView.index);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)
- [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)
