---
title: "GPUBuffer: unmap()-Methode"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unmap()`**-Methode des [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Interfaces hebt die Zuordnung des zugeordneten Bereichs des `GPUBuffer` auf. Dadurch werden die Inhalte nach einer vorherigen Zuordnung mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) wieder für die Nutzung durch die GPU verfügbar (die GPU kann auf einen zugeordneten `GPUBuffer` nicht zugreifen).

Wenn `unmap()` aufgerufen wird, werden alle {{jsxref("ArrayBuffer")}}s, die über [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) erstellt wurden, getrennt.

## Syntax

```js-nolint
unmap()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Siehe die [Hauptseite `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
