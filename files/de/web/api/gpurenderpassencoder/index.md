---
title: GPURenderPassEncoder
slug: Web/API/GPURenderPassEncoder
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Schnittstelle **`GPURenderPassEncoder`** der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} kodiert Befehle, die mit der Steuerung der Vertex- und Fragment-Shader-Stufen verbunden sind, wie sie von einer {{domxref("GPURenderPipeline")}} ausgegeben werden. Sie ist Teil der gesamten Kodierungsaktivität eines {{domxref("GPUCommandEncoder")}}.

Eine Render-Pipeline rendert Grafiken zu {{domxref("GPUTexture")}}-Anlagen, die typischerweise zur Anzeige in einem {{htmlelement("canvas")}}-Element vorgesehen sind, aber es könnte auch zu Texturen rendern, die für andere Zwecke verwendet werden und nie auf dem Bildschirm erscheinen. Sie hat zwei Hauptphasen:

- Eine Vertex-Phase, in der ein Vertex-Shader die in die GPU eingespeisten Positionsdaten aufnimmt und verwendet, um eine Reihe von Vertexen im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Drehung, Translation oder Perspektive angewendet werden. Die Vertexe werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein der gerenderten Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes davon auf der Zeichnungsleinwand abdecken sollte.

- Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes von den vom Vertex-Shader produzierten Primitiven abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter bereitstellen.

Ein `GPURenderPassEncoder` Objektinstanz wird über die Eigenschaft {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPURenderPassEncoder.label", "label")}} {{Experimental_Inline}}
  - : Ein Zeichenfolgenwert, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.

## Instanz-Methoden

- {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}} {{Experimental_Inline}}
  - : Beginnt eine Occlusion Query am angegebenen Index des relevanten {{domxref("GPUQuerySet")}} (bereitgestellt als Wert der `occlusionQuerySet` deskriptiven Eigenschaft beim Aufrufen von {{domxref("GPUCommandEncoder.beginRenderPass()")}}, um den Render-Durchgang auszuführen).
- {{domxref("GPURenderPassEncoder.draw", "draw()")}} {{Experimental_Inline}}
  - : Zeichnet Primitive basierend auf den von {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} bereitgestellten Vertex-Puffern.
- {{domxref("GPURenderPassEncoder.drawIndexed", "drawIndexed()")}} {{Experimental_Inline}}
  - : Zeichnet indizierte Primitive basierend auf den von {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} und {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}} bereitgestellten Vertex- und Indexpuffern.
- {{domxref("GPURenderPassEncoder.drawIndirect", "drawIndirect()")}} {{Experimental_Inline}}
  - : Zeichnet Primitive, indem Parameter aus einem {{domxref("GPUBuffer")}} gelesen werden.
- {{domxref("GPURenderPassEncoder.drawIndexedIndirect", "drawIndexedIndirect()")}} {{Experimental_Inline}}
  - : Zeichnet indizierte Primitive, indem Parameter aus einem {{domxref("GPUBuffer")}} gelesen werden.

- {{domxref("GPURenderPassEncoder.end", "end()")}} {{Experimental_Inline}}
  - : Beendet die Aufzeichnung der aktuellen Render-Pass-Befehlsfolge.
- {{domxref("GPURenderPassEncoder.endOcclusionQuery", "endOcclusionQuery()")}} {{Experimental_Inline}}
  - : Beendet eine aktive Occlusion Query, die zuvor mit {{domxref("GPURenderPassEncoder.beginOcclusionQuery", "beginOcclusionQuery()")}} gestartet wurde.
- {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} {{Experimental_Inline}}
  - : Führt Befehle aus, die zuvor in den referenzierten {{domxref("GPURenderBundle")}}s aufgezeichnet wurden, als Teil dieses Render-Durchgangs.
- {{domxref("GPURenderPassEncoder.insertDebugMarker", "insertDebugMarker()")}} {{Experimental_Inline}}
  - : Markiert einen bestimmten Punkt in einer Reihe von kodierten Befehlen mit einem Label.
- {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}} {{Experimental_Inline}}
  - : Beendet eine Debug-Gruppe, die mit einem {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}}-Aufruf begonnen wurde.
- {{domxref("GPURenderPassEncoder.pushDebugGroup", "pushDebugGroup()")}} {{Experimental_Inline}}
  - : Beginnt eine Debug-Gruppe, die mit einem spezifizierten Label markiert ist und alle nachfolgenden kodierten Befehle bis zum Aufruf der Methode {{domxref("GPURenderPassEncoder.popDebugGroup", "popDebugGroup()")}} enthalten wird.
- {{domxref("GPURenderPassEncoder.setBindGroup", "setBindGroup()")}} {{Experimental_Inline}}
  - : Setzt die {{domxref("GPUBindGroup")}}, die für nachfolgende Render-Befehle verwendet werden soll, für einen bestimmten Index.
- {{domxref("GPURenderPassEncoder.setBlendConstant", "setBlendConstant()")}} {{Experimental_Inline}}
  - : Setzt die konstante Mischfarbe und Alpha-Werte, die mit `"constant"` und `"one-minus-constant"` Mischfaktoren verwendet werden (wie in der descriptor der {{domxref("GPUDevice.createRenderPipeline()")}}-Methode im `blend`-Eigenschaft gesetzt).

- {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}} {{Experimental_Inline}}
  - : Setzt den aktuellen {{domxref("GPUBuffer")}}, der Indexdaten für nachfolgende Zeichnungsbefehle bereitstellen wird.

- {{domxref("GPURenderPassEncoder.setPipeline", "setPipeline()")}} {{Experimental_Inline}}
  - : Setzt die {{domxref("GPURenderPipeline")}}, die für diesen Render-Durchgang verwendet werden soll.
- {{domxref("GPURenderPassEncoder.setScissorRect", "setScissorRect()")}} {{Experimental_Inline}}
  - : Setzt das Scherenrechteck, das während der Rasterisierungsphase verwendet wird. Nach der Transformation in Ansichtskoordinaten werden alle Fragmente, die außerhalb des Scherenrechtecks fallen, verworfen.
- {{domxref("GPURenderPassEncoder.setStencilReference", "setStencilReference()")}} {{Experimental_Inline}}
  - : Setzt den Schablonenreferenzwert, der während Schablonentests mit der `"replace"` Schablonenoperation verwendet wird (wie in der descriptor der {{domxref("GPUDevice.createRenderPipeline()")}}-Methode gesetzt, in den Eigenschaften, die die verschiedenen Schablonenoperationen definieren).

- {{domxref("GPURenderPassEncoder.setVertexBuffer", "setVertexBuffer()")}} {{Experimental_Inline}}
  - : Setzt oder entfernt den aktuellen {{domxref("GPUBuffer")}}, der Vertexdaten für nachfolgende Zeichnungsbefehle bereitstellen wird.
- {{domxref("GPURenderPassEncoder.setViewport", "setViewport()")}} {{Experimental_Inline}}
  - : Setzt die Ansichtsfläche, die während der Rasterisierungsphase verwendet wird, um von normalisierten Gerätekoordinaten auf Ansichtskoordinaten linear abzubilden.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, das über {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt wurde.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Erstellen Sie GPUCommandEncoder, um Befehle an die GPU zu senden
// Hinweis: Render-Pass-Deskriptor, Befehls-Encoder usw. werden nach der Verwendung zerstört, ein neuer ist für jeden Frame erforderlich.
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie GPURenderPassDescriptor, um WebGPU mitzuteilen, in welche Textur gezeichnet werden soll, und starten Sie dann den Render-Durchgang
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

// Zeichnen Sie das Dreieck
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);

// Beenden Sie den Render-Durchgang
passEncoder.end();

// Beenden Sie den Frame, indem Sie ein Array von Befehls-Puffern zur Ausführung an die Befehlswarteschlange übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
