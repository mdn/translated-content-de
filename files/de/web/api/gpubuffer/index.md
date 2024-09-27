---
title: GPUBuffer
slug: Web/API/GPUBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUBuffer`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Speicherblock, der zur Speicherung roher Daten verwendet werden kann, die in GPU-Operationen genutzt werden.

Ein `GPUBuffer`-Objekt wird mit der Methode [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUBuffer/label) {{Experimental_Inline}}
  - : Ein String, der eine Bezeichnung bietet, die zur Identifikation des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mapState`](/de/docs/Web/API/GPUBuffer/mapState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den zugeordneten Status des `GPUBuffer` repräsentiert.
- [`size`](/de/docs/Web/API/GPUBuffer/size) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge der `GPUBuffer`-Speicherzuweisung in Bytes darstellt.
- [`usage`](/de/docs/Web/API/GPUBuffer/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die [bitweise gesetzten Flags](/de/docs/Glossary/bitwise_flags), die die erlaubten Verwendungszwecke des `GPUBuffer` darstellen.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/GPUBuffer/destroy) {{Experimental_Inline}}
  - : Zerstört den `GPUBuffer`.
- [`getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) {{Experimental_Inline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die zugeordneten Inhalte des `GPUBuffer` im angegebenen Bereich enthält.
- [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) {{Experimental_Inline}}
  - : Ordnet den angegebenen Bereich des `GPUBuffer` zu. Gibt einen {{jsxref("Promise")}} zurück, der aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) abgerufen zu werden.
- [`unmap()`](/de/docs/Web/API/GPUBuffer/unmap) {{Experimental_Inline}}
  - : Hebt die Zuordnung des zugeordneten Bereichs des `GPUBuffer` auf, sodass dessen Inhalte wieder für die GPU bereitstehen.

## Beispiele

In unserem [grundlegenden Compute-Demonstrationsbeispiel](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff von JavaScript zugeordnet werden kann.

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

Später, sobald der `stagingBuffer` die Ergebnisse der GPU-Berechnung enthält, wird eine Kombination aus `GPUBuffer`-Methoden verwendet, um die Daten zurück in JavaScript zu lesen, damit sie dann in der Konsole protokolliert werden können:

- [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wird verwendet, um den `GPUBuffer` zum Lesen zuzuordnen.
- [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) wird verwendet, um einen {{jsxref("ArrayBuffer")}} zurückzugeben, der die Inhalte des `GPUBuffer` enthält.
- [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wird verwendet, um den `GPUBuffer` erneut zu entkoppeln, sobald wir den Inhalt nach Bedarf in JavaScript gelesen haben.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice(0);
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
