---
title: "GPUQueue: writeBuffer() Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeBuffer()`** Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue) Schnittstelle schreibt eine bereitgestellte Datenquelle in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Pufferdaten über Puffer-Mapping und Puffer-zu-Puffer-Kopien bietet. Sie ermöglicht es dem Benutzeragent, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekt, das den Puffer repräsentiert, in den Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Offset in Bytes darstellt, um das Schreiben der Daten im Inneren des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zu beginnen.
- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in den [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Offset darstellt, ab dem die Daten aus der Datenquelle geschrieben werden sollen. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, ist `dataOffset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts darstellt, der von `data` in `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, entspricht `size` der gesamten Größe von `data` abzüglich `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode löst einen `OperationError` aus, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist gleich oder größer als 0.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn in Bytes umgewandelt, im Falle von `TypedArray`s) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeBuffer()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `buffer` ist zur Verwendung verfügbar, d.h. nicht nicht verfügbar (`GPUBuffer`s sind nicht verfügbar, wenn sie derzeit [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört wurden (mit der [`GPUBuffer.destroy()`](/de/docs/Web/API/GPUBuffer/destroy) Methode).
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) des `buffers` umfasst das `GPUBufferUsage.COPY_DST` Flag.
- `bufferOffset`, umgewandelt in Bytes, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, umgewandelt in Bytes, ist gleich oder kleiner als die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffers`.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertexdaten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) einfügen. Zuerst werden wir den Puffer erstellen:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Um die Daten in den Puffer zu bringen, können wir `writeBuffer()` verwenden:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
