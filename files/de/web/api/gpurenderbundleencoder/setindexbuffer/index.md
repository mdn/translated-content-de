---
title: "GPURenderBundleEncoder: setIndexBuffer()-Methode"
short-title: setIndexBuffer()
slug: Web/API/GPURenderBundleEncoder/setIndexBuffer
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`setIndexBuffer()`**-Methode der {{domxref("GPURenderBundleEncoder")}}-Schnittstelle legt den aktuellen {{domxref("GPUBuffer")}} fest, der die Indexdaten für nachfolgende Zeichenbefehle bereitstellt.

> [!NOTE]
> Diese Methode ist funktional identisch mit ihrem Äquivalent auf {{domxref("GPURenderPassEncoder")}} — {{domxref("GPURenderPassEncoder.setIndexBuffer", "setIndexBuffer()")}}.

## Syntax

```js-nolint
setIndexBuffer(buffer, indexFormat, offset, size)
```

### Parameter

- `buffer`
  - : Ein {{domxref("GPUBuffer")}}, der den Puffer darstellt, der die zu verwendenden Indexdaten für nachfolgende Zeichenbefehle enthält.
- `indexFormat`
  - : Ein enumerierter Wert, der das Format der in `buffer` enthaltenen Indexdaten definiert. Mögliche Werte sind:
    - `"uint16"`
    - `"uint32"`
- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes in `buffer` angibt, ab dem die Indexdaten beginnen. Wird es weggelassen, so ist der Standardwert von `offset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes der in `buffer` enthaltenen Indexdaten angibt. Wird es weggelassen, so ist der Standardwert von `size` die {{domxref("GPUBuffer.size")}} von `buffer` minus `offset`.

#### Hinweis zum indexFormat

`indexFormat` bestimmt sowohl den Datentyp der Indexwerte in einem Puffer als auch, wenn es mit einer Pipeline verwendet wird, die eine Streifen-Primitiv-Topologie (`"line-strip"` oder `"triangle-strip"`) spezifiziert, den Primitiv-Wiederholungswert. Der Primitiv-Wiederholungswert ist ein Indexwert, der angibt, dass ein neues Primitiv gestartet werden soll, anstatt den Streifen mit den zuvor indexierten Scheitelpunkten fortzusetzen. Der Wert ist `0xFFFF` für `"uint16"` oder `0xFFFFFFFF` für `"uint32"`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Validierung

Folgende Kriterien müssen erfüllt sein, wenn **`setIndexBuffer()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und der {{domxref("GPURenderBundleEncoder")}} wird ungültig:

- `buffer`'s {{domxref("GPUBuffer.usage")}} enthält das `GPUBufferUsage.INDEX`-Flag.
- `offset` + `size` ist kleiner oder gleich der {{domxref("GPUBuffer.size")}} von `buffer`.
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
