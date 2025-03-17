---
title: "GPURenderBundleEncoder: setBindGroup() Methode"
short-title: setBindGroup()
slug: Web/API/GPURenderBundleEncoder/setBindGroup
l10n:
  sourceCommit: 7797f844533e710c6822dfd1a87b2ab48e23bb99
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setBindGroup()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle setzt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bundle-Befehle bei einem bestimmten Index verwendet werden soll.

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
  - : Der Index, an dem die Bindegruppe gesetzt wird. Dieser entspricht dem `n`-Indexwert des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributs im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bundle-Befehle verwendet wird, oder `null`, in diesem Fall wird eine zuvor gesetzte Bindegruppe in dem angegebenen Slot gelöscht.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Versatz in Bytes für jeden Eintrag in `bindGroup` mit `hasDynamicOffset: true` angibt (d.h. in der Beschreibung des Aufrufs [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), der das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt hat, auf dem die `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die unterschiedlichen Versätze angibt.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Versätze angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben ist, sind die beiden folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Versatz in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Versatzdaten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Versatzwerte angibt, die in `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird der Aufruf mit einem `RangeError`-[`DOMException`](/de/docs/Web/API/DOMException) fehlschlagen, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setBindGroup()`** erfüllt sein, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem vom [`GPUDevice`](/de/docs/Web/API/GPUDevice) festgelegten `maxBindGroups`-Limit [Grenzwert](/de/docs/Web/API/GPUSupportedLimits).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true` gesetzt.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"uniform"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des vom [`GPUDevice`](/de/docs/Web/API/GPUDevice) festgelegten `minUniformBufferOffsetAlignment`-Limits [Grenzwert](/de/docs/Web/API/GPUSupportedLimits).
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-Typ `"storage"` oder `"read-only-storage"` ist (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des vom [`GPUDevice`](/de/docs/Web/API/GPUDevice) festgelegten `minStorageBufferOffsetAlignment`-Limits [Grenzwert](/de/docs/Web/API/GPUSupportedLimits).
- Für jeden `bindGroup`-Eintrag ist der gebundene `buffer`-Versatz plus der entsprechende Layout-Eintrags`minBindingSize`, plus der entsprechende dynamische Versatz, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der gebundenen `buffer`-Größe.

## Beispiele

### Bind-Gruppe setzen

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

Der obige Ausschnitt stammt aus dem WebGPU-Samples [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/).

### Bind-Gruppe aufheben

```js
// Set bind group in slot 0
passEncoder.setBindGroup(0, timeBindGroup);

// Later, unset bind group in slot 0
passEncoder.setBindGroup(0, null);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
