---
title: "GPURenderBundleEncoder: setIndexBuffer() Methode"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle setzt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der Indexdaten für nachfolgende Zeichnungsbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer).

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die zu verwendenden Indexdaten für nachfolgende Zeichnungsbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der Indexdaten im `buffer` definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset, in Bytes, in `buffer` darstellt, an dem die Indexdaten beginnen. Wenn weggelassen, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe, in Bytes, der im `buffer` enthaltenen Indexdaten darstellt. Wenn weggelassen, ist der Standardwert für `size` die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` minus `offset`.

#### Hinweis zu indexFormat

Der `indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn er mit einer Pipeline verwendet wird, die eine Strip-Primitive-Topologie angibt (`"line-strip"` oder `"triangle-strip"`), den Primitive-Restart-Wert. Der Primitive-Restart-Wert ist ein Indexwert, der angibt, dass ein neues Primär gestartet werden soll, anstatt den Strip mit den vorherigen indizierten Vertices weiter zu konstruieren. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.
- `offset` ist ein Vielfaches der Bytegröße von `indexFormat` (2 für `"uint16"`, 4 für `"uint32"`).

## Beispiele

```js
// ...

const bundleEncoder = device.createRenderBundleEncoder(descriptor);

bundleEncoder.setPipeline(pipeline);
bundleEncoder.setBindGroup(0, sceneBindGroupForRender);
bundleEncoder.setBindGroup(1, modelBindGroup);
bundleEncoder.setVertexBuffer(0, vertexBuffer);
bundleEncoder.setIndexBuffer(indexBuffer, "uint16");
bundleEncoder.drawIndexed(indexCount);

const renderBundle = bundleEncoder.finish();

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
