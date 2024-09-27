---
title: "GPUQueue: writeBuffer()-Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeBuffer()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).

Dies ist eine bequeme Funktion, die eine Alternative zum Setzen von Pufferdaten über Pufferzuordnung und Puffer-zu-Puffer-Kopien bietet. Es ermöglicht dem Benutzeragenten, die effizienteste Methode zum Kopieren der Daten zu bestimmen.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den Puffer darstellt, in den die Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Versatz in Bytes angibt, ab dem die Daten im [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden sollen.
- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in den [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Versatz zum Starten des Schreibens der Daten von der Datenquelle angibt. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, ist `dataOffset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts angibt, der von `data` nach `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, ist `size` gleich der Gesamtgröße von `data` minus `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist gleich oder größer als 0.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (bei Umwandlung in Bytes, im Falle von `TypedArray`s) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `buffer` ist verfügbar, d. h. nicht nicht verfügbar (`GPUBuffer`s sind nicht verfügbar, wenn sie derzeit [zugeordnet](/de/docs/Web/API/GPUBuffer/mapAsync) sind) oder zerstört (mit der [`GPUBuffer.destroy()`](/de/docs/Web/API/GPUBuffer/destroy)-Methode).
- Der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `bufferOffset`, bei Umwandlung in Bytes, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, bei Umwandlung in Bytes, ist gleich oder kleiner als die Größe des `buffer` [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size).

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, mit dem wir ein Dreieck zeichnen werden:

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
