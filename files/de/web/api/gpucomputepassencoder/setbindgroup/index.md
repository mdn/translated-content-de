---
title: "GPUComputePassEncoder: setBindGroup()-Methode"
short-title: setBindGroup()
slug: Web/API/GPUComputePassEncoder/setBindGroup
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setBindGroup()`**-Methode der {{domxref("GPUComputePassEncoder")}}-Schnittstelle legt die zu verwendende {{domxref("GPUBindGroup")}} für nachfolgende Berechnungsbefehle bei einem bestimmten Index fest.

## Syntax

```js-nolint
setBindGroup(index, bindGroup)
setBindGroup(index, bindGroup, dynamicOffsets)
setBindGroup(index, bindGroup, dynamicOffsets, dynamicOffsetsStart,
             dynamicOffsetsLength)
```

### Parameter

- `index`
  - : Der Index, bei dem die Bindungsgruppe festgelegt wird. Dies entspricht dem Indexwert `n` des entsprechenden [`@group(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-group)-Attributes im Shader-Code ({{domxref("GPUShaderModule")}}), der in der zugehörigen Pipeline verwendet wird.
- `bindGroup`
  - : Die {{domxref("GPUBindGroup")}}, die für nachfolgende Berechnungsbefehle verwendet werden soll.
- `dynamicOffsets` {{optional_inline}}
  - : Ein Wert, der den Versatz in Byte für jeden Eintrag in `bindGroup` angibt, bei dem `hasDynamicOffset: true` gesetzt ist (d. h. in der Beschreibung des Aufrufs von {{domxref("GPUDevice.createBindGroupLayout()")}}, der das {{domxref("GPUBindGroupLayout")}}-Objekt erstellt hat, auf dem `bindGroup` basiert). Dieser Wert kann sein:
    - Ein Array von Zahlen, das die verschiedenen Versätze angibt.
    - Ein {{jsxref("Uint32Array")}}, das Zahlen enthält, die die Versätze angeben.

Wenn ein {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` angegeben wird, sind die folgenden Parameter ebenfalls erforderlich:

- `dynamicOffsetsStart`
  - : Eine Zahl, die den Versatz in Array-Elementen in `dynamicOffsetsData` angibt, wo die dynamischen Versatzdaten beginnen.
- `dynamicOffsetsLength`
  - : Eine Zahl, die die Anzahl der dynamischen Versatzwerte angibt, die in `dynamicOffsetsData` gelesen werden sollen.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

Für `setBindGroup()`-Aufrufe, die einen {{jsxref("Uint32Array")}}-Wert für `dynamicOffsets` verwenden, wird ein `RangeError` {{domxref("DOMException")}} ausgelöst, wenn:

- `dynamicOffsetsStart` kleiner als 0 ist.
- `dynamicOffsetsStart` + `dynamicOffsetsLength` größer ist als `dynamicOffsets.length`.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`dispatchWorkgroups()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und der {{domxref("GPUComputePassEncoder")}} wird ungültig:

- `index` ist kleiner oder gleich der `maxBindGroups`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- `dynamicOffsets.length` entspricht der Anzahl der Einträge in `bindGroup` mit `hasDynamicOffset: true`.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-`type` `"uniform"` ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minUniformBufferOffsetAlignment`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Für `bindGroup`-Einträge, bei denen der gebundene `buffer`-`type` `"storage"` oder `"read-only-storage"` ist (siehe {{domxref("GPUDevice.createBindGroupLayout()")}}), ist jede Zahl in `dynamicOffsets` ein Vielfaches der `minStorageBufferOffsetAlignment`-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Für jeden `bindGroup`-Eintrag ist der gebundene `buffer`-`offset`, zuzüglich der `minBindingSize` des entsprechenden Layout-Eintrags und des entsprechenden dynamischen Versatzes, der in `dynamicOffsets` angegeben ist, kleiner oder gleich der `size` des gebundenen `buffers`.

## Beispiele

In unserem [einfachen Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) werden mehrere Befehle über einen {{domxref("GPUCommandEncoder")}} aufgezeichnet. Die meisten dieser Befehle stammen vom {{domxref("GPUComputePassEncoder")}}, der über `beginComputePass()` erstellt wurde. Der hier verwendete `setBindGroup()`-Aufruf ist die einfachste Form, bei der nur der Index und die Bindungsgruppe angegeben werden.

```js
const BUFFER_SIZE = 1000;

// ...

// Erstellen Sie einen GPUCommandEncoder, um Befehle zum Ausführen an die GPU zu codieren
const commandEncoder = device.createCommandEncoder();

// Beginnen Sie die Render-Pass
const passEncoder = commandEncoder.beginComputePass();

// Befehle ausführen
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

// Beenden Sie die Render-Pass
passEncoder.end();

// Kopieren Sie den Ausgabepuffer in den Staging-Puffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quellversatz
  stagingBuffer,
  0, // Zielversatz
  BUFFER_SIZE,
);

// Beenden Sie den Frame, indem Sie ein Array von Befehls-Puffern zur Ausführung an die Befehlswarteschlange übergeben
device.queue.submit([commandEncoder.finish()]);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
