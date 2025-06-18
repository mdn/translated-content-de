---
title: "GPURenderPassEncoder: drawIndexedIndirect() Methode"
short-title: drawIndexedIndirect()
slug: Web/API/GPURenderPassEncoder/drawIndexedIndirect
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`drawIndexedIndirect()`** Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Schnittstelle zeichnet indizierte Primitiven unter Verwendung von Parametern, die aus einem [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) gelesen werden.

## Syntax

```js-nolint
drawIndexedIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die Werte `indexCount`, `instanceCount`, `firstIndex`, `baseVertex` und `firstInstance` enthält, die für die Durchführung der Zeichnungsoperation benötigt werden. Der Puffer muss einen dicht gepackten Block von fünf 32-Bit-Integerwerten enthalten, die die Werte darstellen (insgesamt 20 Bytes), und zwar in der gleichen Reihenfolge wie die Argumente für [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed). Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(5);
    uint32[0] = 3; // The indexCount value
    uint32[1] = 1; // The instanceCount value
    uint32[2] = 0; // The firstIndex value
    uint32[3] = 0; // The baseVertex value
    uint32[4] = 0; // The firstInstance value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

    > [!NOTE]
    > Das `indirect-first-instance` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit Nicht-Null-`firstInstance`-Werte verwendet werden können. Wenn das `indirect-first-instance` Feature nicht aktiviert ist und `firstInstance` nicht null ist, wird der `drawIndexedIndirect()`-Aufruf als No-Op behandelt.

- `indirectOffset`
  - : Der Offset, in Bytes, in `indirectBuffer`, an dem die Wertedaten beginnen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`drawIndirect()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `indirectBuffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDIRECT` Flag.
- `indirectOffset` + die durch die Werteparameter im `indirectBuffer` angegebene Gesamtgröße ist kleiner oder gleich `indirectBuffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// …

// Create GPURenderPassEncoder
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);

// Set pipeline and vertex buffer
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.setIndexBuffer(indexBuffer, "uint16");

// Create drawIndexedIndirect values
const uint32 = new Uint32Array(5);
uint32[0] = 3;
uint32[1] = 1;
uint32[2] = 0;
uint32[3] = 0;
uint32[4] = 0;

// Create a GPUBuffer and write the draw values into it
const drawValues = device.createBuffer({
  size: 20,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(drawValues, 0, uint32, 0, uint32.length);

// Draw the vertices
passEncoder.drawIndexedIndirect(drawValues, 0);

// End the render pass
passEncoder.end();

// End frame by passing array of GPUCommandBuffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
