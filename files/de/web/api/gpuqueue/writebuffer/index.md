---
title: "GPUQueue: writeBuffer()-Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`writeBuffer()`**-Methode der [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Schnittstelle schreibt eine bereitgestellte Datenquelle in einen gegebenen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer).

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Pufferdaten über das Puffer-Mapping und Puffer-zu-Puffer-Kopien bietet. Sie lässt den Benutzeragenten die effizienteste Methode zum Kopieren der Daten bestimmen.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das den Puffer repräsentiert, in den die Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Versatz in Bytes darstellt, bei dem mit dem Schreiben der Daten innerhalb des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) begonnen werden soll.
- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in den [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) geschrieben werden soll. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Versatz angibt, ab dem die Daten innerhalb der Datenquelle geschrieben werden sollen. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, wird `dataOffset` auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts repräsentiert, der von `data` in den `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, entspricht `size` der Gesamtgröße von `data`, abzüglich `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist gleich oder größer als 0.
    - `dataOffset` ist gleich oder kleiner als die Größe von `data`.
    - Die Größe von `data` (wenn sie in Bytes umgewandelt wird, im Fall von `TypedArray`s) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`writeBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die [`GPUQueue`](/de/docs/Web/API/GPUQueue) wird ungültig:

- `buffer` ist zur Verwendung verfügbar, d.h. nicht nicht verfügbar (`GPUBuffer`s sind nicht verfügbar, wenn sie gerade [gemappt](/de/docs/Web/API/GPUBuffer/mapAsync) oder mit der Methode [`GPUBuffer.destroy()`](/de/docs/Web/API/GPUBuffer/destroy) zerstört wurden).
- Die [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage) von `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `bufferOffset`, wenn in Bytes umgewandelt, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, wenn in Bytes umgewandelt, ist gleich oder kleiner als die [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) des `buffer`.

## Beispiele

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir verwenden werden, um ein Dreieck zu zeichnen:

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
