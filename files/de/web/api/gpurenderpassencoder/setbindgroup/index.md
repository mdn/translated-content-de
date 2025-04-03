---
title: "GPURenderPassEncoder: Methode setBindGroup()"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`setBindGroup()`** der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet wird, für einen gegebenen Index.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind-Gruppe gesetzt wird. Dieser entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der entsprechenden Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet wird, oder `null`, in welchem Fall eine zuvor gesetzte Bind-Gruppe im gegebenen Slot nicht mehr gesetzt ist.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Offset in Bytes für jeden Eintrag in `bindGroup` angibt, wenn `hasDynamicOffset: true` gesetzt ist (d.h. in der Beschreibung des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Offsets spezifiziert.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Offsets spezifizieren.

Wenn ein {{jsxref("Uint32Array")}} für `dynamicOffsets` angegeben wird, sind beide der folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen in `dynamicOffsetsData` angibt, wo die Daten des dynamischen Offsets beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die angibt, wie viele Werte des dynamischen Offsets aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird der Aufruf mit einem `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer ist als `dynamicOffsets.length`.

### Überprüfung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [Limit](/de/docs/Web/API/GPUSupportedLimits).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true`.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minUniformBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minStorageBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Für jeden `bindGroup`-Eintrag ist der `offset` des gebundenen `buffer`, plus die `minBindingSize` des entsprechenden Layout-Eintrags, plus der entsprechende dynamische Offset, der in `dynamicOffsets` spezifiziert ist, kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

### Bind-Gruppe setzen

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird `setBindGroup()` verwendet, um die `uniformBindGroup` an der Indexposition 0 zu binden. Sehen Sie sich das Beispiel an, um den vollständigen Kontext zu verstehen.

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
> Studieren Sie die anderen [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) für weitere Beispiele zur Verwendung von `setBindGroup()`.

### Bind-Gruppe aufheben

```js
// Set bind group in slot 0
passEncoder.setBindGroup(0, uniformBindGroup);

// Later, unset bind group in slot 0
passEncoder.setBindGroup(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
