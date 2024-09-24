---
title: "GPURenderPassEncoder: setBindGroup()-Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 8b4e6b773d03959d5a5b2d02200243c4714079b9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setBindGroup()`**-Methode der {{domxref("GPURenderPassEncoder")}}-Schnittstelle setzt die {{domxref("GPUBindGroup")}}, die für nachfolgende Render-Befehle bei einem bestimmten Index verwendet werden soll.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, bei dem die Bind-Gruppe gesetzt wird. Dies entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributes im Shader-Code ({{domxref("GPUShaderModule")}}), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die {{domxref("GPUBindGroup")}}, die für nachfolgende Render-Befehle verwendet werden soll.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Versatz in Bytes für jeden Eintrag in `bindGroup` mit `hasDynamicOffset: true` angibt (d.h. in der Deskriptor-Definition des Aufrufs {{domxref("GPUDevice.createBindGroupLayout()")}}, der das {{domxref("GPUBindGroupLayout")}}-Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, die die verschiedenen Versätze angeben.
    - Eine {{jsxref("Uint32Array")}}, die Zahlen enthält, die die Versätze angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind beide der folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Versatz in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Versatzdaten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Versatzwerte angibt, die aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird ein `RangeError` {{domxref("DOMException")}} ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Folgende Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderPassEncoder")}} wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups`-{{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}}.
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true`.
- Bei `bindGroup`-Einträgen, bei denen der gebundene `buffer`-`type` "uniform" ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minUniformBufferOffsetAlignment`-{{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}}.
- Bei `bindGroup`-Einträgen, bei denen der gebundene `buffer`-`type` "storage" oder "read-only-storage" ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minStorageBufferOffsetAlignment`-{{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "Limit", "", "nocode")}}.
- Für jeden `bindGroup`-Eintrag ist die Summe aus dem `offset` des gebundenen `buffer`, der `minBindingSize` des entsprechenden Layouteintrags und dem entsprechenden dynamischen Versatz aus `dynamicOffsets` kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

Im WebGPU-Beispiel [Textured Cube](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) wird `setBindGroup()` verwendet, um die `uniformBindGroup` an der Indexposition 0 zu binden. Schauen Sie sich das Beispiel für den vollständigen Kontext an.

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
> Studieren Sie die anderen [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) für weitere Anwendungsbeispiele von `setBindGroup()`.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
