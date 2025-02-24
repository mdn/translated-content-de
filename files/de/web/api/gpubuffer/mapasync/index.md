---
title: "GPUBuffer: mapAsync() Methode"
short-title: mapAsync()
slug: Web/API/GPUBuffer/mapAsync
l10n:
  sourceCommit: 889dbaf4d0da37ca80426f5e08d2be6ed7869f2d
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`mapAsync()`** Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle bildet den angegebenen Bereich des `GPUBuffer`. Sie gibt ein {{jsxref("Promise")}} zurück, das sich auflöst, wenn der Inhalt des `GPUBuffer` bereit ist, um darauf zuzugreifen. Während der `GPUBuffer` abgebildet ist, kann er in keinen GPU-Befehlen verwendet werden.

Sobald der Puffer erfolgreich abgebildet ist (was über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden kann), werden Aufrufe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) ein {{jsxref("ArrayBuffer")}} zurückgeben, das die aktuellen Werte des `GPUBuffer` enthält, die nach Bedarf von JavaScript gelesen und aktualisiert werden können.

Wenn Sie die Arbeit mit den Werten des `GPUBuffer` abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn wieder abzubilden und für die GPU zugänglich zu machen.

## Syntax

```js-nolint
mapAsync(mode)
mapAsync(mode, offset, size)
```

### Parameter

- `mode`

  - : Ein {{Glossary("bitwise_flags", "bitweises Flag")}}, das angibt, ob der `GPUBuffer` zum Lesen oder Schreiben abgebildet ist. Mögliche Werte sind:

    - `GPUMapMode.READ`

      - : Der `GPUBuffer` ist zum Lesen abgebildet. Werte können gelesen werden, aber alle Änderungen am {{jsxref("ArrayBuffer")}}, die durch [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben werden, werden verworfen, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Die Abbildung im Lesemodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_READ` haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

    - `GPUMapMode.WRITE`

      - : Der `GPUBuffer` ist zum Schreiben abgebildet. Werte können gelesen und aktualisiert werden – alle Änderungen am {{jsxref("ArrayBuffer")}}, die durch [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zurückgegeben werden, werden in den `GPUBuffer` gespeichert, sobald [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) aufgerufen wird.

        Die Abbildung im Schreibmodus kann nur bei `GPUBuffer`s verwendet werden, die eine Nutzung von `GPUBufferUsage.MAP_WRITE` haben (d.h. wenn sie mit [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt wurden).

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Beginn des Puffers bis zum Beginn des Bereichs darstellt, der abgebildet werden soll. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe des Bereichs in Bytes darstellt, der abgebildet werden soll. Wenn `size` weggelassen wird, erstreckt sich der abgebildete Bereich bis zum Ende des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich auflöst mit {{jsxref("Undefined")}}, wenn der Inhalt des `GPUBuffer` bereit ist, um darauf zuzugreifen.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`mapAsync()`** aufgerufen wird, andernfalls wird eine `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst, das Versprechen abgelehnt und ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt:

- `offset` ist ein Vielfaches von 8.
- Der gesamte Bereich, der abgebildet werden soll (`size`, falls angegeben, oder [`GPUBuffer.size`](/de/docs/Web/API/GPUBuffer/size) - `offset`, falls nicht), ist ein Vielfaches von 4.
- Der gesamte Bereich, der abgebildet werden soll, liegt innerhalb der Grenzen des `GPUBuffer`.
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
