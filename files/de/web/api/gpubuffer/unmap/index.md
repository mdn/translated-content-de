---
title: "GPUBuffer: unmap()-Methode"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unmap()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle hebt die Zuordnung des zugeordneten Bereichs des `GPUBuffer` auf, wodurch seine Inhalte wieder zur Nutzung durch die GPU verfügbar gemacht werden, nachdem er zuvor mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) zugeordnet wurde (die GPU kann nicht auf einen zugeordneten `GPUBuffer` zugreifen).

Wenn `unmap()` aufgerufen wird, werden alle mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) erstellten {{jsxref("ArrayBuffer")}}s getrennt.

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
