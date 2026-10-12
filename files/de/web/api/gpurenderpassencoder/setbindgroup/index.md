---
title: "GPURenderPassEncoder: Methode setBindGroup()"
short-title: setBindGroup()
slug: Web/API/GPURenderPassEncoder/setBindGroup
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`setBindGroup()`** des Interfaces [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) legt die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) fest, die für nachfolgende Renderbefehle an einem bestimmten Index verwendet wird.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, an dem die Bind Group festgelegt wird. Er entspricht dem Indexwert `n` des zugehörigen Attributs [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group) im Shader-Code ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die für nachfolgende Renderbefehle verwendet wird, oder `null`. Bei `null` wird eine zuvor im angegebenen Slot festgelegte Bind Group entfernt.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der für jeden Eintrag in `bindGroup`, für den `hasDynamicOffset: true` gesetzt ist, den Offset in Byte angibt (d.h. im Deskriptor des Aufrufs von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout), mit dem das Objekt [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) erstellt wurde, auf dem `bindGroup` basiert). Dieser Wert kann Folgendes sein:
    - Ein Array von Zahlen, die die verschiedenen Offsets angeben.
    - Ein {{jsxref("Uint32Array")}} mit Zahlen, die die Offsets angeben.

Wenn für `dynamicOffsets` ein {{jsxref("Uint32Array")}} angegeben wird, sind zusätzlich beide folgenden Parameter erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Offset in Array-Elementen innerhalb von `dynamicOffsetsData` angibt, ab dem die Daten für die dynamischen Offsets beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die angibt, wie viele Werte für dynamische Offsets aus `dynamicOffsetsData` gelesen werden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

Wenn bei einem Aufruf von `setBindGroup()` für `dynamicOffsets` ein {{jsxref("Uint32Array")}} verwendet wird, löst der Aufruf in folgenden Fällen einen {{jsxref("RangeError")}} aus:

- `dynamicOffsetsStart` ist kleiner als 0.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` ist größer als `dynamicOffsets.length`.

### Validierung

Beim Aufruf von **`setBindGroup()`** müssen die folgenden Bedingungen erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) wird ungültig:

- `index` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxBindGroups` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup`, für die `hasDynamicOffset: true` gesetzt ist.
- Bei Einträgen in `bindGroup`, deren gebundener `buffer` den `type` `"uniform"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minUniformBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Bei Einträgen in `bindGroup`, deren gebundener `buffer` den `type` `"storage"` oder `"read-only-storage"` hat (siehe [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), ist jede Zahl in `dynamicOffsets` ein Vielfaches des [Limits](/de/docs/Web/API/GPUSupportedLimits) `minStorageBufferOffsetAlignment` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Für jeden Eintrag in `bindGroup` ist die Summe aus dem `offset` des gebundenen `buffer`, dem `minBindingSize` des entsprechenden Layout-Eintrags und dem entsprechenden in `dynamicOffsets` angegebenen dynamischen Offset kleiner oder gleich der `size` des gebundenen `buffer`.

## Beispiele

### Bind Group festlegen

Im [Beispiel „Textured Cube“](https://webgpu.github.io/webgpu-samples/samples/texturedCube/) der WebGPU Samples wird `setBindGroup()` verwendet, um `uniformBindGroup` an Indexposition 0 zu binden. Den vollständigen Zusammenhang finden Sie im Beispiel.

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
> Weitere Beispiele für die Verwendung von `setBindGroup()` finden Sie in den anderen [WebGPU Samples](https://webgpu.github.io/webgpu-samples/).

### Bind Group entfernen

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
