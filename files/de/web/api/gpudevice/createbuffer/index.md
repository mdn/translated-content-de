---
title: "GPUDevice: createBuffer()-Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createBuffer()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt einen {{domxref("GPUBuffer")}}, um rohe Daten zu speichern, die in GPU-Operationen verwendet werden sollen.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zum Identifizieren des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `mappedAtCreation` {{optional_inline}}

      - : Ein boolean. Wenn auf `true` gesetzt, wird der Buffer bei der Erstellung abgebildet, was bedeutet, dass Sie die Werte im Buffer sofort festlegen können, indem Sie {{domxref("GPUBuffer.getMappedRange()")}} aufrufen. Der Standardwert ist `false`.

        Beachten Sie, dass es zulässig ist, `mappedAtCreation: true` festzulegen, sodass Sie die Anfangsdaten des Buffers festlegen können, auch wenn die `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` Nutzungsflaggen nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes darstellt.
    - `usage`

      - : Die {{glossary("Bitwise flags", "Bitmasken-Flags")}}, die die erlaubten Verwendungen für den `GPUBuffer` darstellen. Die möglichen Werte finden sich in der [`GPUBuffer.usage`-Werttabelle](/de/docs/Web/API/GPUBuffer/usage#value).

        Beachten Sie, dass mehrere mögliche Verwendungen durch Trennen der Werte mit Pipe-Symbolen angegeben werden können, beispielsweise:

        ```js
        usage: GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE;
        ```

### Rückgabewert

Ein {{domxref("GPUBuffer")}}-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBuffer()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUBuffer")}}-Objekt wird zurückgegeben:

- Eine gültige `usage` ist angegeben.
- `GPUBufferUsage.MAP_READ` ist angegeben, und keine zusätzlichen Flags sind außer `GPUBufferUsage.COPY_DST` angegeben.
- `GPUBufferUsage.MAP_WRITE` ist angegeben, und keine zusätzlichen Flags sind außer `GPUBufferUsage.COPY_SRC` angegeben.
- `mappedAtCreation: true` ist angegeben und die angegebene `size` ist ein Vielfaches von 4.

> [!NOTE]
> Wenn die Pufferzuteilung fehlschlägt, ohne spezifische Seiteneffekte, wird ein {{domxref("GPUOutOfMemoryError")}}-Objekt generiert.

## Beispiele

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabepuffer, um GPU-Berechnungen zu lesen, und einen Staging-Puffer, der für den Zugriff durch JavaScript abgebildet wird.

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
