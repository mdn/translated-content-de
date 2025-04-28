---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderPassEncoder`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Sie ist Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Render-Pipeline rendert Grafiken zu [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Anhängen, die typischerweise für die Anzeige in einem {{htmlelement("canvas")}}-Element bestimmt sind, aber auch für Texturen verwendet werden könnten, die für andere Zwecke gerendert werden, die niemals auf dem Bildschirm erscheinen. Sie hat zwei Hauptphasen:

- Eine Vertex-Phase, bei der ein Vertex-Shader die Positionsdaten, die in die GPU eingespeist werden, nimmt und verwendet, um eine Reihe von Vertexen im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertexe werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel sie auf der Zeichenfläche abdecken sollen.

- Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes von den Primitiven des Vertex-Shaders abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails liefern, sowie die Position und Farbe virtueller Lichter.

Ein `GPURenderPassEncoder`-Objekt wird über die Eigenschaft [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPassEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) {{Experimental_Inline}}
  - : Beginnt eine Okklusionsabfrage an dem angegebenen Index des relevanten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet` Deskriptoreigenschaft beim Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Render-Vorgang auszuführen).
- [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesenen Parametern.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect) {{Experimental_Inline}}

  - : Zeichnet indizierte Primitiven unter Verwendung von aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesenen Parametern.

- [`end()`](/de/docs/Web/API/GPURenderPassEncoder/end) {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlsfolge.
- [`endOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/endOcclusionQuery) {{Experimental_Inline}}
  - : Beendet eine aktive Okklusionsabfrage, die zuvor mit [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) gestartet wurde.
- [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) {{Experimental_Inline}}
  - : Führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgenommen wurden, als Teil dieses Render-Passes.
- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label markiert wird und alle nachfolgenden kodierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup)-Methode aufgerufen wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Befehle bei einem gegebenen Index verwendet werden soll.
- [`setBlendConstant()`](/de/docs/Web/API/GPURenderPassEncoder/setBlendConstant) {{Experimental_Inline}}

  - : Setzt die konstanten Mischfarben- und Alphawerte, die mit den `"constant"` und `"one-minus-constant"` Mischfaktoren verwendet werden (wie in der Deskriptor des [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methodes im `blend`-Eigenschaft festgelegt).

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) {{Experimental_Inline}}

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die Index-Daten für nachfolgende Zeichnungsbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) {{Experimental_Inline}}
  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für diesen Render-Pass verwendet werden soll.
- [`setScissorRect()`](/de/docs/Web/API/GPURenderPassEncoder/setScissorRect) {{Experimental_Inline}}
  - : Setzt das Scheren-Rechteck, das während der Rasterisierungsstufe verwendet wird. Nach der Transformation in Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scheren-Rechtecks fallen, verworfen.
- [`setStencilReference()`](/de/docs/Web/API/GPURenderPassEncoder/setStencilReference) {{Experimental_Inline}}

  - : Setzt den Stencil-Referenzwert, der während der Stencil-Tests mit der `"replace"` Stencil-Operation (wie im Deskriptor des [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methodes in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren, festgelegt) verwendet wird.

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die Vertex-Daten für nachfolgende Zeichnungsbefehle bereitstellt.
- [`setViewport()`](/de/docs/Web/API/GPURenderPassEncoder/setViewport) {{Experimental_Inline}}
  - : Setzt den Viewport, der während der Rasterisierungsphase verwendet wird, um linear von normalisierten Gerätekoordinaten zu Viewport-Koordinaten zuzuordnen.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde.

```js
// …

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Create GPUCommandEncoder to issue commands to the GPU
// Note: render pass descriptor, command encoder, etc. are destroyed after use, fresh one needed for each frame.
const commandEncoder = device.createCommandEncoder();

// Create GPURenderPassDescriptor to tell WebGPU which texture to draw into, then initiate render pass
const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Draw the triangle
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// End the render pass
passEncoder.end();

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
