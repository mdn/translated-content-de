---
title: "XRWebGLBinding: Methode getDepthInformation()"
short-title: getDepthInformation()
slug: Web/API/XRWebGLBinding/getDepthInformation
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getDepthInformation()`** Methode des {{domxref("XRWebGLBinding")}} Interface gibt ein {{domxref("XRWebGLDepthInformation")}} Objekt zurück, das WebGL-Tiefeninformationen enthält.

## Syntax

```js-nolint
getDepthInformation(view)
```

### Parameter

- `view`
  - : Ein {{domxref("XRView")}} Objekt, das aus einer Viewer-Pose erhalten wurde.

### Rückgabewert

Ein {{domxref("XRWebGLDepthInformation")}} Objekt.

### Ausnahmen

- `NotSupportedError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `"depth-sensing"` nicht in der Liste der aktivierten Features für diese {{domxref("XRSession")}} enthalten ist.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der `XRFrame` weder aktiv noch animiert ist. Das Abrufen von Tiefeninformationen ist nur innerhalb des {{domxref("XRSession.requestAnimationFrame()", "requestAnimationFrame()")}} Rückrufs gültig.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn die {{domxref("XRSession.depthUsage", "depthUsage")}} der Sitzung nicht `"gpu-optimized"` ist.

## Beispiele

### Abrufen von WebGL-Tiefeninformationen

```js
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
await gl.makeXRCompatible();

// Stellen Sie sicher, dass Sie eine Sitzung mit aktiviertem Tiefensensor anfordern
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["gpu-optimized"],
    formatPreference: ["luminance-alpha"],
  },
});

const glBinding = new XRWebGLBinding(session, gl);

// …

// Abrufen der Tiefeninformationen in einem aktiven und animierten Frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = glBinding.getDepthInformation(view);
      if (depthInformation) {
        // Etwas mit den Tiefeninformationen machen
        // gl.bindTexture(gl.TEXTURE_2D, depthInformation.texture);
        // …
      }
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRWebGLDepthInformation.texture")}}
