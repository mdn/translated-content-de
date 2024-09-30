---
title: "GPURenderBundleEncoder: setBindGroup()-Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderBundleEncoder/setBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle legt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Render-Bundle-Befehle für einen bestimmten Index verwendet werden soll.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup).

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, bei dem die Bind-Gruppe gesetzt werden soll. Dies entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bundle-Befehle verwendet werden soll.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Versatz in Bytes für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d.h. im Deskriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Versätze angibt.
    - Eine {{jsxref("Uint32Array")}}, die Zahlen enthält, die die Versätze angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind beide der folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Versatz in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Versatzdaten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die angibt, wie viele dynamische Versatzwerte aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird ein `RangeError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` ist gleich der Anzahl der Einträge in `bindGroup`, bei denen `hasDynamicOffset: true` gesetzt ist.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minUniformBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`'s `type` `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des `minStorageBufferOffsetAlignment`-Limits des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus dem `offset` des gebundenen `buffer`, der `minBindingSize` des entsprechenden Layout-Eintrags und dem entsprechenden dynamischen Versatz, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

```js
function recordRenderPass(passEncoder) {
  if (settings.dynamicOffsets) {
    passEncoder.setPipeline(dynamicPipeline);
  } else {
    passEncoder.setPipeline(pipeline);
  }
  passEncoder.setVertexBuffer(0, vertexBuffer);
  passEncoder.setBindGroup(0, timeBindGroup);
  const dynamicOffsets = [0];
  for (let i = 0; i < numTriangles; ++i) {
    if (settings.dynamicOffsets) {
      dynamicOffsets[0] = i * alignedUniformBytes;
      passEncoder.setBindGroup(1, dynamicBindGroup, dynamicOffsets);
    } else {
      passEncoder.setBindGroup(1, bindGroups[i]);
    }
    passEncoder.draw(3, 1, 0, 0);
  }
}
```

Der obige Ausschnitt stammt aus dem WebGPU Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
