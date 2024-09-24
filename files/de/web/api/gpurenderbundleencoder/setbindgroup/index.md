---
title: "GPURenderBundleEncoder: setBindGroup() Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderBundleEncoder/setBindGroup
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setBindGroup()`** Methode der {{domxref("GPURenderBundleEncoder")}} Schnittstelle legt die zu verwendende {{domxref("GPUBindGroup")}} für nachfolgende Render-Bundle-Befehle für einen bestimmten Index fest.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Pendant auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setBindGroup", "setBindGroup()")}}.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind-Gruppe eingestellt wird. Dieser entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group) Attributs im Shader-Code ({{domxref("GPUShaderModule")}}), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die {{domxref("GPUBindGroup")}}, die für nachfolgende Render-Bundle-Befehle verwendet wird.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der die Verschiebung in Bytes für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d. h. im Deskriptor des {{domxref("GPUDevice.createBindGroupLayout()")}} Aufrufs, der das {{domxref("GPUBindGroupLayout")}} Objekt erstellt hat, auf dem `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Verschiebungen angibt.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Verschiebungen angeben.

Wenn ein {{jsxref("Uint32Array")}} Wert für `dynamicOffsets` angegeben ist, sind auch die folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset, in Array-Elementen, in `dynamicOffsetsData` angibt, an dem die dynamischen Offset-Daten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Offset-Werte angibt, die in `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für Aufrufe von `setBindGroup()`, die einen {{jsxref("Uint32Array")}} Wert für `dynamicOffsets` verwenden, wird ein `RangeError` {{domxref("DOMException")}} ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setBindGroup()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- `index` ist kleiner oder gleich dem `maxBindGroups` {{domxref("GPULimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- `dynamicOffsets.length` ist gleich der Anzahl der Einträge in `bindGroup`, bei denen `hasDynamicOffset: true` gesetzt ist.
- Für `bindGroup` Einträge, bei denen der gebundene `buffer` Typ `"uniform"` ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minUniformBufferOffsetAlignment` {{domxref("GPULimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Für `bindGroup` Einträge, bei denen der gebundene `buffer` Typ `"storage"` oder `"read-only-storage"` ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minStorageBufferOffsetAlignment` {{domxref("GPULimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Für jeden `bindGroup` Eintrag ist der `offset` des gebundenen `buffer`, plus die entsprechende `minBindingSize` des Layout-Eintrags, plus der entsprechende dynamische Offset, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der `size` des gebundenen `buffer`.

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

Das obige Beispiel stammt aus den WebGPU-Beispielen im [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
