---
title: "XRVisibilityMaskChangeEvent: index-Eigenschaft"
short-title: index
slug: Web/API/XRVisibilityMaskChangeEvent/index
l10n:
  sourceCommit: 15e12ff9faca3923ffb811d601ab589f4b2918e0
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die schreibgeschützte **`index`**-Eigenschaft der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle gibt den Index der aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array an.

Bei einer stereoskopischen Ansicht gibt es zwei Ansichten im Array. Die `index`-Eigenschaft ermöglicht es Ihnen, die korrekte Ansicht zum Neurendern zu identifizieren, anstatt alle Ansichten unnötig neu rendern zu müssen.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie Sie möglicherweise ein Display-Update für eine bestimmte [`XRView`](/de/docs/Web/API/XRView) rendern, indem Sie den `index`-Wert des Ereignisobjekts abfragen, wenn ein `visibilitymaskchange`-Ereignis ausgelöst wird.

```js
xrSession.addEventListener("visibilitymaskchange", (e) => {
  renderNewView(e.index);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)
- [`XRFrame.getViewerPose()`](/de/docs/Web/API/XRFrame/getViewerPose)
