---
title: "XRFrame: getDepthInformation()-Methode"
short-title: getDepthInformation()
slug: Web/API/XRFrame/getDepthInformation
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getDepthInformation()`**-Methode der {{domxref("XRFrame")}}-Schnittstelle gibt ein {{domxref("XRCPUDepthInformation")}}-Objekt zurück, das CPU-Tiefeninformationen für den aktiven und animierten Frame enthält.

## Syntax

```js-nolint
getDepthInformation(view)
```

### Parameter

- `view`
  - : Ein {{domxref("XRView")}}-Objekt, das von einer Betrachterpose abgeleitet wurde.

### Rückgabewert

Ein {{domxref("XRCPUDepthInformation")}}-Objekt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `"depth-sensing"` nicht in der Liste der aktivierten Funktionen für diese {{domxref("XRSession")}} enthalten ist.
- `InvalidStateError` {{domxref("DOMException")}}

  - : Wird ausgelöst, wenn:

    - der `XRFrame` weder aktiv noch animiert ist. Das Abrufen von Tiefeninformationen ist nur innerhalb des {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}}-Callbacks gültig.
    - die {{domxref("XRSession.depthUsage", "depthUsage")}} der Sitzung nicht `"cpu-optimized"` ist.

## Beispiele

### CPU-Tiefeninformationen abrufen

```js
// Stellen Sie sicher, dass Sie eine Sitzung mit aktivierter Tiefenerkennung anfordern
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["cpu-optimized", "gpu-optimized"],
    formatPreference: ["luminance-alpha", "float32"],
  },
});

// …

// Tiefeninformationen in einem aktiven und animierten Frame abrufen
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = frame.getDepthInformation(view);
      if (depthInformation) {
        // Machen Sie etwas mit den Tiefeninformationen
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
