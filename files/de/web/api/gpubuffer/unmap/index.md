---
title: "GPUBuffer: unmap()-Methode"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`unmap()`**-Methode der {{domxref("GPUBuffer")}}-Schnittstelle hebt die Zuordnung des gemappten Bereichs des `GPUBuffer` auf, sodass seine Inhalte nach einer vorherigen Zuordnung mit {{domxref("GPUBuffer.mapAsync()")}} wieder für die GPU verfügbar sind (die GPU kann nicht auf einen gemappten `GPUBuffer` zugreifen).

Wenn `unmap()` aufgerufen wird, werden alle über {{domxref("GPUBuffer.getMappedRange()")}} erstellten {{jsxref("ArrayBuffer")}}s getrennt.

## Syntax

```js-nolint
unmap()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

Sehen Sie sich die [Hauptseite von `GPUBuffer`](/de/docs/Web/API/GPUBuffer#examples) für ein Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
