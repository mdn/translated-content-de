---
title: "XRWebGLBinding: getDepthInformation() Methode"
short-title: getDepthInformation()
slug: Web/API/XRWebGLBinding/getDepthInformation
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getDepthInformation()`** Methode des [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding) Interfaces gibt ein [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation) Objekt zurück, das WebGL-Tiefeninformationen enthält.

## Syntax

```js-nolint
getDepthInformation(view)
```

### Parameter

- `view`
  - : Ein [`XRView`](/de/docs/Web/API/XRView) Objekt, das aus einer Betrachterpose erhalten wurde.

### Rückgabewert

Ein [`XRWebGLDepthInformation`](/de/docs/Web/API/XRWebGLDepthInformation) Objekt.

### Ausnahmen

- `NotSupportedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `"depth-sensing"` nicht in der Liste der aktivierten Funktionen für diese [`XRSession`](/de/docs/Web/API/XRSession) enthalten ist.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn das `XRFrame` nicht aktiv oder animiert ist. Das Abrufen von Tiefeninformationen ist nur innerhalb des [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) Rückrufs gültig.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die [`depthUsage`](/de/docs/Web/API/XRSession/depthUsage) der Sitzung nicht `"gpu-optimized"` ist.

## Beispiele

### Abrufen von WebGL-Tiefeninformationen

```js
const canvasElement = document.querySelector(".output-canvas");
const gl = canvasElement.getContext("webgl");
await gl.makeXRCompatible();

// Make sure to request a session with depth-sensing enabled
const session = navigator.xr.requestSession("immersive-ar", {
  requiredFeatures: ["depth-sensing"],
  depthSensing: {
    usagePreference: ["gpu-optimized"],
    formatPreference: ["luminance-alpha"],
  },
});

const glBinding = new XRWebGLBinding(session, gl);

// …

// Obtain depth information in an active and animated frame
function rafCallback(time, frame) {
  session.requestAnimationFrame(rafCallback);
  const pose = frame.getViewerPose(referenceSpace);
  if (pose) {
    for (const view of pose.views) {
      const depthInformation = glBinding.getDepthInformation(view);
      if (depthInformation) {
        // Do something with the depth information
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

- [`XRWebGLDepthInformation.texture`](/de/docs/Web/API/XRWebGLDepthInformation/texture)
