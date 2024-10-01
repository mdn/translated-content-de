---
title: GPUBuffer
slug: Web/API/GPUBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUBuffer`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) repräsentiert einen Speicherblock, der zur Speicherung von Rohdaten verwendet werden kann, um GPU-Operationen auszuführen.

Eine `GPUBuffer`-Objektinstanz wird mit der [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)-Methode erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`label`](/de/docs/Web/API/GPUBuffer/label) {{Experimental_Inline}}
  - : Ein String, der eine Bezeichnung bietet, die verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
- [`mapState`](/de/docs/Web/API/GPUBuffer/mapState) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den abgebildeten Zustand des `GPUBuffer` darstellt.
- [`size`](/de/docs/Web/API/GPUBuffer/size) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge der Speicherzuweisung des `GPUBuffer` in Bytes repräsentiert.
- [`usage`](/de/docs/Web/API/GPUBuffer/usage) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die {{Glossary("bitwise_flags", "bitweisen Flags")}}, die die zulässigen Verwendungen des `GPUBuffer` darstellen.

## Instanzmethoden

- [`destroy()`](/de/docs/Web/API/GPUBuffer/destroy) {{Experimental_Inline}}
  - : Zerstört den `GPUBuffer`.
- [`getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) {{Experimental_Inline}}
  - : Gibt einen {{jsxref("ArrayBuffer")}} zurück, der den abgebildeten Inhalt des `GPUBuffer` im angegebenen Bereich enthält.
- [`mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) {{Experimental_Inline}}
  - : Abbilden des angegebenen Bereichs des `GPUBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zugegriffen zu werden.
- [`unmap()`](/de/docs/Web/API/GPUBuffer/unmap) {{Experimental_Inline}}
  - : Hebt die Abbildung des `GPUBuffer`-Bereichs auf, wodurch sein Inhalt wieder für die GPU-Nutzung verfügbar wird.

## Beispiele

In unserem [einfachen Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der zur JavaScript-Zugriff abgebildet wird.

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

Später, sobald der `stagingBuffer` die Ergebnisse der GPU-Berechnung enthält, wird eine Kombination von `GPUBuffer`-Methoden verwendet, um die Daten zurück zu JavaScript zu lesen, damit sie dann in die Konsole protokolliert werden können:

- [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wird verwendet, um den `GPUBuffer` zum Lesen abzubilden.
- [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) wird verwendet, um einen {{jsxref("ArrayBuffer")}} zurückzugeben, der den Inhalt des `GPUBuffer` enthält.
- [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) wird verwendet, um den `GPUBuffer` erneut freizugeben, nachdem wir den Inhalt bei Bedarf in JavaScript eingelesen haben.

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
