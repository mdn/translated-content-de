---
title: "GPUComputePassEncoder: dispatchWorkgroups()-Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`dispatchWorkgroups()`**-Methode des [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Interfaces sendet ein spezifisches Raster von Arbeitsgruppen, um die Arbeit auszuführen, die vom aktuellen [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) (d.h. gesetzt über [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline)) durchgeführt wird.

## Syntax

```js-nolint
dispatchWorkgroups(workgroupCountX)
dispatchWorkgroups(workgroupCountX, workgroupCountY)
dispatchWorkgroups(workgroupCountX, workgroupCountY, workgroupCountZ)
```

### Parameter

- `workgroupCountX`
  - : Die X-Dimension des Rasters von Arbeitsgruppen, die gesendet werden sollen.
- `workgroupCountY` {{optional_inline}}
  - : Die Y-Dimension des Rasters von Arbeitsgruppen, die gesendet werden sollen. Wenn weggelassen, ist der Standardwert für `workgroupCountY` 1.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des Rasters von Arbeitsgruppen, die gesendet werden sollen. Wenn weggelassen, ist der Standardwert für `workgroupCountZ` 1.

> [!NOTE]
> Die an `dispatchWorkgroups()` und [`GPUComputePassEncoder.dispatchWorkgroupsIndirect()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect) übergebenen Werte der X-, Y- und Z-Dimension sind die Anzahl der zu sendenden Arbeitsgruppen für jede Dimension, nicht die Anzahl der Shader-Ausführungen, die über jede Dimension hinweg durchgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, dass wenn ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` gesendet wird, der Einstiegspunkt insgesamt 1024 Mal aufgerufen wird — Eine 4 x 4-Arbeitsgruppe wird 8 Mal entlang sowohl der X- als auch der Y-Achse gesendet. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`dispatchWorkgroups()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` müssen alle kleiner oder gleich der `maxComputeWorkgroupsPerDimension`-Grenze des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [Limit](/de/docs/Web/API/GPUSupportedLimits) sein.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde.

Zu Beginn des Codes setzen wir eine globale Puffergöße von 1000 fest. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 gesetzt ist.

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

Später im Code wird der `dispatchWorkgroups()`-Parameter `workgroupCountX` basierend auf der globalen Puffergöße und der Arbeitsgruppenzahl des Shaders festgelegt.

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
