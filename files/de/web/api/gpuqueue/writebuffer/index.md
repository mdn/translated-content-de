---
title: "GPUQueue: writeBuffer() Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeBuffer()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Pufferdaten über Pufferzuordnung und Puffer-zu-Puffer-Kopien bietet. Sie lässt den Benutzeragenten die effizienteste Methode zur Übertragung der Daten bestimmen.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den Puffer darstellt, in den die Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Versatz in Bytes darstellt, an dem das Schreiben der Daten innerhalb des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) beginnt.
- `data`
  - : Ein Objekt, das die Datenquelle darstellt, die in den [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Versatz angibt, ab dem mit dem Schreiben der Daten aus der Datenquelle begonnen wird. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wird sie weggelassen, wird `dataOffset` standardmäßig auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts angibt, der von `data` in `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wird sie weggelassen, entspricht `size` der gesamten Größe von `data` abzüglich `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist gleich oder größer als 0.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn in Bytes umgewandelt, im Fall von `TypedArray`s) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeBuffer()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `buffer` ist verfügbar zur Nutzung, d.h. nicht nicht verfügbar ( `GPUBuffer` sind nicht verfügbar, wenn sie momentan [zugewiesen](/de/docs/Web/API/GPUBuffer/mapAsync) oder zerstört sind (mit der [`GPUBuffer.destroy()`](/de/docs/Web/API/GPUBuffer/destroy)-Methode).
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `bufferOffset`, wenn in Bytes umgewandelt, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, wenn in Bytes umgewandelt, ist gleich oder kleiner als die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.

## Beispiele

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) legen. Zuerst erstellen wir den Puffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Um die Daten in den Puffer zu bekommen, können wir `writeBuffer()` verwenden:

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
