---
title: "GPUDevice: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`** Methode der
[`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem rohe Daten für die Verwendung in GPU-Operationen gespeichert werden.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Buffer bei der Erstellung gemappt, was bedeutet, dass Sie die Werte innerhalb des Buffers sofort durch Aufrufen von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) festlegen können. Der Standardwert ist `false`.

        Beachten Sie, dass es gültig ist, `mappedAtCreation: true` zu setzen, damit Sie die Anfangsdaten des Puffers festlegen können, auch wenn die `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` Nutzungsflags nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes darstellt.
    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Anwendungen für den `GPUBuffer` darstellen. Die möglichen Werte finden Sie in der [`GPUBuffer.usage` Wertetabelle](/de/docs/Web/API/GPUBuffer/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennen der Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, zum Beispiel: `GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE`.

### Rückgabewert

Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekt zurückgegeben:

- Eine gültige `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und es werden keine weiteren Flags außer `GPUBufferUsage.COPY_DST` angegeben.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und es werden keine weiteren Flags außer `GPUBufferUsage.COPY_SRC` angegeben.
- `mappedAtCreation: true` ist angegeben, und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Pufferspeicherzuweisung fehlschlägt, ohne dass spezifische Nebeneffekte auftreten, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) Objekt erzeugt.

## Beispiele

In unserem [Grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um die Berechnungen der GPU zu lesen, und einen Staging-Puffer, um für den JavaScript-Zugriff gemappt zu werden.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
