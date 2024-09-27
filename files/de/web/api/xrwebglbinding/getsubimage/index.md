---
title: "XRWebGLBinding: getSubImage()-Methode"
short-title: getSubImage()
slug: Web/API/XRWebGLBinding/getSubImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getSubImage()`**-Methode der [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Schnittstelle gibt ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt zurück, das die zu rendernde WebGL-Textur repräsentiert.

## Syntax

```js-nolint
getSubImage(layer, frame)
getSubImage(layer, frame, eye)
```

### Parameter

- `layer`
  - : Der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer), der zum Rendern verwendet werden soll (kann alle Arten von `XRCompositionLayer`-Objekten außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) sein, siehe [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage) für das Rendern von Projektionsschichten).
- `frame`
  - : Der [`XRFrame`](/de/docs/Web/API/XRFrame)-Frame, der zum Rendern verwendet werden soll.
- `eye` {{optional_inline}}
  - : Ein optionales [`XRView.eye`](/de/docs/Web/API/XRView/eye), das angibt, welches Auge der Ansicht zum Rendern verwendet werden soll. Mögliche Werte:
    - `left`
      - : Die [`XRView`](/de/docs/Web/API/XRView) repräsentiert den Blickwinkel des linken Auges des Betrachters.
    - `right`
      - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
    - `none`
      - : Die Ansicht beschreibt eine monokulare Sicht oder repräsentiert ansonsten nicht den Blickwinkel eines bestimmten Auges. Standardmäßig `none`.

### Rückgabewert

Ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt.

### Ausnahmen

Ein {{jsxref("TypeError")}} wird ausgelöst,

- wenn `layer` nicht im [Session-`layer`-Array](/de/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array) enthalten ist.
- wenn `layer` ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) ist.
- wenn die [`layout`](/de/docs/Web/API/XRCompositionLayer/layout)-Eigenschaft des Layers `default` ist.
- wenn die [`layout`](/de/docs/Web/API/XRCompositionLayer/layout)-Eigenschaft des Layers `stereo` ist und `eye` `none` ist.

## Beispiele

### Rendern eines `XRQuadLayer`

Das folgende Beispiel rendert einen [`XRQuadLayer`](/de/docs/Web/API/XRQuadLayer).

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

// Position 2 meters away from the origin with a width and height of 1.5 meters
quadLayer.transform = new XRRigidTransform({ z: -2 });
quadLayer.width = 1.5;
quadLayer.height = 1.5;

const framebuffer = gl.createFramebuffer();
xrSession.updateRenderState({ layers: [quadLayer] });
xrSession.requestAnimationFrame(onXRFrame);

function onXRFrame(time, xrFrame) {
  xrSession.requestAnimationFrame(onXRFrame);

  gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
  let subImage = xrGlBinding.getSubImage(quadLayer, xrFrame);
  gl.framebufferTexture2D(
    gl.FRAMEBUFFER,
    gl.COLOR_ATTACHMENT0,
    subImage.colorTexture,
    0,
  );
  let viewport = subImage.viewport;
  gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

  // Render content for the quad layer
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)
