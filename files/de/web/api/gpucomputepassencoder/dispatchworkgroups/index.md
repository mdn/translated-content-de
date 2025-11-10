---
title: "GPUComputePassEncoder: dispatchWorkgroups() Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroups()`**-Methode der
[`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle sendet ein spezifisches Raster von Arbeitsgruppen aus, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) durchgeführt wird (d.h. festgelegt über [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)).

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des zu sendenden Arbeitsgruppenrasters.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des zu sendenden Arbeitsgruppenrasters. Wird dieser Parameter weggelassen, wird `workgroupCountY` auf 1 gesetzt.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des zu sendenden Arbeitsgruppenrasters. Wird dieser Parameter weggelassen, wird `workgroupCountZ` auf 1 gesetzt.

> [!NOTE]
> Die an `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen X-, Y- und Z-Dimensionswerte sind die Anzahl der Arbeitsgruppen, die für jede Dimension gesendet werden, nicht die Anzahl der Shader-Invozierungen, die über jede Dimension hinweg ausgeführt werden. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, dass wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` gesendet wird, der Einstiegspunkt insgesamt 1024-mal aufgerufen wird — Eine 4 x 4 Arbeitsgruppe wird 8-mal entlang beider Achsen X und Y gestartet. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroups()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` dürfen alle nicht größer sein als die `maxComputeWorkgroupsPerDimension`-Grenze des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [limits](/de/docs/Web/API/GPUSupportedLimits).

## Beispiele

In unserem [Basis-Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen von dem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Zu Beginn des Codes legen wir eine globale Puffergröße von 1000 fest. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 gesetzt ist.

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

Später im Code wird der `dispatchWorkgroups()` `workgroupCountX` Parameter basierend auf der globalen Puffergröße und der Shader-Arbeitsgruppenzahl festgelegt.

```js
// …

// Create GPUCommandEncoder to encode commands to issue to the GPU
const commandEncoder = device.createCommandEncoder();

// Initiate render pass
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
