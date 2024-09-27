---
title: "GPURenderPassEncoder: Methode setVertexBuffer()"
short-title: setVertexBuffer()
slug: Web/API/GPURenderPassEncoder/setVertexBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setVertexBuffer()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) für den angegebenen Slot, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellen wird.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die den Vertex-Buffer-Slot referenziert, für den der Vertex-Buffer gesetzt werden soll.
- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, welcher die Vertex-Daten für nachfolgende Zeichenbefehle enthält, oder `null`, in diesem Fall wird ein zuvor gesetzter Puffer im angegebenen Slot entfernt.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes innerhalb von `buffer` darstellt, wo die Vertex-Daten beginnen. Wenn weggelassen, ist `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der Vertex-Daten enthält, die in `buffer` enthalten sind. Wenn weggelassen, ist `size` standardmäßig die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` abzüglich `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Vertex-Buffer setzen

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `setVertexBuffer()` wird wie erforderlich verwendet, um die Quelle der Vertex-Daten festzulegen.

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

### Vertex-Buffer entfernen

```js
// Set vertex buffer in slot 0
passEncoder.setVertexBuffer(0, vertexBuffer);

// Later, unset vertex buffer in slot 0
passEncoder.setVertexBuffer(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
