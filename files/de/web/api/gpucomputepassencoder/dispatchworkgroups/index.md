---
title: "GPUComputePassEncoder: dispatchWorkgroups() Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 4b47c0aad363dcc69a6ccca5940055491fa03594
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroups()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle dispatcht ein spezifisches Raster von Arbeitsgruppen, um die Arbeit auszuführen, die vom aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) (d.h. festgelegt durch [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)) erledigt wird.

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des Rasters der zu dispatchenden Arbeitsgruppen.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des Rasters der zu dispatchenden Arbeitsgruppen. Wird dieser Parameter weggelassen, ist der Standardwert für `workgroupCountY` 1.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des Rasters der zu dispatchenden Arbeitsgruppen. Wird dieser Parameter weggelassen, ist der Standardwert für `workgroupCountZ` 1.

> [!NOTE]
> Die an `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen X-, Y- und Z-Dimensionswerte entsprechen der Anzahl der zu dispatchenden Arbeitsgruppen pro Dimension, nicht der Anzahl der Shader-Aufrufe, die über jede Dimension ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und die Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` dispatcht wird, wird der Einstiegspunkt insgesamt 1024 Mal aufgerufen — Es wird eine 4 x 4 Arbeitsgruppe 8 Mal entlang beider Achsen X und Y dispatcht. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroups()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` müssen alle kleiner oder gleich dem `maxComputeWorkgroupsPerDimension` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) sein.

## Beispiele

In unserem [Grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Am Anfang des Codes setzen wir eine globale Puffergröße von 1000. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 gesetzt ist.

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

Später im Code wird der `dispatchWorkgroups()`-Parameter `workgroupCountX` basierend auf der globalen Puffergröße und der Arbeitsgruppengröße des Shaders festgelegt.

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
