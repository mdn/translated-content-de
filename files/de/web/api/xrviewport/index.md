---
title: XRViewport
slug: Web/API/XRViewport
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Das **`XRViewport`**-Interface der WebXR Device API bietet Eigenschaften zur Beschreibung der Größe und Position des aktuellen Viewports innerhalb der [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer), die zur Darstellung der 3D-Szene verwendet wird.

## Instanz-Eigenschaften

- [`height`](/de/docs/Web/API/XRViewport/height) {{ReadOnlyInline}}
  - : Die Höhe in Pixeln des Viewports.
- [`width`](/de/docs/Web/API/XRViewport/width) {{ReadOnlyInline}}
  - : Die Breite in Pixeln des Viewports.
- [`x`](/de/docs/Web/API/XRViewport/x) {{ReadOnlyInline}}
  - : Der Versatz von der Ursprung der Ziel-Grafikoberfläche (typischerweise eine [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer)) zur linken Kante des Viewports, in Pixeln.
- [`y`](/de/docs/Web/API/XRViewport/y) {{ReadOnlyInline}}
  - : Der Versatz vom Ursprung des Viewports zur unteren Kante des Viewports; das Koordinatensystem von WebGL platziert (0, 0) in der unteren linken Ecke der Oberfläche.

## Nutzungshinweise

Aktuell ist der einzige verfügbare Oberflächentyp die [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer). Die genaue Ausrichtung des Koordinatensystems kann bei anderen Oberflächentypen variieren, aber in WebGL befindet sich der Ursprung (0, 0) in der unteren linken Ecke der Oberfläche. Somit definieren die in einem `XRViewport` angegebenen Werte ein Rechteck, dessen untere linke Ecke bei (`x`, `y`) liegt und das sich `width` Pixel nach links und `height` Pixel nach oben erstreckt.

Diese Werte können direkt in die Methode [`WebGLRenderingContext.viewport()`](/de/docs/Web/API/WebGLRenderingContext/viewport) übergeben werden:

```js
const xrViewport = xrWebGLLayer.getViewport(xrView);
gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);
```

## Beispiel

Dieses Beispiel richtet einen Animationsrahmen-Callback mit [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) ein. Nach der anfänglichen Einrichtung durchläuft es jede der Ansichten innerhalb der Pose des Betrachters und konfiguriert den Viewport entsprechend der Vorgaben von [`XRWebGLLayer`](/de/docs/Web/API/XRWebGLLayer).

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
