---
title: "XRRenderState: Layers-Eigenschaft"
short-title: layers
slug: Web/API/XRRenderState/layers
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`layers`**-Eigenschaft der {{domxref("XRRenderState")}}-Schnittstelle ist ein geordnetes Array, das {{domxref("XRLayer")}}-Objekte enthält, die vom XR-Compositor angezeigt werden.

## Wert

Ein geordnetes Array, das {{domxref("XRLayer")}}-Objekte enthält. Die Reihenfolge der Ebenen ist "von hinten nach vorne".

## Beispiele

### Renderzustands-Layer abrufen

Um das WebXR-Layer-Array zu lesen, verwenden Sie die `layers`-Eigenschaft auf {{domxref("XRRenderState")}}. Ebenen können mit der {{domxref("XRSession.updateRenderState()")}}-Methode festgelegt werden.

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

- {{domxref("XRSession.updateRenderState()")}}
