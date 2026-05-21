---
title: "GPUComputePassEncoder: dispatchWorkgroups()-Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroups()`**-Methode des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Interfaces führt ein spezifisches Raster von Arbeitsgruppen aus, um die Arbeit zu erledigen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgeführt wird (d.h. gesetzt über [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)).

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des Rasters der Arbeitsgruppen, die ausgeführt werden sollen.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des Rasters der Arbeitsgruppen, die ausgeführt werden sollen. Wenn weggelassen, wird `workgroupCountY` standardmäßig auf 1 gesetzt.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des Rasters der Arbeitsgruppen, die ausgeführt werden sollen. Wenn weggelassen, wird `workgroupCountZ` standardmäßig auf 1 gesetzt.

> [!NOTE]
> Die in `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen Dimensionen X, Y und Z sind die Anzahl der Arbeitsgruppen, die für jede Dimension ausgeführt werden sollen, nicht die Anzahl der Shader-Aufrufe, die in jeder Dimension ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` an ihn übergeben wird, wird der Einstiegspunkt insgesamt 1024 Mal aufgerufen — Ein 4 x 4-Arbeitsgruppe wird 8 Mal entlang der X- und Y-Achsen ausgeführt. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`dispatchWorkgroups()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` müssen alle kleiner oder gleich dem `maxComputeWorkgroupsPerDimension` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) sein.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Am Anfang des Codes setzen wir eine globale Puffergroße von 1000. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 gesetzt ist.

```js
const BUFFER_SIZE = 1000;

// Compute shader
const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)

...

`;
```

Später im Code wird der Parameter `dispatchWorkgroups()` `workgroupCountX` basierend auf der globalen Puffergroße und der Arbeitsgruppenzahl des Shaders gesetzt.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate compute pass
const passEncoder = commandEncoder.beginComputePass();

// Issue commands
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
