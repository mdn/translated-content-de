---
title: "GPUBuffer: Methode getMappedRange()"
short-title: getMappedRange()
slug: Web/API/GPUBuffer/getMappedRange
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`getMappedRange()`**-Methode der {{domxref("GPUBuffer")}}-Schnittstelle gibt einen {{jsxref("ArrayBuffer")}} zurück, der den gemappten Inhalt des `GPUBuffer` im angegebenen Bereich enthält.

Dies kann nur erfolgen, nachdem der `GPUBuffer` erfolgreich mit {{domxref("GPUBuffer.mapAsync()")}} gemappt wurde (dies kann über {{domxref("GPUBuffer.mapState")}} überprüft werden). Während der `GPUBuffer` gemappt ist, kann er in keinen GPU-Befehlen verwendet werden.

Wenn Sie die Arbeit mit den `GPUBuffer`-Werten abgeschlossen haben, rufen Sie {{domxref("GPUBuffer.unmap()")}} auf, um ihn zu entmappen und der GPU wieder zugänglich zu machen.

## Syntax

```js-nolint
getMappedRange()
getMappedRange(offset)
getMappedRange(offset, size)
```

### Parameter

- `offset` {{optional_inline}}
  - : Eine Zahl, die den Offset in Bytes vom Beginn des gemappten Bereichs des `GPUBuffer` bis zum Anfang des in dem {{jsxref("ArrayBuffer")}} zurückzugebenden Bereichs darstellt. Wenn `offset` weggelassen wird, wird der Standardwert 0 verwendet.
- `size` {{optional_inline}}
  - : Eine Zahl, die die Größe in Bytes des zurückzugebenden {{jsxref("ArrayBuffer")}} darstellt. Wenn `size` weggelassen wird, erstreckt sich der Bereich bis zum Ende des gemappten Bereichs des `GPUBuffer`.

### Rückgabewert

Ein {{jsxref("ArrayBuffer")}}.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`getMappedRange()`** aufgerufen wird, andernfalls wird ein `OperationError`-{{domxref("DOMException")}} ausgelöst:

- `offset` ist ein Vielfaches von 8.
- Der gesamte zu mappende Bereich (`size`, falls angegeben, oder gemappte Bereichslänge - `offset`, falls nicht) ist ein Vielfaches von 4.
- Der gesamte Bereich liegt innerhalb der Grenzen des gemappten Bereichs und überlappt nicht mit den {{jsxref("ArrayBuffer")}}-Bereichen, die durch andere aktive `getMappedRange()`-Aufrufe angegeben werden.

### Ausnahmen

- `TypeError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn versucht wird, den {{jsxref("ArrayBuffer")}} auf eine andere Weise als durch {{domxref("GPUBuffer.unmap()")}} zu lösen.

## Beispiele

Siehe die [Hauptseite zu `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
