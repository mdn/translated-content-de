---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, abgerufen zu werden. Solange der `GPUBuffer` gemappt ist, kann er in keinen GPU-Kommandos verwendet werden.

Sobald der Buffer erfolgreich gemappt ist (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), gibt ein Aufruf von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) einen {{jsxref("ArrayBuffer")}} zurück, der die aktuellen Werte des `GPUBuffer` enthält, die von JavaScript nach Bedarf gelesen und aktualisiert werden können.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zu entmappen und wieder für die GPU zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein [bitweises Flag](/de/docs/Glossary/bitwise_flags), das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben gemappt ist. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen am {{jsxref("ArrayBuffer")}}, der von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Ein Lese-Modus-Mapping kann nur auf `GPUBuffer` verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` angegeben haben (d.h. beim Erstellen mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden — alle Änderungen am {{jsxref("ArrayBuffer")}}, der von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben wird, werden in den `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Ein Schreib-Modus-Mapping kann nur auf `GPUBuffer` verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` angegeben haben (d.h. beim Erstellen mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Buffers bis zum Beginn des zu mappenden Bereichs darstellt. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu mappenden Bereichs darstellt. Wenn `size` weggelassen wird, erstreckt sich der gemappte Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("Undefined")}} aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, abgerufen zu werden.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapSync()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Promise abgelehnt und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size`, falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset`, falls nicht) ist ein Vielfaches von 4.
- Der gesamte zu mappende Bereich liegt innerhalb der Grenzen des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Siehe die [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
