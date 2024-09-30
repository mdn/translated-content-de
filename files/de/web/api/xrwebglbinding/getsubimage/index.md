---
title: "XRWebGLBinding: Methode getSubImage()"
short-title: getSubImage()
slug: Web/API/XRWebGLBinding/getSubImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getSubImage()`** Methode des [`XRWebGLBinding`](/de/docs/Web/API/XRWebGLBinding)-Interfaces gibt ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt zurück, das die zu rendernde WebGL-Textur darstellt.

## Syntax

```js-nolint
getSubImage(layer, frame)
getSubImage(layer, frame, eye)
```

### Parameter

- `layer`
  - : Der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer), der für das Rendering verwendet werden soll (kann alle Arten von `XRCompositionLayer`-Objekten außer [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) sein, siehe [`XRWebGLBinding.getViewSubImage()`](/de/docs/Web/API/XRWebGLBinding/getViewSubImage) für die Projektion von Schichten).
- `frame`
  - : Der [`XRFrame`](/de/docs/Web/API/XRFrame)-Frame, der für das Rendering verwendet werden soll.
- `eye` {{optional_inline}}
  - : Ein optionales [`XRView.eye`](/de/docs/Web/API/XRView/eye), das angibt, welches Auge der Ansicht für das Rendering verwendet werden soll. Mögliche Werte:
    - `left`
      - : Die [`XRView`](/de/docs/Web/API/XRView) repräsentiert die Perspektive des linken Auges des Betrachters.
    - `right`
      - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
    - `none`
      - : Die Ansicht beschreibt eine monokulare Ansicht oder repräsentiert anderweitig nicht die Perspektive eines bestimmten Auges.
        Standardwert ist `none`.

### Rückgabewert

Ein [`XRWebGLSubImage`](/de/docs/Web/API/XRWebGLSubImage)-Objekt.

### Ausnahmen

Ein {{jsxref("TypeError")}} wird ausgelöst,

- wenn `layer` sich nicht im [Session-`layer` Array](/de/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array) befindet.
- wenn `layer` ein [`XRProjectionLayer`](/de/docs/Web/API/XRProjectionLayer) ist.
- wenn die Eigenschaft [`layout`](/de/docs/Web/API/XRCompositionLayer/layout) des Layers `default` ist.
- wenn die Eigenschaft [`layout`](/de/docs/Web/API/XRCompositionLayer/layout) des Layers `stereo` ist und `eye` `none` ist.

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
