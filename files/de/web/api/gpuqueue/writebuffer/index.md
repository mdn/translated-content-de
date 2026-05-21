---
title: "GPUQueue: writeBuffer() Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeBuffer()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in einen angegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).

Dies ist eine Komfortfunktion, die eine Alternative zur Einstellung von Pufferdaten über Buffer-Mapping und Buffer-zu-Buffer-Kopien bietet. Sie ermöglicht es der Agentensoftware, die effizienteste Methode zur Datenübertragung zu bestimmen.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den Puffer darstellt, in den die Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Offset in Bytes darstellt, ab dem die Daten im [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden sollen.
- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in den [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Offset darstellt, ab dem die Daten in der Datenquelle geschrieben werden sollen. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, ist der Standardwert für `dataOffset` 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts darstellt, der von `data` zu `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, entspricht `size` der gesamten Größe von `data` abzüglich `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode löst einen `OperationError` aus, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist gleich oder größer als 0.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn bei `TypedArray`s in Bytes umgewandelt) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `buffer` ist zur Verwendung verfügbar, d.h. nicht nicht verfügbar (ein `GPUBuffer` ist nicht verfügbar, wenn er momentan [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) ist) oder zerstört (mit der [`GPUBuffer.destroy()`](/de/docs/Web/API/GPUBuffer/destroy)-Methode).
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `bufferOffset`, bei Umwandlung in Bytes, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, bei Umwandlung in Bytes, ist gleich oder kleiner als die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, das wir zum Zeichnen eines Dreiecks verwenden:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) einfügen. Zuerst erstellen wir den Puffer:

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
