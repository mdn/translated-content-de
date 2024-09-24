---
title: "GPUComputePassEncoder: dispatchWorkgroupsIndirect()-Methode"
short-title: dispatchWorkgroupsIndirect()
slug: Web/API/GPUComputePassEncoder/dispatchWorkgroupsIndirect
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`dispatchWorkgroupsIndirect()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle führt ein Gitter von Workgroups aus, das durch die Parameter eines {{domxref("GPUBuffer")}} definiert wird, um die Arbeit der aktuellen {{domxref("GPUComputePipeline")}} auszuführen (d. h. gesetzt über {{domxref("GPUComputePassEncoder.setPipeline()")}}).

## Syntax

```js-nolint
dispatchWorkgroupsIndirect(indirectBuffer, indirectOffset)
```

### Parameter

- `indirectBuffer`

  - : Ein {{domxref("GPUBuffer")}}, der die X-, Y- und Z-Dimensionen des auszuführenden Workgroup-Gitters enthält. Der Buffer muss einen eng gepackten Block von drei 32-Bit-Integerwerten enthalten, die die Dimensionen darstellen (insgesamt 12 Bytes), und zwar in derselben Reihenfolge wie die Argumente für {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}}. Zum Beispiel:

    ```js
    const uint32 = new Uint32Array(3);
    uint32[0] = 25; // Der X-Wert
    uint32[1] = 1; // Der Y-Wert
    uint32[2] = 1; // Der Z-Wert

    // Werte in einen GPUBuffer schreiben
    device.queue.writeBuffer(buffer, 0, uint32, 0, uint32.length);
    ```

- `indirectOffset`
  - : Der Offset in Bytes in `indirectBuffer`, bei dem die Dimensionsdaten beginnen.

> [!NOTE]
> Die X-, Y- und Z-Dimensionswerte, die an {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}} und `dispatchWorkgroupsIndirect()` übergeben werden, sind die Anzahl der auszuführenden Workgroups für jede Dimension, nicht die Anzahl der Shader-Ausführungen, die über jede Dimension hinweg durchgeführt werden sollen. Dies entspricht dem Verhalten moderner nativer GPU-APIs, unterscheidet sich jedoch vom Verhalten von OpenCL. Das bedeutet, dass wenn ein {{domxref("GPUShaderModule")}} einen Einstiegspunkt mit `@workgroup_size(4, 4)` definiert und die Arbeit mit dem Aufruf `dispatchWorkgroupsIndirect(indirectBuffer);` gestartet wird, wobei `indirectBuffer` X- und Y-Dimensionen von 8 und 8 angibt, der Einstiegspunkt insgesamt 1024 Mal aufgerufen wird — Es wird eine 4 x 4 Workgroup 8 Mal entlang der X- und Y-Achsen ausgeführt. `4 * 4 * 8 * 8 = 1024`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroupsIndirect()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und die {{domxref("GPUComputePassEncoder")}} wird ungültig:

- `indirectBuffer`'s {{domxref("GPUBuffer.usage")}} enthält das `GPUBufferUsage.INDIRECT`-Flag.
- `indirectOffset` + die durch die `X`, `Y` und `Z` Dimensionen spezifizierte Gesamtgröße ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} von `indirectBuffer`.
- `indirectOffset` ist ein Vielfaches von 4.

## Beispiele

```js
// Globale Buffergröße festlegen
const BUFFER_SIZE = 1000;

// Compute Shader; Beachten Sie die Workgroup-Größe von 64
const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)

...

`;

// ...

// Erstellen eines GPUCommandEncoder, um Befehle für die GPU zu kodieren
const commandEncoder = device.createCommandEncoder();

// Render-Pass starten
const passEncoder = commandEncoder.beginComputePass();

// Befehle ausgeben
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);

const uint32 = new Uint32Array(3);
// Beachten Sie, dass workgroupCountX basierend auf der globalen Buffergröße und der Shader-Workgroupanzahl festgelegt wird.
uint32[0] = Math.ceil(BUFFER_SIZE / 64);
uint32[1] = 1;
uint32[2] = 1;

const workgroupDimensions = device.createBuffer({
  size: 12,
  usage: GPUBufferUsage.COPY_DST | GPUBufferUsage.INDIRECT,
});
device.queue.writeBuffer(workgroupDimensions, 0, uint32, 0, uint32.length);

passEncoder.dispatchWorkgroupsIndirect(workgroupDimensions, 0);

// Render-Pass beenden
passEncoder.end();

// Output-Buffer in Staging-Buffer kopieren
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quell-Offset
  stagingBuffer,
  0, // Ziel-Offset
  BUFFER_SIZE,
);

// Frame beenden, indem das Array von Command-Buffern zur Ausführung an die Befehlswarteschlange übergeben wird
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
