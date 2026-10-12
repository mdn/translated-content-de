---
title: "GPURenderBundleEncoder: Methode setBindGroup()"
short-title: setBindGroup()
slug: Web/API/GPURenderBundleEncoder/setBindGroup
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`setBindGroup()`** der Schnittstelle [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) legt für einen bestimmten Index die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Render-Bundle-Befehle verwendet wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit der entsprechenden Methode von [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup).

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
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Render-Bundle-Befehle verwendet wird, oder `null`. Bei `null` wird eine zuvor im angegebenen Slot festgelegte Bind Group entfernt.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der für jeden Eintrag in `bindGroup`, bei dem `hasDynamicOffset: true` festgelegt ist, den Offset in Byte angibt (also im Deskriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), mit dem das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt erstellt wurde, auf dem `bindGroup` basiert). Dieser Wert kann Folgendes sein:
    - Ein Array von Zahlen, die die verschiedenen Offsets angeben.
    - Ein {{jsxref("Uint32Array")}} mit Zahlen, die die Offsets angeben.

Wenn für `dynamicOffsets` ein {{jsxref("Uint32Array")}} angegeben wird, sind zusätzlich beide folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen innerhalb von `dynamicOffsetsData` angibt, an dem die Daten für die dynamischen Offsets beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die angibt, wie viele Werte für dynamische Offsets aus `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Bei Aufrufen von `setBindGroup()`, die für `dynamicOffsets` ein {{jsxref("Uint32Array")}} verwenden, wird ein {{jsxref("RangeError")}} ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer als `dynamicOffsets.length` ist.

### Validierung

Beim Aufruf von **`setBindGroup()`** müssen die folgenden Kriterien erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxBindGroups` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup`, bei denen `hasDynamicOffset: true` festgelegt ist.
- Bei `bindGroup`-Einträgen, deren gebundener `buffer` den `type` `"uniform"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minUniformBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Bei `bindGroup`-Einträgen, deren gebundener `buffer` den `type` `"storage"` oder `"read-only-storage"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minStorageBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden `bindGroup`-Eintrag ist die Summe aus dem `offset` des gebundenen `buffer`, dem `minBindingSize` des entsprechenden Layout-Eintrags und dem zugehörigen, in `dynamicOffsets` angegebenen dynamischen Offset kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

### Bind Group festlegen

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

Der obige Ausschnitt stammt aus dem [Animometer-Beispiel](https://webgpu.github.io/webgpu-samples/samples/animometer/) der WebGPU Samples.

### Bind Group entfernen

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
