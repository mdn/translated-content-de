---
title: XRWebGLLayer
slug: Web/API/XRWebGLLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRWebGLLayer`**-Interface der WebXR Device API stellt eine Verbindung zwischen dem WebXR-Gerät (oder einem simulierten XR-Gerät im Fall einer Inline-Session) und einem WebGL-Kontext her, der zur Darstellung der Szene auf dem Gerät verwendet wird. Insbesondere bietet es Zugriff auf den WebGL-Framebuffer und den Viewport, um den Zugriff auf den Kontext zu erleichtern.

Obwohl `XRWebGLLayer` derzeit der einzige Framebuffer-Layer-Typ ist, der von [WebGL](/de/docs/Web/API/WebGL_API) unterstützt wird, ist es durchaus möglich, dass zukünftige Updates der WebXR-Spezifikation andere Layer-Typen und entsprechende Bildquellen zulassen könnten.

{{InheritanceDiagram}}

## Konstruktor

- [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) {{Experimental_Inline}}
  - : Erstellt und liefert ein neues `XRWebGLLayer`-Objekt zur Verwendung durch die angegebene [`XRSession`](/de/docs/Web/API/XRSession), unter Verwendung eines bestimmten [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) als Zielkontext.

## Instanz-Eigenschaften

- [`antialias`](/de/docs/Web/API/XRWebGLLayer/antialias) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean-Wert, der angibt, ob der Framebuffer des WebGL-Kontexts Anti-Aliasing unterstützt oder nicht. Die spezifische Art des Anti-Aliasings wird durch den [user agent](/de/docs/Glossary/user_agent) bestimmt.
- [`fixedFoveation`](/de/docs/Web/API/XRWebGLLayer/fixedFoveation) {{Experimental_Inline}}
  - : Eine Zahl, die den Grad der Foveation angibt, der vom XR-Kompositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Texturen für die Augen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.
- [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) zurück, der für die Übergabe an die [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer)-Methode geeignet ist.
- [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Breite des Framebuffers des `XRWebGLLayer` zurück.
- [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Höhe des Framebuffers der Ebene zurück.
- [`ignoreDepthValues`](/de/docs/Web/API/XRWebGLLayer/ignoreDepthValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der angibt, ob der [WebXR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) die Inhalte des Tiefenpuffers der Ebene beim Zusammenstellen der Szene berücksichtigen soll oder nicht.

## Statische Methoden

- [`getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) {{Experimental_Inline}}
  - : Gibt den Skalierungsfaktor zurück, der verwendet werden kann, um die Auflösung des empfohlenen WebGL-Framebuffers an die native Auflösung des Wiedergabegeräts anzupassen.

## Instanz-Methoden

- [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) {{Experimental_Inline}}
  - : Gibt eine neue [`XRViewport`](/de/docs/Web/API/XRViewport)-Instanz zurück, die die Position, Breite und Höhe darstellt, auf die der [WebGL-Kontext-Viewport](/de/docs/Web/API/WebGLRenderingContext/viewport) eingestellt werden muss, um das Zeichnen auf dem Bereich des Framebuffers, der für den Inhalt der angegebenen Ansicht bestimmt ist, zu umfassen. Auf diese Weise wird beispielsweise das Rendern der Sicht der linken und rechten Auge korrekt in die jeweiligen Bereiche des Framebuffers platziert.

## Beispiele

### Den Layer an einen WebGL-Kontext binden

Dieses Beispiel, entnommen aus [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem WebXR-Beispiel "Bewegung und Bewegung", zeigt, wie das `XRWebGLLayer`-Objekt aus dem Rendering-Zustand des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts abgerufen wird und dann als der aktuelle WebGL-Framebuffer durch den Aufruf der WebGL-Funktion [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) gebunden wird.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

### Rendern jeder Ansicht in einem Frame

Jedes Mal, wenn die GPU bereit ist, die Szene auf das XR-Gerät zu rendern, ruft die XR-Laufzeit die Funktion auf, die Sie angegeben haben, als Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) der [`XRSession`](/de/docs/Web/API/XRSession) aufgerufen haben, um das Frame zu rendern.

Diese Funktion erhält als Eingabe einen [`XRFrame`](/de/docs/Web/API/XRFrame), der die Daten kapselt, die zum Rendern des Frames benötigt werden. Diese Informationen beinhalten die Pose (ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt), das die Position und Blickrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView)-Objekten, die jeweils eine Perspektive auf die Szene darstellen. In aktuellen WebXR-Implementierungen wird diese Liste niemals mehr als zwei Einträge enthalten: einen für die Position und den Blickwinkel des linken Auges und einen für das rechte.

```js
let pose = xrFrame.getViewerPose(xrReferenceSpace);

if (pose) {
  const glLayer = xrSession.renderState.baseLayer;
  gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.Framebffer);

  for (const view of pose.views) {
    const viewport = glLayer.getViewport(view);
    gl.viewport(viewport.x, viewport.y, viewport.width, viewport.height);

    /* Render the view */
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebXR Device API](/de/docs/Web/API/WebXR_Device_API)
- [Einstieg in WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)
- [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem WebXR-Beispiel "Bewegung und Bewegung"
