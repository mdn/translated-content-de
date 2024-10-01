---
title: "GPUDevice: createBuffer() Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) zur Speicherung von Rohdaten, die in GPU-Operationen verwendet werden sollen.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Buffer bei der Erstellung abgebildet, was bedeutet, dass Sie die Werte im Buffer sofort durch Aufruf von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) setzen können. Der Standardwert ist `false`.

        Beachten Sie, dass es gültig ist, `mappedAtCreation: true` zu setzen, um die anfänglichen Daten des Buffers festzulegen, selbst wenn die `GPUBufferUsage.MAP_READ`- oder `GPUBufferUsage.MAP_WRITE`-Nutzungskennzeichen nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes darstellt.
    - `usage`

      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die erlaubten Verwendungen für den `GPUBuffer` darstellen. Die möglichen Werte sind in der [`GPUBuffer.usage`-Wertetabelle](/de/docs/Web/API/GPUBuffer/usage#value) aufgeführt.

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennzeichen mit Pipe-Symbolen angegeben werden können, zum Beispiel:

        ```js
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
        ```

### Rückgabewert

Eine Instanz des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekts.

### Validierung

Folgende Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt zurückgegeben:

- Ein gültiger `usage` wird angegeben.
- `GPUBufferUsage.MAP_READ` wird angegeben, und keine zusätzlichen Flags werden angegeben, außer `GPUBufferUsage.COPY_DST`.
- `GPUBufferUsage.MAP_WRITE` wird angegeben, und keine zusätzlichen Flags werden angegeben, außer `GPUBufferUsage.COPY_SRC`.
- `mappedAtCreation: true` ist angegeben, und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Speicherzuweisung des Buffers ohne spezifische Nebeneffekte fehlschlägt, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekt erzeugt.

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
