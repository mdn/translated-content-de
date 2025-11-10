---
title: "GPURenderPassEncoder: setBindGroup()-Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Schnittstelle setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Befehle bei einem bestimmten Index verwendet werden soll.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind-Gruppe gesetzt werden soll. Dieser entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Befehle verwendet werden soll, oder `null`, in welchem Fall jede zuvor festgelegte Bind-Gruppe in dem angegebenen Slot entfernt wird.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Offset in Bytes für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d.h. im Descriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, die die verschiedenen Offsets spezifizieren.
    - Eine {{jsxref("Uint32Array")}}, die Zahlen enthält, die die Offsets spezifizieren.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind beide der folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Offsetdaten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Offset-Werte angibt, die aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird ein `RangeError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true`.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minUniformBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minStorageBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus der `offset` des gebundenen `buffer`, der `minBindingSize` des zugehörigen Layout-Eintrags und dem entsprechenden in `dynamicOffsets` angegebenen dynamischen Offset kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

### Bind-Gruppe setzen

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird `setBindGroup()` verwendet, um die `uniformBindGroup` auf Indexposition 0 zu binden. Sehen Sie sich das Beispiel für den vollständigen Kontext an.

```js
// …

const commandEncoder = device.createCommandEncoder();
const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
passEncoder.setPipeline(pipeline);
passEncoder.setBindGroup(0, uniformBindGroup);
passEncoder.setVertexBuffer(0, verticesBuffer);
passEncoder.draw(cubeVertexCount, 1, 0, 0);
passEncoder.end();
device.queue.submit([commandEncoder.finish()]);

// …
```

> [!NOTE]
> Untersuchen Sie die anderen [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) für weitere Beispiele zur Verwendung von `setBindGroup()`.

### Bind-Gruppe entfernen

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
