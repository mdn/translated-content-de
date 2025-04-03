---
title: "GPUComputePassEncoder: dispatchWorkgroups() Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroups()`** Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle sendet ein spezifisches Raster von Workgroups, um die Arbeit des aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) (d.h. gesetzt durch [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)) auszuführen.

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des Rasters von Workgroups, das gesendet werden soll.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des Rasters von Workgroups, das gesendet werden soll. Wenn weggelassen, ist `workgroupCountY` standardmäßig 1.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des Rasters von Workgroups, das gesendet werden soll. Wenn weggelassen, ist `workgroupCountZ` standardmäßig 1.

> [!NOTE]
> Die an `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen Werte für die X-, Y- und Z-Dimension sind die Anzahl der Workgroups, die für jede Dimension gesendet werden sollen, nicht die Anzahl der Shader-Aufrufe, die über jede Dimension ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert, und Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` gesendet wird, wird der Einstiegspunkt insgesamt 1024 Mal aufgerufen — Es wird eine 4 x 4 Arbeitsgruppe 8 Mal entlang der X- und Y-Achse gesendet. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Beim Aufruf von **`dispatchWorkgroups()`** müssen die folgenden Kriterien erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` sind alle kleiner oder gleich dem `maxComputeWorkgroupsPerDimension`-[Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Am Anfang des Codes setzen wir eine globale Pufferggröße von 1000. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 eingestellt ist.

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

Später im Code wird der `dispatchWorkgroups()`-Parameter `workgroupCountX` basierend auf der globalen Pufferggröße und der Arbeitsgruppenzahl des Shaders gesetzt.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
