---
title: "GPUBuffer: getMappedRange() Methode"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
l10n:
  sourceCommit: 16f462ee43bbd7fd39561a480e3e323d1c542966
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getMappedRange()`** Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle gibt ein {{jsxref("ArrayBuffer")}} zurück, das die abgebildeten Inhalte des `GPUBuffer` im angegebenen Bereich enthält.

Dies kann nur geschehen, nachdem der `GPUBuffer` erfolgreich mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) abgebildet wurde (dies kann über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden). Solange der `GPUBuffer` abgebildet ist, kann er nicht in GPU-Befehlen verwendet werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um ihn zu entkoppeln und wieder für die GPU zugänglich zu machen. Ein `TypeError` wird ausgelöst, wenn versucht wird, das {{jsxref("ArrayBuffer")}} auf eine andere Weise als über [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) abzutrennen, beispielsweise durch Aufruf von {{jsxref("ArrayBuffer/transfer", "transfer()")}}.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameter

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz, in Bytes, von Beginn des abgebildeten Bereichs des `GPUBuffer` bis zum Beginn des im {{jsxref("ArrayBuffer")}} zurückzugebenden Bereichs darstellt. Wird `offset` weggelassen, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe, in Bytes, des zurückzugebenden {{jsxref("ArrayBuffer")}} darstellt. Wird `size` weggelassen, erstreckt sich der Bereich bis zum Ende des abgebildeten Bereichs des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getMappedRange()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst:

- `offset` ist ein Vielfaches von 8.
- Der gesamte Bereich, der abgebildet werden soll (`size`, falls angegeben, oder die Länge des abgebildeten Bereichs - `offset`, falls nicht), ist ein Vielfaches von 4.
- Der gesamte Bereich liegt innerhalb der Grenzen des abgebildeten Bereichs und überschneidet sich nicht mit den {{jsxref("ArrayBuffer")}} Bereichen, die von anderen aktiven `getMappedRange()` Aufrufen angegeben wurden.

## Beispiele

Siehe die [Hauptseite `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
