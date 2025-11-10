---
title: "GPURenderBundleEncoder: Methode setIndexBuffer()"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indexdaten für nachfolgende Zeichenbefehle bereitstellen wird.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent im [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer).

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt, der die zu verwendenden Indexdaten für nachfolgende Zeichenbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der im `buffer` enthaltenen Indexdaten definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes innerhalb des `buffer` darstellt, an dem die Indexdaten beginnen. Wenn ausgelassen, ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Indexdaten darstellt. Wenn ausgelassen, entspricht `size` der Differenz zwischen der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` und `offset`.

#### Hinweis zu indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitive-Topologie („line-strip“ oder „triangle-strip“) spezifiziert, den Primitive-Neustartwert. Der Primitive-Neustartwert ist ein Indexwert, der angibt, dass ein neues Primitive gestartet werden sollte, anstatt den Streifen mit den zuvor indizierten Vertizes weiter zu konstruieren. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Das [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffer` enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.
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
