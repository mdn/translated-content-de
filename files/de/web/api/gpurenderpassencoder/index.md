---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPURenderPassEncoder`** Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Phasen beziehen, wie sie von einem [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgeführt werden. Sie ist Teil der allgemeinen Kodieraktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

Eine Render-Pipeline rendert Grafik an [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Anhänge, die normalerweise zur Darstellung in einem {{htmlelement("canvas")}}-Element vorgesehen sind, aber auch zu Texturen rendern kann, die für andere Zwecke verwendet werden und nie auf dem Bildschirm erscheinen. Sie hat zwei Hauptphasen:

- Eine Vertex-Phase, in der ein Vertex-Shader Positionsdaten, die in die GPU eingespeist werden, verwendet, um eine Reihe von Vertices im 3D-Raum durch Anwendung von bestimmten Effekten wie Drehung, Translation oder Perspektive zu positionieren. Die Vertices werden dann zu Primitiven wie Dreiecken zusammengesetzt (dem grundlegenden Baustein von gerenderten Grafiken) und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes von ihnen auf der Zeichenfläche abdecken soll.

- Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes von den Primitiven, die vom Vertex-Shader erzeugt wurden, abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter liefern.

Ein `GPURenderPassEncoder` Objekt wird über die [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Eigenschaft erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`label`](/de/docs/Web/API/GPURenderPassEncoder/label) {{Experimental_Inline}}
  - : Ein String, der ein Label bereitstellt, das zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zur Identifikation des Objekts verwendet werden kann.

## Instanz-Methoden

- [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) {{Experimental_Inline}}
  - : Beginnt eine Okklusionsabfrage am angegebenen Index des relevanten [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) (bereitgestellt als Wert der `occlusionQuerySet` Deskriptoreigenschaft beim Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass), um den Renderprozess auszuführen).
- [`draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) {{Experimental_Inline}}
  - : Zeichnet Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) bereitgestellten Vertex-Puffern.
- [`drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven basierend auf den von [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) und [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bereitgestellten Vertex- und Index-Puffern.
- [`drawIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndirect) {{Experimental_Inline}}
  - : Zeichnet Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`drawIndexedIndirect()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexedIndirect) {{Experimental_Inline}}
  - : Zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.
- [`end()`](/de/docs/Web/API/GPURenderPassEncoder/end) {{Experimental_Inline}}
  - : Vervollständigt die Aufzeichnung der aktuellen Renderpass-Befehlssequenz.
- [`endOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/endOcclusionQuery) {{Experimental_Inline}}
  - : Beendet eine aktive Okklusionsabfrage, die zuvor mit [`beginOcclusionQuery()`](/de/docs/Web/API/GPURenderPassEncoder/beginOcclusionQuery) gestartet wurde.
- [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) {{Experimental_Inline}}
  - : Führt Befehle aus, die zuvor in die referenzierten [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)s als Teil dieses Renderpasses aufgezeichnet wurden.
- [`insertDebugMarker()`](/de/docs/Web/API/GPURenderPassEncoder/insertDebugMarker) {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Serie von kodierten Befehlen mit einem Label.
- [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem Aufruf von [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) begonnen wurde.
- [`pushDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/pushDebugGroup) {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem bestimmten Label markiert wird und alle nachfolgenden kodierten Befehle bis zum Aufruf der [`popDebugGroup()`](/de/docs/Web/API/GPURenderPassEncoder/popDebugGroup) Methode enthält.
- [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) {{Experimental_Inline}}
  - : Legt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Render-Befehle für einen bestimmten Index verwendet wird.
- [`setBlendConstant()`](/de/docs/Web/API/GPURenderPassEncoder/setBlendConstant) {{Experimental_Inline}}
  - : Setzt die konstante Mischfarbe und Alphawerte, die mit den Mischfaktoren `"constant"` und `"one-minus-constant"` verwendet werden (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methode im `blend`-Eigentum festgelegt).
- [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) {{Experimental_Inline}}
  - : Setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichenbefehle bereitstellt.
- [`setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) {{Experimental_Inline}}
  - : Setzt die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die für diesen Renderpass verwendet werden soll.
- [`setScissorRect()`](/de/docs/Web/API/GPURenderPassEncoder/setScissorRect) {{Experimental_Inline}}
  - : Setzt das Scherrechteck, das während der Rasterisierungsphase verwendet wird. Nach der Transformation in Viewport-Koordinaten werden alle Fragmente, die außerhalb des Scherrechtecks liegen, verworfen.
- [`setStencilReference()`](/de/docs/Web/API/GPURenderPassEncoder/setStencilReference) {{Experimental_Inline}}
  - : Setzt den Schablonen-Referenzwert, der bei Schablonentests mit der `"replace"` Schablonenoperation verwendet wird (wie im Deskriptor der [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methode in den Eigenschaften, die die verschiedenen Schablonenoperationen definieren, festgelegt).
- [`setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Vertexdaten für nachfolgende Zeichenbefehle bereitstellt.
- [`setViewport()`](/de/docs/Web/API/GPURenderPassEncoder/setViewport) {{Experimental_Inline}}
  - : Setzt den Viewport, der während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten auf Viewport-Koordinaten linear abzubilden.

## Beispiele

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde.

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
