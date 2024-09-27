---
title: XRViewport
slug: Web/API/XRViewport
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`XRViewport`**-Interface der WebXR Device API bietet Eigenschaften zur Beschreibung der Größe und Position des aktuellen Ansichtsfensters innerhalb der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die verwendet wird, um die 3D-Szene darzustellen.

## Instanzeigenschaften

- [`height`](/de/docs/Web/API/XRViewport/height) {{ReadOnlyInline}}
  - : Die Höhe des Ansichtsfensters in Pixel.
- [`width`](/de/docs/Web/API/XRViewport/width) {{ReadOnlyInline}}
  - : Die Breite des Ansichtsfensters in Pixel.
- [`x`](/de/docs/Web/API/XRViewport/x) {{ReadOnlyInline}}
  - : Der Versatz vom Ursprung der Zielgrafikfläche (typischerweise eine [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)) zur linken Kante des Ansichtsfensters in Pixel.
- [`y`](/de/docs/Web/API/XRViewport/y) {{ReadOnlyInline}}
  - : Der Versatz vom Ursprung des Ansichtsfensters zur unteren Kante des Ansichtsfensters; das Koordinatensystem von WebGL platziert (0, 0) in der linken unteren Ecke der Fläche.

## Nutzungshinweise

Zurzeit ist der einzige verfügbare Oberflächentyp die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer). Die genaue Ausrichtung des Koordinatensystems kann bei anderen Oberflächentypen variieren, aber in WebGL befindet sich der Ursprung (0, 0) in der linken unteren Ecke der Fläche. Somit definieren die in einem `XRViewport` angegebenen Werte ein Rechteck, dessen linke untere Ecke sich bei (`x`, `y`) befindet und das sich `width` Pixel nach links und `height` Pixel nach oben erstreckt.

Diese Werte können direkt in die [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport)-Methode übergeben werden:

```js
const xrViewport = xrWebGLLayer.getViewport(xrView);
gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);
```

## Beispiel

Dieses Beispiel richtet einen Animationsframe-Callback mit [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ein. Nach der anfänglichen Einrichtung iteriert es über jede der Ansichten innerhalb der Pose des Betrachters und konfiguriert das Ansichtsfenster wie von der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer) vorgegeben.

```js
xrSession.requestAnimationFrame((time, xrFrame) => {
  const viewerPose = xrFrame.getViewerPose(xrReferenceSpace);

  gl.bindFramebuffer(xrWebGLLayer.framebuffer);

  for (const xrView of viewerPose.views) {
    const xrViewport = xrWebGLLayer.getViewport(xrView);
    gl.viewport(
      xrViewport.x,
      xrViewport.y,
      xrViewport.width,
      xrViewport.height,
    );

    // Now we can use WebGL to draw into a viewport matching
    // the viewer's needs
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
