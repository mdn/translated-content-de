---
title: "GPUDevice: createBuffer()-Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem rohe Daten gespeichert werden, die in GPU-Operationen verwendet werden können.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Buffer bei der Erstellung gemappt, was bedeutet, dass Sie die Werte im Buffer sofort festlegen können, indem Sie [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) aufrufen. Der Standardwert ist `false`.

        Beachten Sie, dass es zulässig ist, `mappedAtCreation: true` zu setzen, um die Anfangsdaten des Buffers festzulegen, auch wenn die Nutzungsflags `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes repräsentiert.
    - `usage`

      - : Die {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die erlaubten Nutzungen für den `GPUBuffer` darstellen. Die möglichen Werte sind in der [`GPUBuffer.usage`-Wertetabelle](/de/docs/Web/API/GPUBuffer/usage#value) aufgeführt.

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem Werte mit [bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, z.B.: `GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE`.

### Rückgabewert

Ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt zurückgegeben:

- Ein gültiges `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und keine zusätzlichen Flags sind angegeben außer `GPUBufferUsage.COPY_DST`.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und keine zusätzlichen Flags sind angegeben außer `GPUBufferUsage.COPY_SRC`.
- `mappedAtCreation: true` ist angegeben, und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Buffer-Allokation fehlschlägt, ohne spezifische Nebeneffekte zu verursachen, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekt generiert.

## Beispiele

In unserem [Grundlagen-Demo zur Berechnung](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript gemappt wird.

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
