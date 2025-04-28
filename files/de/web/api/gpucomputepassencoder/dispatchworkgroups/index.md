---
title: "GPUComputePassEncoder: Methode dispatchWorkgroups()"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`dispatchWorkgroups()`** der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) Schnittstelle sendet eine bestimmte Anordnung von Workgroups, um die Arbeit auszuführen, die von der aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) durchgeführt wird (d.h. festgelegt über [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)).

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des zu sendenden Workgroup-Gitters.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des zu sendenden Workgroup-Gitters. Wenn weggelassen, ist der Standardwert für `workgroupCountY` 1.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des zu sendenden Workgroup-Gitters. Wenn weggelassen, ist der Standardwert für `workgroupCountZ` 1.

> [!NOTE]
> Die an `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen X-, Y- und Z-Dimensionswerte sind die Anzahl der Workgroups, die für jede Dimension gesendet werden sollen, nicht die Anzahl der Shader-Aufrufe, die über jede Dimension hinweg ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und Arbeit damit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` gesendet wird, wird der Einstiegspunkt insgesamt 1024 mal aufgerufen — Es wird eine 4 x 4 Workgroup 8 Mal entlang sowohl der X- als auch der Y-Achse gesendet. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroups()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` sind alle kleiner oder gleich der `maxComputeWorkgroupsPerDimension` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Am Anfang des Codes wird eine globale Puffergröße von 1000 festgelegt. Beachten Sie auch, dass die Workgroup-Größe im Shader auf 64 gesetzt ist.

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

Später im Code wird der `workgroupCountX` Parameter der `dispatchWorkgroups()`-Methode basierend auf der globalen Puffergröße und der Shader-Workgroup-Anzahl festgelegt.

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
