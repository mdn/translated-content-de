---
title: "XRFrame: `getDepthInformation()` Methode"
short-title: getDepthInformation()
slug: Web/API/XRFrame/getDepthInformation
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getDepthInformation()`** Methode der [`XRFrame`](/de/docs/Web/API/XRFrame)-Schnittstelle gibt ein [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)-Objekt zurück, das CPU-Tiefeninformationen für den aktiven und animierten Frame enthält.

## Syntax

```js-nolint
getDepthInformation(view)
```

### Parameter

- `view`
  - : Ein [`XRView`](/de/docs/Web/API/XRView)-Objekt, das von einer Betrachterpose erhalten wurde.

### Rückgabewert

Ein [`XRCPUDepthInformation`](/de/docs/Web/API/XRCPUDepthInformation)-Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `"depth-sensing"` nicht in der Liste der aktivierten Funktionen für diese [`XRSession`](/de/docs/Web/API/XRSession) enthalten ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn:
    - das `XRFrame` weder aktiv noch animiert ist. Das Abrufen von Tiefeninformationen ist nur innerhalb des [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Callbacks gültig.
    - die [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) der Sitzung nicht `"cpu-optimized"` ist.

## Beispiele

### Abrufen von CPU-Tiefeninformationen

```js
// Make sure to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});

// …

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = frame.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
        renderDepth(depthInformation);
      }
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
