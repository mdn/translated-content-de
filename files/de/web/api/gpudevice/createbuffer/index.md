---
title: "GPUDevice: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 60457fede46884fee5c94976016f30dddc01bb4e
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem Rohdaten gespeichert werden, die in GPU-Operationen verwendet werden sollen.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}
      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Buffer bei der Erstellung abgebildet, was bedeutet, dass Sie die Werte innerhalb des Buffers sofort festlegen können, indem Sie [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) aufrufen. Der Standardwert ist `false`.

        Beachten Sie, dass es gültig ist, `mappedAtCreation: true` zu setzen, um die anfänglichen Daten des Buffers festzulegen, selbst wenn die `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` Nutzungsflags nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes darstellt. Wenn `mappedAtCreation` auf `true` gesetzt ist, muss dies ein Vielfaches von `4` sein.
    - `usage`
      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Nutzungen für den `GPUBuffer` darstellen. Die möglichen Werte sind in der [`GPUBuffer.usage` Werte-Tabelle](/de/docs/Web/API/GPUBuffer/usage#value) aufgeführt.

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE`.

### Rückgabewert

Eine [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz.

### Ausnahmen

- `RangeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `mappedAtCreation` auf `true` gesetzt ist und die angegebene `size` kein Vielfaches von `4` ist.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt zurückgegeben:

- Eine gültige `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und es sind keine zusätzlichen Flags außer `GPUBufferUsage.COPY_DST` angegeben.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und es sind keine zusätzlichen Flags außer `GPUBufferUsage.COPY_SRC` angegeben.

> [!NOTE]
> Wenn die Pufferzuordnung ohne spezifische Nebeneffekte fehlschlägt, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekt erzeugt.

## Beispiele

In unserem [grundlegenden Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript abgebildet wird.

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
