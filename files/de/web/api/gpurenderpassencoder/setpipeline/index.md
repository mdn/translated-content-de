---
title: "GPURenderPassEncoder: setPipeline()-Methode"
short-title: setPipeline()
slug: Web/API/GPURenderPassEncoder/setPipeline
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setPipeline()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle legt die zu verwendende {{domxref("GPURenderPipeline")}} für nachfolgende Render-Pass-Befehle fest.

## Syntax

```js-nolint
setPipeline(pipeline)
```

### Parameter

- `pipeline`
  - : Die {{domxref("GPURenderPipeline")}}, die für nachfolgende Render-Pass-Befehle verwendet werden soll.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setPipeline()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- Wenn die {{domxref("GPURenderPipeline")}} in die Tiefenkomponente des Tiefen-/Stencil-Anhangs schreibt, ist `depthReadOnly` (wie im Deskriptor des ursprünglichen {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs angegeben) `true`.
- Wenn die {{domxref("GPURenderPipeline")}} in die Stencil-Komponente des Tiefen-/Stencil-Anhangs schreibt, ist `stencilReadOnly` (wie im Deskriptor des ursprünglichen {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufs angegeben) `true`.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom `GPURenderPassEncoder`, der über {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellt wird. `setPipeline()` wird an einer geeigneten Stelle aufgerufen, um die Render-Pipeline festzulegen.

```js
// ...

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// Erstellen Sie den GPUCommandEncoder, um Befehle an die GPU auszugeben
// Hinweis: render pass descriptor, command encoder usw. werden nach Gebrauch zerstört, ein neuer ist für jedes Frame erforderlich.
const commandEncoder = device.createCommandEncoder();

// Erstellen Sie GPURenderPassDescriptor, um WebGPU anzuweisen, in welche Textur gezeichnet werden soll, und beginnen Sie dann mit dem Render-Pass
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

// Beenden Sie den Render-Pass
passEncoder.end();

// Beenden Sie das Frame, indem Sie ein Array von Command-Buffern zur Ausführung an die Command-Queue übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
