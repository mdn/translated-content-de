---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPURenderPassEncoder`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgeführt werden. Es ist Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Render-Pipeline rendert Grafiken zu [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Anhängen, die typischerweise zur Anzeige in einem {{htmlelement("canvas")}}-Element vorgesehen sind, aber sie könnte auch Texturen rendern, die für andere Zwecke verwendet werden, die niemals auf dem Bildschirm erscheinen. Sie hat zwei Hauptstufen:

- Eine Vertex-Stufe, bei der ein Vertex-Shader Positionsdaten nimmt, die in die GPU eingespeist werden, und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengesetzt und von der GPU gerastert, um herauszufinden, welche Pixel jedes davon auf der Zeichenfläche abdecken sollten.

- Eine Fragment-Stufe, bei der ein Fragment-Shader die Farbe für jedes von den Primitiven bedeckte Pixel berechnet, die vom Vertex-Shader produziert wurden. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter liefern.

Eine Instanz eines `GPURenderPassEncoder`-Objekts wird über die [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Methode erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPassEncoder/label)
  - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

## Instanz-Methoden

- [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery)
  - : Beginnt eine Okklusionsabfrage an dem spezifizierten Index des relevanten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet`-Deskriptoreigenschaft beim Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Render-Pass auszuführen).
- [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw)
  - : Zeichnet Primitiven basierend auf den Vertex-Bufferen, die von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) bereitgestellt werden.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Bufferen.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect)
  - : Zeichnet Primitiven unter Verwendung von Parametern, die von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect)

  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die von einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`end()`](/de/docs/Web/API/GPURenderPassEncoder/end)
  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlssequenz.
- [`endOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/endOcclusionQuery)
  - : Beendet eine aktive Okklusionsabfrage, die zuvor mit [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) gestartet wurde.
- [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)
  - : Führt Befehle aus, die zuvor in den referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s als Teil dieses Render-Passes aufgezeichnet wurden.
- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)-Aufruf begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe, die mit einem spezifizierten Label markiert wird und alle folgenden kodierten Befehle enthält, bis eine [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) Methode aufgerufen wird.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Befehle bei einem bestimmten Index verwendet werden soll.
- [`setBlendConstant()`](/de/docs/Web/API/GPURenderPassEncoder/setBlendConstant)

  - : Setzt die konstante Blend-Farbe und Alpha-Werte, die mit den `"constant"` und `"one-minus-constant"` Blend-Faktoren verwendet werden (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode in der `blend`-Eigenschaft festgelegt).

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer)

  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichnungsbefehle bereitstellt.

- [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline)
  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für diesen Render-Pass verwendet werden soll.
- [`setScissorRect()`](/de/docs/Web/API/GPURenderPassEncoder/setScissorRect)
  - : Setzt das Scherrechteck, das während der Rasterisierung verwendet wird. Nach der Transformation in Ansichtskoordinaten werden alle Fragmente, die außerhalb des Scherrechtecks liegen, verworfen.
- [`setStencilReference()`](/de/docs/Web/API/GPURenderPassEncoder/setStencilReference)

  - : Setzt den Stencil-Referenzwert, der bei Stencil-Tests mit der `"replace"` Stencil-Operation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methode in den Eigenschaften festgelegt, die die verschiedenen Stencil-Operationen definieren).

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer)
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertex-Daten für nachfolgende Zeichnungsbefehle bereitstellt.
- [`setViewport()`](/de/docs/Web/API/GPURenderPassEncoder/setViewport)
  - : Setzt die Ansichtsfläche, die während der Rasterisierung verwendet wird, um von normalisierten Gerätekoordinaten zu Ansichtskoordinaten zu mappen.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, das über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
