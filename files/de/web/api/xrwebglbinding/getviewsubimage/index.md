---
title: "XRWebGLBinding: Methode getViewSubImage()"
short-title: getViewSubImage()
slug: Web/API/XRWebGLBinding/getViewSubImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getViewSubImage()`**-Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Schnittstelle gibt ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt zurück, das die WebGL-Textur für eine Ansicht repräsentiert.

## Syntax

```js-nolint
getViewSubImage(layer, view)
```

### Parameter

- `layer`
  - : Das [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer), das zum Rendern verwendet wird (um andere Schichttypen zu rendern, siehe [`XRWebGLBinding.getSubImage()`](/de/docs/Web/API/XRWebGLBinding/getSubImage)).
- `view`
  - : Die [`XRView`](/de/docs/Web/API/XRView), die zum Rendern verwendet wird.

### Rückgabewert

Ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt.

### Ausnahmen

Ein {{jsxref("TypeError")}} wird ausgelöst,

- wenn `layer` sich nicht im [Schicht-Array der Sitzung](/de/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array) befindet.

## Beispiele

### Rendern eines `XRProjectionLayer`

Das folgende Beispiel rendert ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) in eine Ansicht.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const layer = xrGlBinding.createProjectionLayer({});
const framebuffer = gl.createFramebuffer();

xrSession.updateRenderState({ layers: [layer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);

  for (const view in xrViewerPose.views) {
    const subImage = xrGlBinding.getViewSubImage(layer, view);
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.COLOR_ATTACHMENT0,
      gl.TEXTURE_2D,
      subImage.colorTexture,
      0,
    );
    gl.framebufferTexture2D(
      gl.FRAMEBUFFER,
      gl.DEPTH_ATTACHMENT,
      gl.TEXTURE_2D,
      subImage.depthStencilTexture,
      0,
    );
    const viewport = subImage.viewport;
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    // Render from the viewpoint of xrView
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)
