---
title: XRWebGLLayer
slug: Web/API/XRWebGLLayer
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{SecureContext_Header}}{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die **`XRWebGLLayer`**-Schnittstelle der WebXR Device API bietet eine Verbindung zwischen dem WebXR-Gerät (oder einem simulierten XR-Gerät im Falle einer Inline-Sitzung) und einem WebGL-Kontext, der zum Rendern der Szene für die Anzeige auf dem Gerät verwendet wird. Insbesondere bietet sie Zugang zum WebGL-Framebuffer und dem Viewport, um den Zugriff auf den Kontext zu erleichtern.

Obwohl `XRWebGLLayer` derzeit der einzige von [WebGL](/de/docs/Web/API/WebGL_API) unterstützte Typ eines Framebuffer-Layers ist, ist es durchaus möglich, dass zukünftige Updates der WebXR-Spezifikation andere Layer-Typen und entsprechende Bildquellen zulassen.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("XRWebGLLayer.XRWebGLLayer", "XRWebGLLayer()")}} {{Experimental_Inline}}
  - : Erstellt und gibt ein neues `XRWebGLLayer`-Objekt zurück, das von der angegebenen {{domxref("XRSession")}} verwendet werden kann und einen bestimmten {{domxref("WebGLRenderingContext")}} oder {{domxref("WebGL2RenderingContext")}} als Zielkontext nutzt.

## Instanz-Eigenschaften

- {{domxref('XRWebGLLayer.antialias', "antialias")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein boolescher Wert, der angibt, ob der Framebuffer des WebGL-Kontexts Anti-Aliasing unterstützt oder nicht. Die spezifische Art des Anti-Aliasings wird vom {{Glossary("user agent")}} bestimmt.
- {{domxref('XRWebGLLayer.fixedFoveation', "fixedFoveation")}} {{Experimental_Inline}}
  - : Eine Zahl, die die Menge der Foveation angibt, die vom XR-Compositor verwendet wird. Fixed Foveated Rendering (FFR) rendert die Ränder der Augen-Texturen in einer niedrigeren Auflösung als das Zentrum und reduziert die GPU-Belastung.
- {{domxref('XRWebGLLayer.framebuffer', "framebuffer")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt ein {{domxref('WebGLFramebuffer')}} zurück, das zur Übergabe in die {{domxref("WebGLRenderingContext.bindFrameBuffer", "bindFrameBuffer()")}}-Methode geeignet ist.
- {{domxref('XRWebGLLayer.framebufferWidth', "framebufferWidth")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Breite des Framebuffers des `XRWebGLLayer` zurück.
- {{domxref('XRWebGLLayer.framebufferHeight', "framebufferHeight")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Gibt die Höhe des Layers-Framebuffers zurück.
- {{domxref('XRWebGLLayer.ignoreDepthValues', "ignoreDepthValues")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Ein Boolean, der anzeigt, ob der [WebXR-Compositor](/de/docs/Web/API/WebXR_Device_API/Fundamentals#the_webxr_compositor) die Inhalte des Depth Buffers des Layers beim Komponieren der Szene verwenden soll oder nicht.

## Statische Methoden

- {{domxref('XRWebGLLayer/getNativeFramebufferScaleFactor_static', "getNativeFramebufferScaleFactor()")}} {{Experimental_Inline}}
  - : Gibt den Skalierungsfaktor zurück, der verwendet werden kann, um die Auflösung des empfohlenen WebGL-Framebuffers auf die native Auflösung des Anzeigegeräts zu skalieren.

## Instanz-Methoden

- {{domxref('XRWebGLLayer.getViewport()', "getViewport()")}} {{Experimental_Inline}}
  - : Gibt eine neue {{domxref('XRViewport')}}-Instanz zurück, die die Position, Breite und Höhe darstellt, auf die der [WebGL-Kontext-Viewport](/de/docs/Web/API/WebGLRenderingContext/viewport) gesetzt werden muss, um das Zeichnen auf den Bereich des Framebuffers zu beschränken, der für die Inhalte der angegebenen Ansicht bestimmt ist. Auf diese Weise wird zum Beispiel die Darstellung des Blickpunkts des linken und rechten Auges jeweils in die korrekten Teile des Framebuffers platziert.

## Beispiele

### Den Layer an einen WebGL-Kontext binden

Dieses Beispiel, entnommen aus dem Artikel [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem WebXR-Beispiel "Bewegung und Bewegung", zeigt, wie das `XRWebGLLayer` vom Rendering-Zustand des {{domxref("XRSession")}}-Objekts erhalten und dann als aktueller WebGL-Framebuffer gebunden wird, indem die WebGL-Funktion {{domxref("WebGLRenderingContext.bindFrameBuffer", "bindFrameBuffer()")}} aufgerufen wird.

```js
let glLayer = xrSession.renderState.baseLayer;
gl.bindFrameBuffer(gl.FRAMEBUFFER, glLayer.framebuffer);
```

### Rendern jeder Ansicht in einem Frame

Jedes Mal, wenn die GPU bereit ist, die Szene auf das XR-Gerät zu rendern, ruft der XR-Laufzeit die Funktion auf, die Sie bei der Verwendung der {{domxref("XRSession")}}-Methode {{domxref("XRSession.requestAnimationFrame", "requestAnimationFrame()")}} angegeben haben, um den Frame zu rendern.

Diese Funktion erhält als Eingabe ein {{domxref("XRFrame")}}, das die Daten kapselt, die zum Rendern des Frames benötigt werden. Diese Informationen umfassen die Pose (ein {{domxref("XRViewerPose")}}-Objekt), das die Position und Ausrichtung des Betrachters innerhalb der Szene beschreibt, sowie eine Liste von {{domxref("XRView")}}-Objekten, die jeweils eine Perspektive auf die Szene darstellen. In aktuellen WebXR-Implementierungen wird es nie mehr als zwei Einträge in dieser Liste geben: einen, der die Position und den Blickwinkel des linken Auges beschreibt, und einen weiteren für das rechte Auge.

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
- {{domxref('WebGLRenderingContext')}} und {{domxref("WebGL2RenderingContext")}}
- [Zeichnen eines Frames](/de/docs/Web/API/WebXR_Device_API/Movement_and_motion#drawing_a_frame) in unserem WebXR-Beispiel "Bewegung und Bewegung"
