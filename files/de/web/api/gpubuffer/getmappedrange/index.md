---
title: "GPUBuffer: getMappedRange()-Methode"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`getMappedRange()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der den gemappten Inhalt des `GPUBuffer` im angegebenen Bereich enthält.

Dies kann nur erfolgen, nachdem das `GPUBuffer` erfolgreich mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) gemappt wurde (dies kann über [`GPUBuffer.mapState`](/de/docs/Web/API/GPUBuffer/mapState) überprüft werden). Während das `GPUBuffer` gemappt ist, kann es in keinen GPU-Befehlen verwendet werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) auf, um es zu entmappen und damit wieder für die GPU zugänglich zu machen.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameter

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Anfang des gemappten Bereichs des `GPUBuffer` bis zum Anfang des im {{jsxref("ArrayBuffer")}} zurückzugebenden Bereichs darstellt. Wenn `offset` weggelassen wird, ist der Standardwert 0.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zurückzugebenden {{jsxref("ArrayBuffer")}} darstellt. Wenn `size` weggelassen wird, erstreckt sich der Bereich bis zum Ende des gemappten Bereichs des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getMappedRange()`** aufgerufen wird, andernfalls wird ein `OperationError` [`DOMException`](/de/docs/Web/API/DOMException) ausgelöst:

- `offset` ist ein Vielfaches von 8.
- Der zu mappende Gesamtbereich (`size` falls angegeben oder gemappte Bereichslänge - `offset` falls nicht) ist ein Vielfaches von 4.
- Der Gesamtbereich liegt innerhalb der Grenzen des gemappten Bereichs und überschneidet sich nicht mit den {{jsxref("ArrayBuffer")}}-Bereichen, die von anderen aktiven `getMappedRange()`-Aufrufen spezifiziert sind.

### Ausnahmen

- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn versucht wird, den {{jsxref("ArrayBuffer")}} auf eine andere Weise als über [`GPUBuffer.unmap()`](/de/docs/Web/API/GPUBuffer/unmap) zu trennen.

## Beispiele

Siehe die [Hauptseite zu `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
