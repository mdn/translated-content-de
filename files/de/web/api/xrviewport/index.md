---
title: XRViewport
slug: Web/API/XRViewport
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{APIRef("WebXR Device API")}}{{SecureContext_Header}}

Die **`XRViewport`**-Schnittstelle der WebXR Device API bietet Eigenschaften, die verwendet werden, um die Größe und Position des aktuellen Viewports innerhalb der {{domxref("XRWebGLLayer")}} zu beschreiben, die zur Darstellung der 3D-Szene verwendet wird.

## Instanzeigenschaften

- {{domxref("XRViewport.height", "height")}} {{ReadOnlyInline}}
  - : Die Höhe des Viewports in Pixeln.
- {{domxref("XRViewport.width", "width")}} {{ReadOnlyInline}}
  - : Die Breite des Viewports in Pixeln.
- {{domxref("XRViewport.x", "x")}} {{ReadOnlyInline}}
  - : Der Versatz von der Ursprungsadresse der Zielgrafikoberfläche (typischerweise ein {{domxref("XRWebGLLayer")}}) zur linken Kante des Viewports in Pixeln.
- {{domxref("XRViewport.y", "y")}} {{ReadOnlyInline}}
  - : Der Versatz vom Ursprung des Viewports zur unteren Kante des Viewports; Das Koordinatensystem von WebGL platziert (0, 0) in der unteren linken Ecke der Oberfläche.

## Anmerkungen zur Nutzung

Derzeit ist die einzige verfügbare Oberflächenart die {{domxref("XRWebGLLayer")}}. Die genaue Ausrichtung des Koordinatensystems kann bei anderen Oberflächenarten variieren, aber in WebGL befindet sich der Ursprung (0, 0) in der unteren linken Ecke der Oberfläche. Daher definieren die in einem `XRViewport` angegebenen Werte ein Rechteck, dessen untere linke Ecke bei (`x`, `y`) liegt und das sich `width` Pixel nach links und `height` Pixel nach oben erstreckt.

Diese Werte können direkt in die Methode {{domxref("WebGLRenderingContext.viewport()")}} übergeben werden:

```js
const xrViewport = xrWebGLLayer.getViewport(xrView);
gl.viewport(xrViewport.x, xrViewport.y, xrViewport.width, xrViewport.height);
```

## Beispiel

Dieses Beispiel richtet einen Animationsrahmen-Callback mit {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} ein. Nach der anfänglichen Einrichtung iteriert es über jede der Ansichten innerhalb der Pose des Betrachters und konfiguriert den Viewport wie durch die {{domxref("XRWebGLLayer")}} vorgegeben.

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

    // Jetzt können wir WebGL verwenden, um in einen Viewport zu zeichnen,
    // der den Anforderungen des Betrachters entspricht
  }
});
```

## Spezifikationen

{{Specifications}}

## Browserkompatibilität

{{Compat}}
