---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`** Methode des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zugegriffen zu werden. Während der `GPUBuffer` gemappt ist, kann er in keinem GPU-Befehl verwendet werden.

Sobald der Puffer erfolgreich gemappt ist (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), geben Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) ein {{jsxref("ArrayBuffer")}} zurück, das die aktuellen Werte des `GPUBuffer` enthält, um von JavaScript nach Bedarf gelesen und aktualisiert zu werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten beendet haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn aufzuheben und dem GPU wieder zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`
  - : Ein {{Glossary("bitwise_flags", "bitweises Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben gemappt ist. Mögliche Werte sind:
    - `GPUMapMode.READ`
      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen, die am zurückgegebenen {{jsxref("ArrayBuffer")}} durch [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) vorgenommen werden, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Lesen-Modus-Mapping kann nur auf `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

    - `GPUMapMode.WRITE`
      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden — alle Änderungen, die am zurückgegebenen {{jsxref("ArrayBuffer")}} durch [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) vorgenommen werden, werden auf dem `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Schreiben-Modus-Mapping kann nur auf `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Puffers bis zum Beginn des zu mappenden Bereichs darstellt. Wenn `offset` weggelassen wird, beträgt er standardmäßig 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des zu mappenden Bereichs in Bytes darstellt. Wenn `size` weggelassen wird, erstreckt sich der gemappte Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das auf {{jsxref("Undefined")}} aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, darauf zugegriffen zu werden.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`mapAsync()`** erfüllt sein, andernfalls wird eine `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Versprechen wird abgelehnt und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) wird generiert:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size` falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset` falls nicht) ist ein Vielfaches von 4.
- Der gesamte zu mappende Bereich liegt innerhalb der Grenzen des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Siehe die [Hauptseite `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
