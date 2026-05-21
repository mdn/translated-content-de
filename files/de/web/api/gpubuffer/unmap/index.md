---
title: "GPUBuffer: unmap() Methode"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
l10n:
  sourceCommit: 0abb70602b0b3b11a2909c417a03e10eabd607a8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unmap()`** Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Schnittstelle hebt die Zuordnung des zugeordneten Bereichs des `GPUBuffer` auf, wodurch dessen Inhalte nach vorheriger Zuordnung mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wieder für die Nutzung durch die GPU verfügbar gemacht werden (die GPU kann auf einen zugeordneten `GPUBuffer` nicht zugreifen).

Wenn `unmap()` aufgerufen wird, werden alle {{jsxref("ArrayBuffer")}}s, die über [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) erstellt wurden, getrennt.

## Syntax

```js-nolint
unmap()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

Siehe die [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
