---
title: "GPUBuffer: getMappedRange()-Methode"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getMappedRange()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das die abgebildeten Inhalte des `GPUBuffer` im angegebenen Bereich enthält.

Dies kann nur geschehen, nachdem der `GPUBuffer` erfolgreich mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) abgebildet wurde (dies kann über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden). Solange der `GPUBuffer` abgebildet ist, kann er in keinen GPU-Befehlen verwendet werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zurückzukoppeln und der GPU wieder zugänglich zu machen.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameter

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des abgebildeten Bereichs des `GPUBuffer` bis zum Anfang des zurückzugebenden Bereichs im {{jsxref("ArrayBuffer")}} darstellt. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zurückzugebenden {{jsxref("ArrayBuffer")}} darstellt. Wenn `size` weggelassen wird, erstreckt sich der Bereich bis zum Ende des abgebildeten Bereichs des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getMappedRange()`** aufgerufen wird, andernfalls wird ein `OperationError`-[`DOMException`](/de/docs/Web/API/DOMException) ausgelöst:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu abbildende Bereich (`size` falls angegeben, oder die Länge des abgebildeten Bereichs - `offset` falls nicht) ist ein Vielfaches von 4.
- Der gesamte Bereich befindet sich innerhalb der Grenzen des abgebildeten Bereichs und überlappt nicht mit den durch andere aktive `getMappedRange()`-Aufrufe angegebenen {{jsxref("ArrayBuffer")}}-Bereichen.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, das {{jsxref("ArrayBuffer")}} auf andere Weise zu trennen als über [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap).

## Beispiele

Sehen Sie ein Beispiel auf der [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
