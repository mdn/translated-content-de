---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`** Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, um darauf zugegriffen zu werden. Während der `GPUBuffer` gemappt ist, kann er in keinen GPU-Befehlen verwendet werden.

Sobald der Puffer erfolgreich gemappt wurde (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), geben Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) ein {{jsxref("ArrayBuffer")}} zurück, das die aktuellen Werte des `GPUBuffer` enthält, um von JavaScript bei Bedarf gelesen und aktualisiert zu werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten beendet haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zu entmappen und wieder für die GPU zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein {{Glossary("bitwise_flags", "bitweises Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben gemappt wird. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen, die am {{jsxref("ArrayBuffer")}} vorgenommen werden, das von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Mapping im Lesemodus kann nur auf `GPUBuffer`s verwendet werden, die die Nutzung `GPUBufferUsage.MAP_READ` auf ihnen gesetzt haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden — alle Änderungen, die am {{jsxref("ArrayBuffer")}} vorgenommen werden, das von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden im `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Mapping im Schreibmodus kann nur auf `GPUBuffer`s verwendet werden, die die Nutzung `GPUBufferUsage.MAP_WRITE` auf ihnen gesetzt haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Puffers bis zum Anfang des zu mappenden Bereichs repräsentiert. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu mappenden Bereichs repräsentiert. Wenn `size` weggelassen wird, erstreckt sich der gemappte Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("Undefined")}} aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, um darauf zugegriffen zu werden.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapAsync()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Promise wird abgelehnt, und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) wird generiert:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size`, falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset`, falls nicht) ist ein Vielfaches von 4.
- Der gesamte zu mappende Bereich liegt innerhalb der Grenzen des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` die Nutzung `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` die Nutzung `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Sehen Sie das [Hauptseite zu `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
