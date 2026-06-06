---
title: "XRVisibilityMaskChangeEvent: index-Eigenschaft"
short-title: index
slug: Web/API/XRVisibilityMaskChangeEvent/index
l10n:
  sourceCommit: 8330e7c1afd31d53ae12c3271e96d681bba9e223
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}{{SeeCompatTable}}

Die **`index`**-Schreibgeschützte Eigenschaft der [`XRVisibilityMaskChangeEvent`](/de/docs/Web/API/XRVisibilityMaskChangeEvent)-Schnittstelle gibt den Index der aktuellen [`XRView`](/de/docs/Web/API/XRView) im [`XRViewerPose.views`](/de/docs/Web/API/XRViewerPose/views)-Array an.

Bei einer Stereo-Ansicht gibt es zwei Ansichten im Array. Die `index`-Eigenschaft ermöglicht es Ihnen, die richtige Ansicht zur Neu-Rendern zu identifizieren, anstatt alle Ansichten unnötigerweise neu zu rendieren.

## Wert

Eine Zahl.

## Beispiele

Dieses Beispiel zeigt, wie Sie ein Anzeige-Update für eine bestimmte [`XRView`](/de/docs/Web/API/XRView) rendern könnten, indem Sie den `index`-Wert des Ereignisobjekts abfragen, wenn ein `visibilitymaskchange`-Ereignis ausgelöst wird.

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
