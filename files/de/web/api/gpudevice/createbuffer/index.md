---
title: "GPUDevice: createBuffer()-Methode"
short-title: createBuffer()
slug: Web/API/GPUDevice/createBuffer
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBuffer()`**-Methode der Schnittstelle [`GPUDevice`](/de/docs/Web/API/GPUDevice) erstellt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer), in dem Rohdaten für GPU-Operationen gespeichert werden.

## Syntax

```js-nolint
createBuffer(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `label` {{optional_inline}}
      - : Eine Zeichenfolge mit einer Bezeichnung, anhand derer das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.
    - `mappedAtCreation` {{optional_inline}}
      - : Ein boolescher Wert. Wenn er auf `true` gesetzt ist, wird der Buffer bei der Erstellung gemappt. Dadurch können Sie die Werte im Buffer sofort durch Aufrufen von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) festlegen. Der Standardwert ist `false`.

        Sie können `mappedAtCreation: true` setzen, um die Anfangsdaten des Buffers festzulegen, auch wenn die Usage-Flags `GPUBufferUsage.MAP_READ` oder `GPUBufferUsage.MAP_WRITE` nicht gesetzt sind.

    - `size`
      - : Eine Zahl, die die Größe des Buffers in Bytes angibt. Wenn `mappedAtCreation` auf `true` gesetzt ist, muss sie ein Vielfaches von `4` sein.
    - `usage`
      - : Die {{Glossary("Bitwise_flags", "bitweisen Flags")}}, die die zulässigen Verwendungen des `GPUBuffer` angeben. Die möglichen Werte finden Sie in der [Wertetabelle für `GPUBuffer.usage`](/de/docs/Web/API/GPUBuffer/usage#value).

        Sie können mehrere zulässige Verwendungen angeben, indem Sie die Werte mit einem [bitweisen OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) verknüpfen, zum Beispiel: `GPUBufferUsage.COPY_SRC | GPUBufferUsage.MAP_WRITE`.

### Rückgabewert

Eine [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objektinstanz.

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn `mappedAtCreation` auf `true` gesetzt ist und die angegebene `size` kein Vielfaches von `4` ist.

### Validierung

Beim Aufrufen von **`createBuffer()`** müssen die folgenden Kriterien erfüllt sein. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt zurückgegeben:

- Ein gültiger `usage`-Wert wird angegeben.
- Wenn `GPUBufferUsage.MAP_READ` angegeben ist, sind außer `GPUBufferUsage.COPY_DST` keine weiteren Flags angegeben.
- Wenn `GPUBufferUsage.MAP_WRITE` angegeben ist, sind außer `GPUBufferUsage.COPY_SRC` keine weiteren Flags angegeben.

> [!NOTE]
> Wenn die Zuweisung von Speicher für den Buffer ohne bestimmte Nebeneffekte fehlschlägt, wird ein [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)-Objekt erzeugt.

## Beispiele

In unserer [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) erstellen wir einen Ausgabebuffer, in den Ergebnisse von GPU-Berechnungen geschrieben werden, und einen Staging-Buffer, der für den Zugriff durch JavaScript gemappt wird.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
