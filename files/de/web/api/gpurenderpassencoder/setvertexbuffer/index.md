---
title: "GPURenderPassEncoder: setVertexBuffer() Methode"
short-title: setVertexBuffer()
slug: Web/API/GPURenderPassEncoder/setVertexBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setVertexBuffer()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt oder entfernt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) für den angegebenen Slot, der Vertex-Daten für nachfolgende Zeichenbefehle bereitstellt.

## Syntax

```js-nolint
setVertexBuffer(slot, buffer, offset, size)
```

### Parameter

- `slot`
  - : Eine Zahl, die auf den Vertex-Buffer-Slot verweist, für den der Vertex-Buffer gesetzt werden soll.
- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer repräsentiert, der die Vertex-Daten für nachfolgende Zeichenbefehle enthält, oder `null`, in welchem Fall ein zuvor gesetzter Buffer in dem angegebenen Slot entfernt wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` darstellt, an dem die Vertex-Daten beginnen. Wenn weggelassen, wird `offset` standardmäßig auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe der in `buffer` enthaltenen Vertex-Daten in Bytes repräsentiert. Wenn weggelassen, wird die `size` standardmäßig auf die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` - `offset` gesetzt.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Setzen des Vertex-Buffers

In unserem [Basic Render Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `setVertexBuffer()` wird verwendet, um die Quelle der Vertex-Daten entsprechend festzulegen.

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

### Entfernen des Vertex-Buffers

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
