---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`** Methode des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Interfaces mappt den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, zugegriffen zu werden. Solange der `GPUBuffer` gemappt ist, kann er in keinen GPU-Befehlen verwendet werden.

Sobald der Puffer erfolgreich gemappt ist (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), geben Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) einen {{jsxref("ArrayBuffer")}} zurück, der die aktuellen Werte des `GPUBuffer` enthält, um von JavaScript nach Bedarf gelesen und aktualisiert zu werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten beendet haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zu entmappen und damit der GPU wieder zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`
  - : Ein {{Glossary("bitwise_flags", "bitweises Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben gemappt ist. Mögliche Werte sind:
    - `GPUMapMode.READ`
      - : Der `GPUBuffer` ist zum Lesen gemappt. Werte können gelesen werden, aber alle Änderungen am {{jsxref("ArrayBuffer")}} von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Lesen im gemappten Modus kann nur bei `GPUBuffer`s verwendet werden, die für `GPUBufferUsage.MAP_READ` eingerichtet sind (d.h. beim Erstellen mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

    - `GPUMapMode.WRITE`
      - : Der `GPUBuffer` ist zum Schreiben gemappt. Werte können gelesen und aktualisiert werden — alle Änderungen am {{jsxref("ArrayBuffer")}} von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) werden im `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Das Schreiben im gemappten Modus kann nur bei `GPUBuffer`s verwendet werden, die für `GPUBufferUsage.MAP_WRITE` eingerichtet sind (d.h. beim Erstellen mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer)).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des Puffers bis zum Beginn des zu mappenden Bereichs darstellt. Wenn `offset` nicht angegeben ist, wird standardmäßig 0 verwendet.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zu mappenden Bereichs darstellt. Wenn `size` nicht angegeben ist, erstreckt sich der gemappte Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das zu {{jsxref("undefined")}} aufgelöst wird, wenn der Inhalt des `GPUBuffer` bereit ist, zugegriffen zu werden.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapAsync()`** aufgerufen wird, ansonsten wird eine `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Promise wird abgelehnt, und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) wird generiert:

- `offset` ist ein Vielfaches von 8.
- Der Gesamtbereich, der gemappt werden soll (`size`, falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset`, falls nicht), ist ein Vielfaches von 4.
- Der Gesamtbereich, der gemappt werden soll, liegt im Bereich des `GPUBuffer`.
- Wenn der Modus `GPUMapMode.READ` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_READ`.
- Wenn der Modus `GPUMapMode.WRITE` ist, hat der `GPUBuffer` eine Nutzung von `GPUBufferUsage.MAP_WRITE`.

## Beispiele

Sehen Sie auf der [Hauptseite zu `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) nach einem Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
