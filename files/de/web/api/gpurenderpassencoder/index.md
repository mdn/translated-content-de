---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderPassEncoder`**-Schnittstelle der [WebGPU-API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, wie sie von einem [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Sie ist Teil der gesamten Kodieraktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Render-Pipeline rendert Grafiken zu [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Anhängseln, die typischerweise für die Anzeige in einem {{htmlelement("canvas")}}-Element bestimmt sind, aber sie könnte auch Texturen rendern, die für andere Zwecke verwendet werden und nie auf dem Bildschirm erscheinen. Sie hat zwei Hauptstufen:

- Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten, die in die GPU eingegeben werden, nutzt, um eine Serie von Vertices im 3D-Raum unter Anwendung festgelegter Effekte wie Rotation, Übersetzung oder Perspektive zu positionieren. Die Vertices werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes von ihnen auf der Zeichenfläche abdecken sollte.

- Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den vom Vertex-Shader erzeugten Primitiven abgedeckt wird. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter bereitstellen.

Ein `GPURenderPassEncoder`-Objektinstanz wird über die [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPassEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) {{Experimental_Inline}}
  - : Beginnt eine Okklusionsabfrage am angegebenen Index des betreffenden [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet`-Descriptor-Eigenschaft bei der Aufrufung von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Renderpass auszuführen).
- [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitive basierend auf den Vertex-Buffern, die von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) bereitgestellt werden.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitive basierend auf den Vertex- und Index-Buffern, die von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellt werden.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitive unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect) {{Experimental_Inline}}

  - : Zeichnet indizierte Primitive unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`end()`](/de/docs/Web/API/GPURenderPassEncoder/end) {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Renderpass-Befehlsequenz.
- [`endOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/endOcclusionQuery) {{Experimental_Inline}}
  - : Beendet eine aktive Okklusionsabfrage, die zuvor mit [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) gestartet wurde.
- [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) {{Experimental_Inline}}
  - : Führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgezeichnet wurden, als Teil dieses Renderpasses.
- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen spezifischen Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Label gekennzeichnet ist und alle folgenden kodierten Befehle enthalten wird, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup)-Methode aufgerufen wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet werden soll, für einen gegebenen Index.
- [`setBlendConstant()`](/de/docs/Web/API/GPURenderPassEncoder/setBlendConstant) {{Experimental_Inline}}

  - : Legt die konstanten Farb- und Alphawerte für das Mischen fest, die mit den `"constant"` und `"one-minus-constant"` Mischfaktoren verwendet werden (wie im Descriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode im `blend`-Eigentum festgelegt).

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) {{Experimental_Inline}}

  - : Legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indexdaten für nachfolgende Zeichenbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) {{Experimental_Inline}}
  - : Legt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) fest, die für diesen Renderpass verwendet werden soll.
- [`setScissorRect()`](/de/docs/Web/API/GPURenderPassEncoder/setScissorRect) {{Experimental_Inline}}
  - : Legt das Scherrechteck fest, das während der Rasterisierungsstufe verwendet wird. Nach der Umwandlung in Ansichtsbereichskoordinaten werden alle Fragmente, die außerhalb des Scherrechtecks fallen, verworfen.
- [`setStencilReference()`](/de/docs/Web/API/GPURenderPassEncoder/setStencilReference) {{Experimental_Inline}}

  - : Legt den Referenzwert für Schablonen fest, der bei Schablonentests mit der `"replace"` Schablonenoperation verwendet wird (wie im Descriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode in den Eigenschaften der verschiedenen Schablonenoperationen festgelegt).

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder hebt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) auf, der Vertexdaten für nachfolgende Zeichenbefehle bereitstellt.
- [`setViewport()`](/de/docs/Web/API/GPURenderPassEncoder/setViewport) {{Experimental_Inline}}
  - : Legt den Ansichtsbereich fest, der während der Rasterisierungsstufe verwendet wird, um von normalisierten Gerätekoordinaten zu Ansichtsbereichskoordinaten linear zu mappen.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
