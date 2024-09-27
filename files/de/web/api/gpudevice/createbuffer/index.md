---
title: "GPUDevice: Methode createBuffer()"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem rohe Daten für GPU-Operationen gespeichert werden können.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein Boolean. Wenn auf `true` gesetzt, wird der Puffer bei der Erstellung zugeordnet, was bedeutet, dass Sie die Werte innerhalb des Puffers sofort durch Aufruf von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) festlegen können. Der Standardwert ist `false`.

        Beachten Sie, dass es gültig ist, `mappedAtCreation: true` zu setzen, um die Anfangsdaten des Puffers festzulegen, auch wenn die `GPUBufferUsage.MAP_READ`- oder `GPUBufferUsage.MAP_WRITE`-Nutzungsflags nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Puffers in Bytes darstellt.
    - `usage`

      - : Die [bitweisen Flags](/de/docs/Glossary/Bitwise_flags), die die erlaubten Nutzungen für den `GPUBuffer` darstellen. Die möglichen Werte finden Sie in der [`GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage#value)-Wertetabelle.

        Beachten Sie, dass mehrere mögliche Nutzungen angegeben werden können, indem Werte mit Pipe-Symbolen getrennt werden, zum Beispiel:

        ```js
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
        ```

### Rückgabewert

Eine [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt zurückgegeben:

- Eine gültige `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und keine zusätzlichen Flags sind angegeben, außer `GPUBufferUsage.COPY_DST`.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und keine zusätzlichen Flags sind angegeben, außer `GPUBufferUsage.COPY_SRC`.
- `mappedAtCreation: true` ist angegeben, und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Pufferzuweisung fehlschlägt, ohne dass spezifische Nebeneffekte auftreten, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekt generiert.

## Beispiele

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript zugeordnet wird.

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
