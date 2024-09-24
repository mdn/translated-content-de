---
title: "XRWebGLBinding: getSubImage()-Methode"
short-title: getSubImage()
slug: Web/API/XRWebGLBinding/getSubImage
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`getSubImage()`**-Methode der {{domxref("XRWebGLBinding")}}-Schnittstelle gibt ein {{domxref("XRWebGLSubImage")}}-Objekt zurück, das die WebGL-Textur zur Darstellung repräsentiert.

## Syntax

```js-nolint
getSubImage(layer, frame)
getSubImage(layer, frame, eye)
```

### Parameter

- `layer`
  - : Der {{domxref("XRCompositionLayer")}}, der für das Rendern verwendet werden soll (kann alle Arten von `XRCompositionLayer`-Objekten sein, außer {{domxref("XRProjectionLayer")}}, siehe {{domxref("XRWebGLBinding.getViewSubImage()")}} für die Projektion von Ebenen).
- `frame`
  - : Der {{domxref("XRFrame")}}-Frame, der zum Rendern verwendet wird.
- `eye` {{optional_inline}}
  - : Ein optionales {{domxref("XRView.eye")}}, das angibt, welches Auge der Ansicht zum Rendern verwendet werden soll. Mögliche Werte:
    - `left`
      - : Die {{domxref("XRView")}} repräsentiert die Perspektive des linken Auges des Betrachters.
    - `right`
      - : Die Ansicht repräsentiert das rechte Auge des Betrachters.
    - `none`
      - : Die Ansicht beschreibt eine monokulare Ansicht oder repräsentiert in anderer Weise nicht die Perspektive eines bestimmten Auges.
        Standardmäßig `none`.

### Rückgabewert

Ein {{domxref("XRWebGLSubImage")}}-Objekt.

### Ausnahmen

Ein {{jsxref("TypeError")}} wird ausgelöst,

- wenn `layer` nicht im [Schicht-Array der Sitzung](/de/docs/Web/API/XRSession/updateRenderState#setting_the_layers_array) enthalten ist.
- wenn `layer` eine {{domxref("XRProjectionLayer")}} ist.
- wenn die [`layout`-Eigenschaft](/de/docs/Web/API/XRCompositionLayer/layout) der Schicht `default` ist.
- wenn die [`layout`-Eigenschaft](/de/docs/Web/API/XRCompositionLayer/layout) der Schicht `stereo` ist und `eye` `none` ist.

## Beispiele

### Rendering eines `XRQuadLayer`

Das folgende Beispiel rendert eine {{domxref("XRQuadLayer")}}.

```js
const xrGlBinding = new XRWebGLBinding(xrSession, gl);
const quadLayer = xrGlBinding.createQuadLayer({
  space: xrReferenceSpace,
  viewPixelWidth: 512,
  viewPixelHeight: 512,
});

// Position 2 Meter vom Ursprung entfernt mit einer Breite und Höhe von 1,5 Metern
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

- {{domxref("XRWebGLSubImage")}}
