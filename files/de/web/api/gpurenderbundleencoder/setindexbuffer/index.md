---
title: "GPURenderBundleEncoder: setIndexBuffer()-Methode"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`setIndexBuffer()`**-Methode der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Schnittstelle legt den aktuellen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) fest, der Indizes für nachfolgende Zeichnungsbefehle bereitstellt.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) — [`setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer).

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), der den Puffer darstellt und die zu verwendenden Indizes für nachfolgende Zeichnungsbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der im `buffer` enthaltenen Indizes definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in den `buffer` darstellt, an dem die Indizes beginnen. Wenn weggelassen, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der im `buffer` enthaltenen Indizes darstellt. Wenn weggelassen, ist der Standardwert für `size` die Differenz zwischen der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer` und `offset`.

#### Hinweis zum `indexFormat`

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn sie mit einer Pipeline verwendet wird, die eine Strip-Primitiv-Topologie (`"line-strip"` oder `"triangle-strip"`) spezifiziert, den Restart-Wert des Primitivs. Der Restart-Wert des Primitivs ist ein Indexwert, der angibt, dass ein neues Primiv begonnen werden soll, anstatt den Strip mit den vorherigen indizierten Vertices fortzusetzen. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`setIndexBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und der [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) wird ungültig:

- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) von `buffer`.
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
