---
title: "GPURenderPassEncoder: Methode setBindGroup()"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle bei einem bestimmten Index verwendet wird.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind-Gruppe gesetzt wird. Dieser entspricht dem `n` Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet wird.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Versatz in Bytes für jeden Eintrag in `bindGroup` mit `hasDynamicOffset: true` angibt (d.h. in der Beschreibung des [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)-Aufrufs, der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Offsets angibt.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Offsets angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind auch die folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Versatz in Array-Elementen in `dynamicOffsetsData` angibt, ab dem die dynamischen Offset-Daten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Offsetwerte angibt, die aus `dynamicOffsetsData` gelesen werden.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Bei `setBindGroup()`-Aufrufen, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird der Aufruf mit einem `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true` eingestellt.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` gleich `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minUniformBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` gleich `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minStorageBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus dem gebundenen `buffer`'s `offset`, dem entsprechenden Layout-Eintrag `minBindingSize` und dem entsprechenden dynamischen Offset, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der Größe des gebundenen `buffer`.

## Beispiele

Im WebGPU Samples [Textured Cube Beispiel](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird `setBindGroup()` verwendet, um die `uniformBindGroup` an Indexposition 0 zu binden. Schauen Sie sich das Beispiel für den vollständigen Kontext an.

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
> Studieren Sie die anderen [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) für weitere Beispiele zur Verwendung von `setBindGroup()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
