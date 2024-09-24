---
title: "GPUQueue: writeBuffer()-Methode"
short-title: writeBuffer()
slug: Web/API/GPUQueue/writeBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`writeBuffer()`**-Methode der {{domxref("GPUQueue")}}-Schnittstelle schreibt eine bereitgestellte Datenquelle in einen gegebenen {{domxref("GPUBuffer")}}.

Dies ist eine Komfortfunktion, die eine Alternative zum Setzen von Pufferdaten über Puffermapping und Puffer-zu-Puffer-Kopien bietet. Sie ermöglicht es dem Benutzeragenten, den effizientesten Weg zu bestimmen, um die Daten zu kopieren.

## Syntax

```js-nolint
writeBuffer(buffer, bufferOffset, data, dataOffset, size)
```

### Parameter

- `buffer`
  - : Ein {{domxref("GPUBuffer")}}-Objekt, das den Puffer darstellt, in den Daten geschrieben werden sollen.
- `bufferOffset`
  - : Eine Zahl, die den Versatz in Bytes angibt, ab dem die Daten innerhalb des {{domxref("GPUBuffer")}} geschrieben werden sollen.
- `data`
  - : Ein Objekt, das die Datenquelle repräsentiert, die in den {{domxref("GPUBuffer")}} geschrieben werden sollen. Dies kann ein {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}} oder {{jsxref("DataView")}} sein.
- `dataOffset` {{optional_inline}}
  - : Eine Zahl, die den Versatz angibt, ab dem die Daten aus der Datenquelle geschrieben werden sollen. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn er weggelassen wird, ist `dataOffset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Inhalts angibt, der von `data` in den `buffer` geschrieben werden soll. Dieser Wert ist eine Anzahl von Elementen, wenn `data` ein {{jsxref("TypedArray")}} ist, und eine Anzahl von Bytes, wenn nicht. Wenn weggelassen, entspricht `size` der Gesamtlänge von `data` abzüglich `dataOffset`.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

### Ausnahmen

- `OperationError` {{domxref("DOMException")}}
  - : Die Methode wirft einen `OperationError`, wenn die folgenden Kriterien nicht erfüllt sind:
    - Die Größe von `data` ist größer oder gleich 0.
    - `dataOffset` ist kleiner oder gleich der Größe von `data`.
    - Die Größe von `data` (bei Umwandlung in Bytes, im Fall von `TypedArray`s) ist ein Vielfaches von 4.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`writeBuffer()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und die {{domxref("GPUQueue")}} wird ungültig:

- `buffer` ist verfügbar zur Verwendung, d.h. nicht unzugänglich (`GPUBuffer`s sind unzugänglich, wenn sie derzeit {{domxref("GPUBuffer.mapAsync", "mapped", "", "nocode")}} sind) oder zerstört (mit der {{domxref("GPUBuffer.destroy()")}}-Methode).
- Die {{domxref("GPUBuffer.usage")}} von `buffer` enthält das `GPUBufferUsage.COPY_DST`-Flag.
- `bufferOffset`, bei Umwandlung in Bytes, ist ein Vielfaches von 4.
- Die Größe von `data` - `dataOffset` + `bufferOffset`, bei Umwandlung in Bytes, ist gleich oder kleiner als die {{domxref("GPUBuffer.size")}} des `buffer`.

## Beispiele

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) definieren wir einige Vertex-Daten in einem {{jsxref("Float32Array")}}, die wir zum Zeichnen eines Dreiecks verwenden werden:

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Um diese Daten in einer Render-Pipeline zu verwenden, müssen wir sie in einen {{domxref("GPUBuffer")}} einfügen. Zuerst erstellen wir den Puffer:

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // groß genug machen, um Vertices darin zu speichern
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
