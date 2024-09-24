---
title: GPUBuffer
slug: Web/API/GPUBuffer
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUBuffer`**-Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} repräsentiert einen Speicherblock, der zum Speichern von Rohdaten verwendet werden kann, um GPU-Operationen durchzuführen.

Eine `GPUBuffer`-Objektinstanz wird mit der Methode {{domxref("GPUDevice.createBuffer()")}} erstellt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- {{domxref("GPUBuffer.label", "label")}} {{Experimental_Inline}}
  - : Eine Zeichenkette, die ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
- {{domxref("GPUBuffer.mapState", "mapState")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein enumerierter Wert, der den gemappten Zustand des `GPUBuffer` darstellt.
- {{domxref("GPUBuffer.size", "size")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine Zahl, die die Länge der Speicherzuweisung des `GPUBuffer` in Bytes darstellt.
- {{domxref("GPUBuffer.usage", "usage")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Die {{glossary("bitwise flags")}}, die die erlaubten Verwendungen des `GPUBuffer` darstellen.

## Instanzmethoden

- {{domxref("GPUBuffer.destroy", "destroy()")}} {{Experimental_Inline}}
  - : Zerstört den `GPUBuffer`.
- {{domxref("GPUBuffer.getMappedRange", "getMappedRange()")}} {{Experimental_Inline}}
  - : Gibt ein {{jsxref("ArrayBuffer")}} zurück, das die gemappten Inhalte des `GPUBuffer` im angegebenen Bereich enthält.
- {{domxref("GPUBuffer.mapAsync", "mapAsync()")}} {{Experimental_Inline}}
  - : Mappt den angegebenen Bereich des `GPUBuffer`. Gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Inhalt des `GPUBuffer` bereit ist, mit {{domxref("GPUBuffer.getMappedRange()")}} abgerufen zu werden.
- {{domxref("GPUBuffer.unmap", "unmap()")}} {{Experimental_Inline}}
  - : Hebt das Mapping des gemappten Bereichs des `GPUBuffer` auf, wodurch seine Inhalte wieder für die Nutzung durch die GPU verfügbar werden.

## Beispiele

In unserem [basic compute demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabe-Buffer, um GPU-Berechnungen zu lesen, und einen Staging-Buffer, der für den Zugriff von JavaScript gemappt wird.

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

Später, wenn der `stagingBuffer` die Ergebnisse der GPU-Berechnungen enthält, wird eine Kombination von `GPUBuffer`-Methoden verwendet, um die Daten zurück zu JavaScript zu lesen, damit sie dann in die Konsole geloggt werden können:

- {{domxref("GPUBuffer.mapAsync()")}} wird verwendet, um den `GPUBuffer` zum Lesen zu mappen.
- {{domxref("GPUBuffer.getMappedRange()")}} wird verwendet, um ein {{jsxref("ArrayBuffer")}} zurückzugeben, das die Inhalte des `GPUBuffer` enthält.
- {{domxref("GPUBuffer.unmap()")}} wird verwendet, um den `GPUBuffer` erneut zu entmappen, sobald wir den Inhalt nach Bedarf in JavaScript eingelesen haben.

```js
// Mappt den Staging-Buffer, um die Ergebnisse zurück zu JS zu lesen
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Länge
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
