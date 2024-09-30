---
title: "XRWebGLLayer: getViewport()-Methode"
short-title: getViewport()
slug: Web/API/XRWebGLLayer/getViewport
l10n:
  sourceCommit: 6474155473cf570bbcb063e2c0a4df6d23697de6
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewport()`**-Methode der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)-Schnittstelle gibt den [`XRViewport`](/de/docs/Web/API/XRViewport) zurück, der verwendet werden sollte, um den angegebenen [`XRView`](/de/docs/Web/API/XRView) in die WebGL-Schicht zu rendern. Für WebXR-Geräte, die einen einzelnen Framebuffer für beide Augen verwenden, repräsentiert der zurückgegebene Viewport den Bereich des Framebuffers, in den die Szene für das durch die Ansicht dargestellte Auge gerendert werden soll.

## Syntax

```js-nolint
getViewport(view)
```

### Parameter

- `view`
  - : Ein [`XRView`](/de/docs/Web/API/XRView)-Objekt, das die Ansicht angibt, für die der Viewport zurückgegeben werden soll.

### Rückgabewert

Ein [`XRViewport`](/de/docs/Web/API/XRViewport)-Objekt, das den Viewport repräsentiert, der das Zeichnen auf den Teil der Schicht beschränkt, der der angegebenen `view` entspricht.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn entweder die angegebene `view` nicht in einem aktiven [`XRFrame`](/de/docs/Web/API/XRFrame) ist oder sich dieses `XRFrame` und die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) nicht in derselben [WebXR-Sitzung](/de/docs/Web/API/XRSession) befinden.

## Beispiele

Dieses Beispiel zeigt teilweise, wie der Callback für die [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame)-Funktion aussehen könnte, indem `getViewport()` verwendet wird, um den Viewport zu erhalten, sodass das Zeichnen auf den für das gerade gerenderte Auge vorgesehenen Bereich beschränkt werden kann.

Dies funktioniert, weil die durch ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) zurückgegebene Menge an Ansichten jeweils die Perspektive eines Auges auf die Szene darstellt. Da der Framebuffer in zwei Hälften geteilt ist, eine für jedes Auge, wird durch das Einstellen des WebGL-Viewports auf den Viewport der WebXR-Schicht sichergestellt, dass beim Rendern der Szene für die Pose des aktuellen Auges die Szene in die richtige Hälfte des Framebuffers gerendert wird.

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
