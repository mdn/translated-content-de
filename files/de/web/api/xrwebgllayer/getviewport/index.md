---
title: "XRWebGLLayer: getViewport()-Methode"
short-title: getViewport()
slug: Web/API/XRWebGLLayer/getViewport
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getViewport()`**-Methode des {{domxref("XRWebGLLayer")}}-Interfaces gibt den {{domxref("XRViewport")}} zurück, der verwendet werden sollte, um den angegebenen {{domxref("XRView")}} in die WebGL-Schicht zu rendern. Für WebXR-Geräte, die einen einzigen Framebuffer für beide Augen verwenden, stellt das zurückgegebene Viewport die Region des Framebuffers dar, in die die Szene für das Auge, das durch den View dargestellt wird, gerendert werden soll.

## Syntax

```js-nolint
getViewport(view)
```

### Parameter

- `view`
  - : Ein {{domxref("XRView")}}-Objekt, das den View angibt, für den das Viewport zurückgegeben werden soll.

### Rückgabewert

Ein {{domxref("XRViewport")}}-Objekt, das das Viewport repräsentiert, das das Zeichnen auf den Teil der Schicht beschränken wird, der dem angegebenen `view` entspricht.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn entweder der angegebene `view` nicht in einem aktiven {{domxref("XRFrame")}} ist oder wenn dieses `XRFrame` und das {{domxref("XRWebGLLayer")}} nicht Teil derselben [WebXR-Sitzung](/de/docs/Web/API/XRSession) sind.

## Beispiele

Dieses Beispiel zeigt teilweise, wie der Callback für die {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}}-Funktion aussehen könnte, wobei `getViewport()` verwendet wird, um das Viewport zu erhalten, damit das Zeichnen auf den Bereich begrenzt werden kann, der für das Auge vorgesehen ist, dessen Ansicht derzeit gerendert wird.

Dies funktioniert, weil das Set von Ansichten, das von einem {{domxref("XRViewerPose")}} zurückgegeben wird, jeweils die Perspektive eines Auges auf die Szene darstellt. Da der Framebuffer in der Mitte geteilt ist, die eine Hälfte für jedes Auge, wird das Einstellen des WebGL-Viewports, um das WebXR-Layer-Viewport zu entsprechen, sicherstellen, dass beim Rendern der Szene für die aktuelle Augenpose es in die richtige Hälfte des Framebuffers gerendert wird.

**<<<--- Link zu entsprechendem Abschnitt im Artikel Kameras und Ansichten hinzufügen --->>>**

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
