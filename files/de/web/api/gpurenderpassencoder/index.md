---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderPassEncoder`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, wie sie von einem [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Sie bildet einen Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Render-Pipeline rendert Grafiken zu [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Anhängseln, die typischerweise zur Darstellung in einem {{htmlelement("canvas")}}-Element gedacht sind, aber auch zu Texturen rendern können, die für andere Zwecke verwendet werden und nie auf dem Bildschirm erscheinen. Sie hat zwei Hauptphasen:

- Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten, die in die GPU eingespeist werden, verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes abdecken sollte, auf der Zeichenfläche.

- Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes vom Vertex-Shader erzeugte Primitive abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter liefern.

Ein `GPURenderPassEncoder` Objekt wird über die [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Methode erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPassEncoder/label)
  - : Ein String, der ein Etikett bietet, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery)
  - : Beginnt eine Okklusionsabfrage am angegebenen Index des relevanten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet` Deskriptoreigenschaft beim Aufrufen von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) für den Ausführungsdurchgang).
- [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw)
  - : Zeichnet Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect)
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect)
  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

- [`end()`](/de/docs/Web/API/GPURenderPassEncoder/end)
  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlssequenz.
- [`endOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/endOcclusionQuery)
  - : Beendet eine aktive Okklusionsabfrage, die zuvor mit [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) gestartet wurde.
- [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)
  - : Führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s aufgenommen wurden, als Teil dieses Render-Passes.
- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker)
  - : Markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Etikett.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup)
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup)
  - : Beginnt eine Debug-Gruppe, die mit einem angegebenen Etikett markiert wird und alle nachfolgenden kodierten Befehle bis zu einer Methode [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)
  - : Setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Befehle verwendet werden soll, für einen bestimmten Index.
- [`setBlendConstant()`](/de/docs/Web/API/GPURenderPassEncoder/setBlendConstant)
  - : Setzt die konstanten Mischfarb- und Alphawerte, die mit `"constant"` und `"one-minus-constant"` Mischfaktoren verwendet werden (wie im Deskriptor der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) im `blend`-Eigenschaftensatz festgelegt).

- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer)
  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indiz-Daten für nachfolgende Zeichnungsbefehle bereitstellen wird.

- [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline)
  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für diesen Render-Pass verwendet werden soll.
- [`setScissorRect()`](/de/docs/Web/API/GPURenderPassEncoder/setScissorRect)
  - : Setzt das Scherrechteck, das während der Rasterisierungsstufe verwendet wird. Nach der Transformation in Ansichtsport-Koordinaten werden alle Fragmente, die außerhalb des Scherrechtecks liegen, verworfen.
- [`setStencilReference()`](/de/docs/Web/API/GPURenderPassEncoder/setStencilReference)
  - : Setzt den Stencil-Referenzwert, der bei Stencil-Tests mit der `"replace"` Stencil-Operation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methode festgelegt, in den Eigenschaften, die die verschiedenen Stencil-Operationen definieren).

- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer)
  - : Setzt oder hebt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) auf, der Vertex-Daten für nachfolgende Zeichnungsbefehle bereitstellen wird.
- [`setViewport()`](/de/docs/Web/API/GPURenderPassEncoder/setViewport)
  - : Setzt den Ansichtsport, der während der Rasterisierungsstufe verwendet wird, um von normalisierten Gerätekoordinaten zu Ansichtsport-Koordinaten linear zu transformieren.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wird.

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
