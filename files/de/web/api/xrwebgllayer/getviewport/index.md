---
title: "XRWebGLLayer: getViewport()-Methode"
short-title: getViewport()
slug: Web/API/XRWebGLLayer/getViewport
l10n:
  sourceCommit: 6474155473cf570bbcb063e2c0a4df6d23697de6
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`getViewport()`** des [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Interfaces gibt den [`XRViewport`](/de/docs/Web/API/XRViewport) zurück, der verwendet werden sollte, um die angegebene [`XRView`](/de/docs/Web/API/XRView) in die WebGL-Schicht zu rendern. Für WebXR-Geräte, die einen einzelnen Framebuffer für das linke und rechte Auge verwenden, stellt der zurückgegebene Viewport den Bereich des Framebuffers dar, in den die Szene für das vom View dargestellte Auge gerendert werden soll.

## Syntax

```js-nolint
getViewport(view)
```

### Parameter

- `view`
  - : Ein [`XRView`](/de/docs/Web/API/XRView)-Objekt, das die Ansicht angibt, für die der Viewport zurückgegeben werden soll.

### Rückgabewert

Ein [`XRViewport`](/de/docs/Web/API/XRViewport)-Objekt, das den Viewport darstellt, welcher das Zeichnen auf den Teil der Schicht beschränkt, der der angegebenen `view` entspricht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `view` nicht in einem aktiven [`XRFrame`](/de/docs/Web/API/XRFrame) ist oder wenn das `XRFrame` und der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nicht Teil derselben [WebXR-Sitzung](/de/docs/Web/API/XRSession) sind.

## Beispiele

Dieses Beispiel zeigt teilweise, wie der Callback für die Funktion [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) aussehen könnte. Dabei wird `getViewport()` verwendet, um den Viewport zu erhalten, sodass das Zeichnen auf den Bereich beschränkt wird, der für das aktuell gerenderte Auge vorgesehen ist.

Dies funktioniert, weil die Menge der von einem [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurückgegebenen Ansichten jeweils die Perspektive eines Auges auf die Szene darstellen. Da der Framebuffer in der Mitte geteilt ist, eine Hälfte für jedes Auge, wird durch das Setzen des WebGL-Viewports entsprechend dem Viewport der WebXR-Schicht sichergestellt, dass beim Rendern der Szene für die Pose des aktuellen Auges in die richtige Hälfte des Framebuffers gerendert wird.

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
