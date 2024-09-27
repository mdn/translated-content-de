---
title: "GPURenderPassEncoder: setBindGroup() Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Schnittstelle legt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Renderbefehle bei einem bestimmten Index verwendet werden soll.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die `bindGroup` gesetzt wird. Dieser entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet werden soll.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Offset, in Bytes, für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d. h. im Deskriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Offsets angibt.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Offsets angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind auch die folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Offset-Daten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Offset-Werte angibt, die aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird der Aufruf mit einem `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `index` ist kleiner als oder gleich dem `maxBindGroups` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true` gesetzt.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-`type` `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minUniformBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-`type` `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minStorageBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus dem `offset` des gebundenen `buffer`, dem `minBindingSize` des entsprechenden Layout-Eintrags und dem entsprechenden dynamischen Offset, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird `setBindGroup()` verwendet, um die `uniformBindGroup` auf die Indexposition 0 zu binden. Schauen Sie sich das Beispiel für den vollständigen Kontext an.

```js
// ...

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.setPipeline(pipeline);
passEncoder.setBindGroup(0, uniformBindGroup);
passEncoder.setVertexBuffer(0, verticesBuffer);
passEncoder.draw(cubeVertexCount, 1, 0, 0);
passEncoder.end();
device.queue.submit([commandEncoder.finish()]);

// ...
```

> [!NOTE]
> Studieren Sie weitere [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/), um mehr Beispiele für die Nutzung von `setBindGroup()` zu sehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
