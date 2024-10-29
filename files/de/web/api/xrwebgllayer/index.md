---
title: XRWebGLLayer
slug: Web/API/XRWebGLLayer
l10n:
  sourceCommit: 9a4005caa5cc13f5174e3b8981eeec5631ed83d1
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Das **`XRWebGLLayer`** Interface der WebXR Device API stellt eine Verbindung zwischen dem WebXR-Gerät (oder einem simulierten XR-Gerät im Falle einer Inline-Sitzung) und einem WebGL-Kontext her, der zum Rendern der Szene für die Anzeige auf dem Gerät verwendet wird. Insbesondere bietet es Zugriff auf den WebGL-Framebuffer und das Viewport, um den Zugang zum Kontext zu erleichtern.

Obwohl `XRWebGLLayer` derzeit der einzige unterstützte Typ von Framebuffer-Ebenen von [WebGL](/de/docs/Web/API/WebGL_API) ist, ist es durchaus möglich, dass zukünftige Aktualisierungen der WebXR-Spezifikation andere Ebenentypen und entsprechende Bildquellen ermöglichen.

{{InheritanceDiagram}}

## Konstruktor

- [`XRWebGLLayer()`](/de/docs/Web/API/XRWebGLLayer/XRWebGLLayer) {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `XRWebGLLayer`-Objekt zur Nutzung durch die angegebene [`XRSession`](/de/docs/Web/API/XRSession) zurück, wobei ein bestimmter [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) oder [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext) als Zielkontext verwendet wird.

## Instanzeigenschaften

- [`antialias`](/de/docs/Web/API/XRWebGLLayer/antialias) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob der Framebuffer des WebGL-Kontexts Anti-Aliasing unterstützt oder nicht. Die spezifische Art des Anti-Aliasing wird vom {{Glossary("user_agent", "User Agent")}} bestimmt.
- [`fixedFoveation`](/de/docs/Web/API/XRWebGLLayer/fixedFoveation) {{Experimental_Inline}}
  - : Eine Zahl, die die Menge der Foveation angibt, die vom XR-Kompositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augentexturen in einer niedrigeren Auflösung als die Mitte und reduziert die GPU-Belastung.
- [`framebuffer`](/de/docs/Web/API/XRWebGLLayer/framebuffer) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein [`WebGLFramebuffer`](/de/docs/Web/API/WebGLFramebuffer) zurück, das zum Übergeben an die Methode [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) geeignet ist.
- [`framebufferWidth`](/de/docs/Web/API/XRWebGLLayer/framebufferWidth) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Breite des Framebuffers von `XRWebGLLayer` zurück.
- [`framebufferHeight`](/de/docs/Web/API/XRWebGLLayer/framebufferHeight) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Höhe des Framebuffers der Ebene zurück.
- [`ignoreDepthValues`](/de/docs/Web/API/XRWebGLLayer/ignoreDepthValues) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der angibt, ob der [WebXR-Kompositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) die Inhalte des Tiefenpuffers der Ebene beim Komponieren der Szene verwenden soll.

## Statische Methoden

- [`getNativeFramebufferScaleFactor()`](/de/docs/Web/API/XRWebGLLayer/getNativeFramebufferScaleFactor_static) {{Experimental_Inline}}
  - : Gibt den Skalierungsfaktor zurück, der verwendet werden kann, um die Auflösung des empfohlenen WebGL-Framebuffers auf die native Auflösung des Rendering-Geräts zu skalieren.

## Instanzmethoden

- [`getViewport()`](/de/docs/Web/API/XRWebGLLayer/getViewport) {{Experimental_Inline}}
  - : Gibt eine neue [`XRViewport`](/de/docs/Web/API/XRViewport) Instanz zurück, die die Position, Breite und Höhe repräsentiert, auf die das [WebGL-Kontext-Viewport](/de/docs/Web/API/WebGLRenderingContext/viewport) gesetzt werden muss, um die Zeichnung auf den Bereich des Framebuffers zu enthalten, der für die Inhalte der angegebenen Ansicht vorgesehen ist. Auf diese Weise wird zum Beispiel das Rendering der Sicht des linken Auges und der Sicht des rechten Auges jeweils in die richtigen Teile des Framebuffers platziert.

## Beispiele

### Die Ebene an einen WebGL-Kontext binden

Dieses Snippet, entnommen aus [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem "Bewegung und Bewegung" WebXR-Beispiel, zeigt, wie das `XRWebGLLayer` vom Renderzustand des [`XRSession`](/de/docs/Web/API/XRSession) Objekts erhalten wird und dann durch den Aufruf der WebGL-Funktion [`bindFrameBuffer()`](/de/docs/Web/API/WebGLRenderingContext/bindFrameBuffer) als aktueller rendender WebGL Framebuffer gebunden wird.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

### Rendern jeder Ansicht in einem Frame

Jedes Mal, wenn die GPU bereit ist, die Szene auf das XR-Gerät zu rendern, ruft der XR-Laufzeit das Funktion auf, die Sie angegeben haben, als Sie die Methode [`requestAnimationFrame()`](/de/docs/Web/API/XRSession/requestAnimationFrame) des [`XRSession`](/de/docs/Web/API/XRSession) aufgerufen haben, um das Frame zu rendern.

Diese Funktion erhält als Eingabe ein [`XRFrame`](/de/docs/Web/API/XRFrame), das die Daten kapselt, die zum Rendern des Frames benötigt werden. Diese Informationen umfassen die Pose (ein [`XRViewerPose`](/de/docs/Web/API/XRViewerPose) Objekt), das die Position und Blickrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von [`XRView`](/de/docs/Web/API/XRView) Objekten, die jeweils eine Perspektive auf die Szene darstellen. In aktuellen WebXR-Implementierungen wird diese Liste niemals mehr als zwei Einträge enthalten: einen, der die Position und den Blickwinkel des linken Auges beschreibt, und einen weiteren, der dasselbe für das rechte Auge tut.

```js
let pose = xrFrame.getViewerPose(xrReferenceSpace);

if (pose) {
  const glLayer = xrSession.renderState.baseLayer;
  gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);

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
- [Erste Schritte mit WebGL](/de/docs/Web/API/WebGL_API/Tutorial/Getting_started_with_WebGL)
- [`WebGLRenderingContext`](/de/docs/Web/API/WebGLRenderingContext) und [`WebGL2RenderingContext`](/de/docs/Web/API/WebGL2RenderingContext)
- [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem "Bewegung und Bewegung" WebXR-Beispiel
