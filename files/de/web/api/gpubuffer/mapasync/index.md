---
title: "GPUBuffer: mapAsync()-Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zuzugreifen. Solange der `GPUBuffer` gemappt ist, kann er nicht in GPU-Befehlen verwendet werden.

Sobald der Puffer erfolgreich gemappt wurde (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), geben Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) ein {{jsxref("ArrayBuffer")}} zurück, das die aktuellen Werte des `GPUBuffer` enthält, um von JavaScript nach Bedarf gelesen und aktualisiert zu werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zu entmappen und erneut für die GPU zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein {{Glossary("bitwise_flags", "Bit-Flag")}}, das angibt, ob der `GPUBuffer` für Lese- oder Schreibzugriffe gemappt ist. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen, die am von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegebenen {{jsxref("ArrayBuffer")}} vorgenommen werden, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Lesen im gemappten Modus kann nur auf `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` gesetzt haben (d. h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden – alle Änderungen, die am von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegebenen {{jsxref("ArrayBuffer")}} vorgenommen werden, werden im `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Schreiben im gemappten Modus kann nur auf `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` gesetzt haben (d. h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes vom Anfang des Puffers bis zum Beginn des zu mappenden Bereichs darstellt. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu mappenden Bereichs darstellt. Wenn `size` weggelassen wird, erstreckt sich der zu mappende Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("Undefined")}} aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zuzugreifen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapSync()`** aufgerufen wird, andernfalls wird eine `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Promise wird abgelehnt, und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) wird generiert:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size` falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset` falls nicht) ist ein Vielfaches von 4.
- Der gesamte zu mappende Bereich liegt innerhalb der Grenzen des `GPUBuffer`.
- Falls der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Falls der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Sehen Sie sich die [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
