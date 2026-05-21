---
title: "GPURenderBundleEncoder: setIndexBuffer()-Methode"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichenbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer).

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die zu verwendenden Indexdaten für nachfolgende Zeichenbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der in `buffer` enthaltenen Indexdaten definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` darstellt, an dem die Indexdaten beginnen. Wenn weggelassen, entspricht `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe der in `buffer` enthaltenen Indexdaten in Bytes darstellt. Wenn weggelassen, entspricht `size` standardmäßig der `buffer`-Größe [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) minus `offset`.

#### Hinweis zu indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitiv-Topologie (`"line-strip"` oder `"triangle-strip"`) spezifiziert, den Primitiv-Neustartwert. Der Primitiv-Neustartwert ist ein Indexwert, der angibt, dass ein neues Primitiv gestartet werden soll, anstatt den Streifen mit den vorher festgelegten Scheitelpunkten weiter zu konstruieren. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- `buffer`'s [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der `buffer`-Größe [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).
- `offset` ist ein Vielfaches der Byte-Größe von `indexFormat` (2 für `"uint16"`, 4 für `"uint32"`).

## Beispiele

```js
// …

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
