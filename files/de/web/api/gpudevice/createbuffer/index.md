---
title: "GPUDevice: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem rohe Daten für die Verwendung in GPU-Operationen gespeichert werden.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Puffer bei der Erstellung abgebildet, was bedeutet, dass Sie die Werte im Puffer sofort durch Aufrufen von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) festlegen können. Der Standardwert ist `false`.

        Beachten Sie, dass es gültig ist, `mappedAtCreation: true` festzulegen, damit Sie die Anfangsdaten des Puffers festlegen können, auch wenn die `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` Nutzungsflaggen nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Puffers in Bytes darstellt.
    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flaggen")}}, die die erlaubten Verwendungen für den `GPUBuffer` darstellen. Die möglichen Werte sind in der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage#value) Wertetabelle zu finden.

        Beachten Sie, dass mehrere mögliche Verwendungen angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE`.

### Rückgabewert

Eine Instanz des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekts.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createBuffer()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekt zurückgegeben:

- Eine gültige `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und keine weiteren Flags außer `GPUBufferUsage.COPY_DST` sind angegeben.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und keine weiteren Flags außer `GPUBufferUsage.COPY_SRC` sind angegeben.
- `mappedAtCreation: true` ist angegeben, und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Pufferzuweisung ohne spezifische Nebeneffekte fehlschlägt, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) Objekt erzeugt.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um die Berechnungen der GPU zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript abgebildet werden soll.

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
