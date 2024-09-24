---
title: "GPUComputePassEncoder: dispatchWorkgroups()-Methode"
short-title: dispatchWorkgroups()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroups
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`dispatchWorkgroups()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle sendet ein spezifisches Raster von Arbeitsgruppen (workgroups), um die Arbeit auszuführen, die von der aktuellen {{domxref("GPUComputePipeline")}} erledigt wird (d. h. festgelegt über {{domxref("GPUComputePassEncoder.setPipeline()")}}).

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
  - : Die Y-Dimension des Rasters von Arbeitsgruppen, die gesendet werden sollen. Wird dieser Parameter weggelassen, hat `workgroupCountY` standardmäßig den Wert 1.
- `workgroupCountZ` {{optional_inline}}
  - : Die Z-Dimension des Rasters von Arbeitsgruppen, die gesendet werden sollen. Wird dieser Parameter weggelassen, hat `workgroupCountZ` standardmäßig den Wert 1.

> [!NOTE]
> Die für X-, Y- und Z-Dimension an `dispatchWorkgroups()` und {{domxref("GPUComputePassEncoder.dispatchWorkgroupsIndirect()")}} übergebenen Werte sind die Anzahl der Arbeitsgruppen, die für jede Dimension gesendet werden, nicht die Anzahl der Shader-Aufrufe, die über jede Dimension ausgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, dass wenn ein {{domxref("GPUShaderModule")}} einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und die Arbeit mit dem Aufruf `passEncoder.dispatchWorkgroups(8, 8);` an diesen gesendet wird, der Einstiegspunkt insgesamt 1024 Mal aufgerufen wird — Versenden einer 4 x 4 Arbeitsgruppe 8 Mal entlang sowohl der X- als auch der Y-Achse. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen bei einem Aufruf von **`dispatchWorkgroups()`** erfüllt sein, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPUComputePassEncoder")}} wird ungültig:

- `workgroupCountX`, `workgroupCountY` und `workgroupCountZ` müssen alle kleiner oder gleich `maxComputeWorkgroupsPerDimension` des {{domxref("GPUDevice")}} sein {{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) sind mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen von dem {{domxref("GPUComputePassEncoder")}}, der über `beginComputePass()` erstellt wurde.

Am Anfang des Codes setzen wir eine globale Puffergröße von 1000 fest. Beachten Sie auch, dass die Arbeitsgruppengröße im Shader auf 64 gesetzt ist.

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

Später im Code wird der `dispatchWorkgroups()`-Parameter `workgroupCountX` basierend auf der globalen Puffergröße und der Arbeitsgruppenzahl des Shaders festgelegt.

```js
// ...

// Erstellen eines GPUCommandEncoder zum Kodieren von Befehlen, die an die GPU gesendet werden sollen
const commandEncoder = device.createCommandEncoder();

// Einleitender Render-Pass
const passEncoder = commandEncoder.beginComputePass();

// Befehle ausgeben
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Beende den Render-Pass
passEncoder.end();

// Kopieren des Ausgabepuffers in den Staging-Puffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quell-Offset
  stagingBuffer,
  0, // Ziel-Offset
  BUFFER_SIZE,
);

// Beenden Sie den Frame, indem Sie ein Array von Befehls-Puffern an die Befehlswarteschlange zur Ausführung übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
