---
title: "XRWebGLLayer: getViewport()-Methode"
short-title: getViewport()
slug: Web/API/XRWebGLLayer/getViewport
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewport()`**-Methode des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Interfaces gibt die [`XRViewport`](/de/docs/Web/API/XRViewport) zurück, die verwendet werden sollte, um die angegebene [`XRView`](/de/docs/Web/API/XRView) in die WebGL-Schicht zu rendern. Für WebXR-Geräte, die einen einzelnen Framebuffer für beide Augen verwenden, stellt das zurückgegebene Viewport den Bereich des Framebuffers dar, in den die Szene für das Auge gerendert werden sollte, das durch die Ansicht repräsentiert wird.

## Syntax

```js-nolint
getViewport(view)
```

### Parameter

- `view`
  - : Ein [`XRView`](/de/docs/Web/API/XRView)-Objekt, das die Ansicht angibt, für die der Viewport zurückgegeben werden soll.

### Rückgabewert

Ein [`XRViewport`](/de/docs/Web/API/XRViewport)-Objekt, das den Viewport darstellt, der das Zeichnen auf den Teil der Schicht beschränken wird, der der angegebenen `view` entspricht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `view` nicht in einem aktiven [`XRFrame`](/de/docs/Web/API/XRFrame) ist oder wenn sich `XRFrame` und der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nicht in derselben [WebXR-Sitzung](/de/docs/Web/API/XRSession) befinden.

## Beispiele

Dieses Beispiel zeigt teilweise, wie der Callback für die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Funktion aussehen könnte, wobei `getViewport()` verwendet wird, um den Viewport zu erhalten, sodass das Zeichnen auf den für das Auge vorgesehenen Bereich beschränkt werden kann, dessen Blickpunkt gerade gerendert wird.

Dies funktioniert, weil die Menge der von einem [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurückgegebenen Ansichten jeweils die Perspektive eines Auges auf die Szene darstellen. Da der Framebuffer in zwei Hälften geteilt ist, eine Hälfte für jedes Auge, stellt das Setzen des WebGL-Viewports so ein, dass es zum WebXR-Layer-Viewport passt, sicher, dass beim Rendern der Szene für die Pose des aktuellen Auges diese in die richtige Hälfte des Framebuffers gerendert wird.

```js
function drawFrame(time, frame) {
  const session = frame.session;

  const pose = frame.getViewerPose(mainReferenceSpace);

  if (pose) {
    const glLayer = session.renderState.baseLayer;
    gl.bindFramebuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

    gl.clearColor(0, 0, 0, 1.0);
    gl.clearDepth(1.0);
    gl.clear(gl.COLOR_BUFFER_BIT, gl.DEPTH_COLOR_BIT);

    for (const view of pose.views) {
      const viewport = glLayer.getViewport(view);
      gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

      /* Render the scene now */
    }
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
