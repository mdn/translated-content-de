---
title: XRWebGLLayer
slug: Web/API/XRWebGLLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRWebGLLayer`**-Interface der WebXR Device API stellt eine Verbindung zwischen dem WebXR-Gerät (oder einem simulierten XR-Gerät im Fall einer Inline-Sitzung) und einem WebGL-Kontext her, der zum Rendern der Szene zur Anzeige auf dem Gerät verwendet wird. Insbesondere bietet es Zugriff auf den WebGL-Framebuffer und den Viewport, um den Zugriff auf den Kontext zu erleichtern.

Obwohl `XRWebGLLayer` derzeit der einzige von [WebGL](/de/docs/Web/API/WebGL_API) unterstützte Typ von Framebuffer-Layer ist, ist es durchaus möglich, dass zukünftige Aktualisierungen der WebXR-Spezifikation andere Layer-Typen und entsprechende Bildquellen erlauben könnten.

{{InheritanceDiagram}}

## Konstruktor

- [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `XRWebGLLayer`-Objekt zurück, das von der angegebenen [`XRSession`](/de/docs/Web/API/XRSession) verwendet wird, wobei ein bestimmter [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) als Zielkontext dient.

## Instanz-Eigenschaften

- [`antialias`](/de/docs/Web/API/XRWebGLLayer/antialias) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolescher Wert, der angibt, ob der Framebuffer des WebGL-Kontexts Anti-Aliasing unterstützt oder nicht. Die spezifische Art des Anti-Aliasing wird vom {{Glossary("user_agent", "User Agent")}} bestimmt.
- [`fixedFoveation`](/de/docs/Web/API/XRWebGLLayer/fixedFoveation) {{Experimental_Inline}}
  - : Eine Zahl, die die Menge der Foveation angibt, die vom XR-Compositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Texturen der Augen in einer geringeren Auflösung als das Zentrum und reduziert die GPU-Belastung.
- [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt einen [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) zurück, der für den Aufruf der Methode [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) geeignet ist.
- [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Breite des Framebuffers des `XRWebGLLayer` zurück.
- [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Höhe des Framebuffers des Layers zurück.
- [`ignoreDepthValues`](/de/docs/Web/API/XRWebGLLayer/ignoreDepthValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolescher Wert, der angibt, ob der [WebXR-Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) die Inhalte des Tiefenpuffers des Layers beim Komponieren der Szene verwenden soll oder nicht.

## Statische Methoden

- [`getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) {{Experimental_Inline}}
  - : Gibt den Skalierungsfaktor zurück, der verwendet werden kann, um die empfohlene Auflösung des WebGL-Framebuffers auf die native Auflösung des Rendering-Geräts zu skalieren.

## Instanz-Methoden

- [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) {{Experimental_Inline}}
  - : Gibt eine neue Instanz von [`XRViewport`](/de/docs/Web/API/XRViewport) zurück, die die Position, Breite und Höhe darstellt, auf die der [Viewport des WebGL-Kontexts](/de/docs/Web/API/WebGLRenderingContext/viewport) gesetzt werden muss, um das Zeichnen im für die Inhalte der angegebenen Ansicht vorgesehenen Bereich des Framebuffers zu enthalten. Auf diese Weise wird beispielsweise das Rendering der Perspektive des linken Auges und des rechten Auges jeweils in die korrekten Teile des Framebuffers platziert.

## Beispiele

### Den Layer an einen WebGL-Kontext binden

Dieses Snippet, entnommen aus [Zeichen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem "Bewegung und Bewegung" WebXR-Beispiel, zeigt, wie das `XRWebGLLayer` aus dem Rendering-Status des [`XRSession`](/de/docs/Web/API/XRSession)-Objekts abgerufen und dann als aktueller WebGL-Rendering-Framebuffer gebunden wird, indem die WebGL-Funktion [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) aufgerufen wird.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

### Rendering jeder Ansicht in einem Frame

Jedes Mal, wenn die GPU bereit ist, die Szene auf das XR-Gerät zu rendern, ruft die XR-Laufzeit die Funktion auf, die Sie angegeben haben, als Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) des [`XRSession`](/de/docs/Web/API/XRSession) aufgerufen haben, um den Frame zu rendern.

Diese Funktion erhält als Eingabe ein [`XRFrame`](/de/docs/Web/API/XRFrame), das die zum Rendern des Frames benötigten Daten kapselt. Diese Informationen umfassen die Pose (ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose)-Objekt), das die Position und Ausrichtungsrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView)-Objekten, die jeweils eine Perspektive auf die Szene darstellen. In aktuellen WebXR-Implementierungen wird diese Liste niemals mehr als zwei Einträge enthalten: einen, der die Position und den Betrachtungswinkel des linken Auges beschreibt, und einen anderen, der dasselbe für das rechte Auge tut.

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
- [Zeichen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem "Bewegung und Bewegung" WebXR-Beispiel
