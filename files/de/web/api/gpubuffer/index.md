---
title: GPUBuffer
slug: Web/API/GPUBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUBuffer`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Speicherblock, der verwendet werden kann, um rohe Daten zu speichern, die in GPU-Operationen verwendet werden.

Eine `GPUBuffer`-Objektinstanz wird mit der Methode [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUBuffer/label)
  - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mapState`](/de/docs/Web/API/GPUBuffer/mapState) {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den abgebildeten Zustand des `GPUBuffer` darstellt.
- [`size`](/de/docs/Web/API/GPUBuffer/size) {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge der Speicherzuweisung des `GPUBuffer` in Bytes darstellt.
- [`usage`](/de/docs/Web/API/GPUBuffer/usage) {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "Bitweise-Flags")}}, die die erlaubten Verwendungen des `GPUBuffer` darstellen.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/GPUBuffer/destroy)
  - : Zerstört den `GPUBuffer`.
- [`getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange)
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der die abgebildeten Inhalte des `GPUBuffer` im angegebenen Bereich enthält.
- [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)
  - : Bildet den angegebenen Bereich des `GPUBuffer` ab. Gibt ein {{jsxref("Promise")}} zurück, das gelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zugegriffen zu werden.
- [`unmap()`](/de/docs/Web/API/GPUBuffer/unmap)
  - : Hebt die Abbildung des abgebildeten Bereichs des `GPUBuffer` auf, damit sein Inhalt wieder von der GPU verwendet werden kann.

## Beispiele

In unserem [grundlegenden Berechnungsbeispiel](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript abgebildet wird.

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

Später, sobald der `stagingBuffer` die Ergebnisse der GPU-Berechnung enthält, wird eine Kombination von `GPUBuffer`-Methoden verwendet, um die Daten zurück an JavaScript zu lesen, damit sie in der Konsole protokolliert werden können:

- [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wird verwendet, um den `GPUBuffer` zum Lesen abzubilden.
- [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) wird verwendet, um einen {{jsxref("ArrayBuffer")}} zurückzugeben, der den Inhalt des `GPUBuffer` enthält.
- [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wird verwendet, um den `GPUBuffer` wieder aufzuheben, sobald wir den Inhalt nach Bedarf in JavaScript gelesen haben.

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
