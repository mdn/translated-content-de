---
title: "GPURenderPassEncoder: setVertexBuffer() Methode"
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
  - : Eine Zahl, die auf den Vertex-Puffer-Slot verweist, für den der Vertex-Puffer festgelegt werden soll.
- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die Vertex-Daten für nachfolgende Zeichenbefehle enthält, oder `null`, in welchem Fall ein zuvor in diesem Slot gesetzter Puffer entfernt wird.
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes in `buffer` darstellt, wo die Vertex-Daten beginnen. Wenn weggelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Vertex-Daten darstellt. Wenn weggelassen, ist der Standardwert von `size` die `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setVertexBuffer()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.VERTEX`-Flag.
- `slot` ist kleiner als das `maxVertexBuffers` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `offset` + `size` ist kleiner oder gleich der `buffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `offset` ist ein Vielfaches von 4.

## Beispiele

### Vertex-Puffer setzen

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen aus dem `GPURenderPassEncoder`, der über [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellt wurde. `setVertexBuffer()` wird verwendet, um die Quelle der Vertex-Daten festzulegen.

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

### Vertex-Puffer entfernen

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
