---
title: "XRRenderState: layers-Eigenschaft"
short-title: layers
slug: Web/API/XRRenderState/layers
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`layers`**-Eigenschaft der [`XRRenderState`](/de/docs/Web/API/XRRenderState)-Schnittstelle ist ein geordnetes Array, das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekte enthält, die vom XR-Kompositor angezeigt werden.

## Wert

Ein geordnetes Array, das [`XRLayer`](/de/docs/Web/API/XRLayer)-Objekte enthält. Die Reihenfolge der Ebenen ist "von hinten nach vorne".

## Beispiele

### Renderzustands-Ebenen abrufen

Um das WebXR-Ebenen-Array zu lesen, verwenden Sie die `layers`-Eigenschaft auf [`XRRenderState`](/de/docs/Web/API/XRRenderState).
Ebenen können mit der Methode [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState) gesetzt werden.

```js
const xrSession = navigator.xr.requestSession("immersive-ar", {
  optionalFeatures: ["layers"],
});

function onXRSessionStarted(xrSession) {
  const glCanvas = document.createElement("canvas");
  const gl = glCanvas.getContext("webgl", { xrCompatible: true });
  const xrGlBinding = new XRWebGLBinding(xrSession, gl);
  const projectionLayer = new XRWebGLLayer(xrSession, gl);
  const quadLayer = xrGlBinding.createQuadLayer({
    pixelWidth: 1024,
    pixelHeight: 1024,
  });

  xrSession.updateRenderState({
    layers: [projectionLayer, quadLayer],
  });

  xrSession.renderState.layers; // [projectionLayer, quadLayer]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`XRSession.updateRenderState()`](/de/docs/Web/API/XRSession/updateRenderState)
