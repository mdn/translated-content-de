---
title: "GPUBuffer: getMappedRange() Methode"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getMappedRange()`** Methode des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces gibt einen {{jsxref("ArrayBuffer")}} zurück, der den abgebildeten Inhalt des `GPUBuffer` im angegebenen Bereich enthält.

Dies kann nur geschehen, nachdem der `GPUBuffer` erfolgreich mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) abgebildet wurde (dies kann über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden). Solange der `GPUBuffer` abgebildet ist, kann er in keinem GPU-Befehl verwendet werden.

Wenn Sie mit den `GPUBuffer`-Werten fertig sind, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um es zu entabilden und wieder für die GPU zugänglich zu machen.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameter

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Versatz in Bytes vom Anfang des `GPUBuffer`-abgebildeten Bereichs bis zum Anfang des zurückzugebenden Bereichs im {{jsxref("ArrayBuffer")}} darstellt. Wird `offset` weggelassen, wird standardmäßig 0 verwendet.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zurückzugebenden {{jsxref("ArrayBuffer")}} darstellt. Wird `size` weggelassen, erstreckt sich der Bereich bis zum Ende des `GPUBuffer`-abgebildeten Bereichs.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getMappedRange()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst:

- `offset` ist ein Vielfaches von 8.
- Der gesamte Bereich, der abgebildet werden soll (`size`, wenn angegeben, oder abgebildete Bereichslänge - `offset`, wenn nicht), ist ein Vielfaches von 4.
- Der gesamte Bereich liegt innerhalb der Grenzen des abgebildeten Bereichs und überschneidet sich nicht mit den {{jsxref("ArrayBuffer")}}-Bereichen, die von anderen aktiven `getMappedRange()`-Aufrufen angegeben werden.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den {{jsxref("ArrayBuffer")}} auf andere Weise als über [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) zu lösen.

## Beispiele

Ein Beispiel finden Sie auf der [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
