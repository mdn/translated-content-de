---
title: "GPUBuffer: unmap() Methode"
short-title: unmap()
slug: Web/API/GPUBuffer/unmap
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`unmap()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle hebt die Zuordnung des `GPUBuffer`-Bereichs auf, wodurch der Inhalt wieder für die Verwendung durch die GPU verfügbar wird, nachdem er zuvor mit [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) zugeordnet wurde (die GPU kann auf ein zugeordnetes `GPUBuffer` nicht zugreifen).

Wenn `unmap()` aufgerufen wird, werden alle über [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) erstellten {{jsxref("ArrayBuffer")}}s getrennt.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
