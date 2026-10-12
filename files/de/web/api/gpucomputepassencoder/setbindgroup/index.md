---
title: "GPUComputePassEncoder: Methode setBindGroup()"
short-title: setBindGroup()
slug: Web/API/GPUComputePassEncoder/setBindGroup
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`setBindGroup()`** der Schnittstelle [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) legt für einen bestimmten Index die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Compute-Befehle verwendet wird.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind Group festgelegt wird. Er entspricht dem Indexwert `n` des zugehörigen Attributs [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group) im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der betreffenden Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Compute-Befehle verwendet wird, oder `null`. Bei `null` wird eine zuvor im angegebenen Slot festgelegte Bind Group entfernt.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der für jeden Eintrag in `bindGroup`, für den `hasDynamicOffset: true` gesetzt ist, den Offset in Bytes angibt (d.h. im Deskriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), mit dem das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt wurde, auf dem `bindGroup` basiert). Dieser Wert kann Folgendes sein:
    - Ein Array von Zahlen, die die einzelnen Offsets angeben.
    - Ein {{jsxref("Uint32Array")}} mit Zahlen, die die Offsets angeben.

Wenn für `dynamicOffsets` ein {{jsxref("Uint32Array")}} angegeben wird, sind auch die beiden folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen innerhalb von `dynamicOffsetsData` angibt, an dem die Daten für die dynamischen Offsets beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die angibt, wie viele Werte für dynamische Offsets aus `dynamicOffsetsData` gelesen werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Bei Aufrufen von `setBindGroup()`, die für `dynamicOffsets` ein {{jsxref("Uint32Array")}} verwenden, wird ein {{jsxref("RangeError")}} ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Beim Aufruf von **`dispatchWorkgroups()`** müssen die folgenden Kriterien erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxBindGroups` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup`, für die `hasDynamicOffset: true` gesetzt ist.
- Bei `bindGroup`-Einträgen, für die `type` des gebundenen `buffer` den Wert `"uniform"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minUniformBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Bei `bindGroup`-Einträgen, für die `type` des gebundenen `buffer` den Wert `"storage"` oder `"read-only-storage"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minStorageBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus `offset` des gebundenen `buffer`, `minBindingSize` des zugehörigen Layout-Eintrags und dem zugehörigen in `dynamicOffsets` angegebenen dynamischen Offset kleiner oder gleich `size` des gebundenen `buffer`.

## Beispiele

### Bind Group festlegen

In unserer [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde. Der hier verwendete Aufruf von `setBindGroup()` ist die einfachste Form: Er gibt nur den Index und die Bind Group an.

```js
const BUFFER_SIZE = 1000;

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

### Bind Group entfernen

```js
// Set bind group in slot 0
passEncoder.setBindGroup(0, bindGroup);

// Later, unset bind group in slot 0
passEncoder.setBindGroup(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
