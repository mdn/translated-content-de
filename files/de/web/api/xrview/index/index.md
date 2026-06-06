---
title: "XRView: index-Eigenschaft"
short-title: index
slug: Web/API/XRView/index
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`index`** Schreibgeschützt-Eigenschaft der [`XRView`](/de/docs/Web/API/XRView)-Schnittstelle gibt den Index der aktuellen `XRView` im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array an.

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
