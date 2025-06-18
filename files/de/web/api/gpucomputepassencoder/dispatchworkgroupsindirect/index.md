---
title: "GPUComputePassEncoder: dispatchWorkgroupsIndirect()-Methode"
short-title: dispatchWorkgroupsIndirect()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroupsIndirect()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle führt ein Gitter von Workgroups aus, das durch die Parameter eines [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) definiert ist, um die Arbeit durchzuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) geleistet wird (d.h. festgelegt über [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)).

## Syntax

```js-nolint
dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der die X-, Y- und Z-Dimensionen des auszuführenden Gitter von Workgroups enthält. Der Puffer muss einen eng gepackten Block von drei 32-Bit-unsigned-Integer-Werten enthalten, die die Dimensionen darstellen (insgesamt 12 Bytes) und in der gleichen Reihenfolge angegeben sind wie die Argumente für [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups). Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(3);
    uint32[0] = 25; // The X value
    uint32[1] = 1; // The Y value
    uint32[2] = 1; // The Z value

    // Write values into a GPUBuffer
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset in Bytes in `indirectBuffer`, an dem die Dimensionsdaten beginnen.

> [!NOTE]
> Die X-, Y- und Z-Dimensionswerte, die an [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups) und `dispatchWorkgroupsIndirect()` übergeben werden, sind die Anzahl der Workgroups, die für jede Dimension ausgeführt werden sollen, und nicht die Anzahl der Shader-Aufrufe, die über jede Dimension hinweg ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, dass wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und Arbeit mit dem Aufruf `dispatchWorkgroupsIndirect(indirectBuffer);` an ihn übergeben wird, wobei `indirectBuffer` X- und Y-Dimensionen von 8 und 8 angibt, der Einstiegspunkt insgesamt 1024 Mal aufgerufen wird — Eine 4 x 4-Workgroup wird 8 Mal entlang der X- und Y-Achsen ausgeführt. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroupsIndirect()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `indirectBuffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` + die durch die `X`, `Y` und `Z`-Dimensionen angegebene Gesamtgröße ist kleiner oder gleich der Größe von `indirectBuffer`'s [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// Set global buffer size
const BUFFER_SIZE = 1000;

// Compute shader; note workgroup size of 64
const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)

...

`;

// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);

const uint32 = new Uint32Array(3);
// Note workgroupCountX is set based on the global buffer size and the shader workgroup count.
uint32[0] = Math.ceil(BUFFER_SIZE / 64);
uint32[1] = 1;
uint32[2] = 1;

const workgroupDimensions = device.createBuffer({
  size: 12,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(workgroupDimensions, 0, uint32, 0, uint32.length);

passEncoder.dispatchWorkgroupsIndirect(workgroupDimensions, 0);

// End the render pass
passEncoder.end();

// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
