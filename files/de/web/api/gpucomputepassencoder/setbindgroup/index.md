---
title: "GPUComputePassEncoder: setBindGroup()-Methode"
short-title: setBindGroup()
slug: Web/API/GPUComputePassEncoder/setBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)-Schnittstelle setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Rechenbefehle bei einem gegebenen Index verwendet werden soll.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind-Gruppe gesetzt wird. Dies entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Rechenbefehle verwendet werden soll.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Offset in Bytes für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d.h. in der Beschreibung des Aufrufs [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Offsets angibt.
    - Eine {{jsxref("Uint32Array")}}, die Zahlen enthält, die die Offsets angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind die folgenden beiden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Offset-Daten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Offset-Werte angibt, die in `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird der Aufruf mit einem `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroups()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)`s `maxBindGroups` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- `dynamicOffsets.length` ist gleich der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true`.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [`GPUDevice`](/de/docs/Web/API/GPUDevice)`s `minUniformBufferOffsetAlignment` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [`GPUDevice`](/de/docs/Web/API/GPUDevice)`s `minStorageBufferOffsetAlignment` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Für jeden `bindGroup`-Eintrag ist der gebundene `buffer`'s `offset`, plus der entsprechende Layout-Eintrag's `minBindingSize`, plus der entsprechende dynamische Offset, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der gebundenen `buffer`'s `size`.

## Beispiele

In unserem [Basic Compute Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) aufgezeichnet. Die meisten dieser Befehle stammen vom [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder), der über `beginComputePass()` erstellt wurde. Der hier verwendete `setBindGroup()`-Aufruf ist die einfachste Form, bei der nur Index und Bind-Gruppe angegeben werden.

```js
const BUFFER_SIZE = 1000;

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
