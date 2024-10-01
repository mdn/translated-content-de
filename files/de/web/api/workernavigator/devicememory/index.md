---
title: "WorkerNavigator: deviceMemory Eigenschaft"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`deviceMemory`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.

Der angegebene Wert ist ungenau, um {{Glossary("fingerprinting", "Fingerprinting")}} zu erschweren. Er wird geschätzt, indem er auf die nächste Zweierpotenz abgerundet und diese Zahl dann durch 1024 geteilt wird. Anschließend wird er innerhalb bestimmter unterer und oberer Grenzen geklammert, um die Privatsphäre von Besitzern von Geräten mit sehr geringem oder hohem Speicher zu schützen.

## Wert

Eine Gleitkommazahl; eine der folgenden: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

## Beispiele

Der folgende Code kann in einem Worker ausgeführt werden:

```js
const memory = navigator.deviceMemory;
console.log(`This device has at least ${memory}GiB of RAM.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Device-Memory")}} HTTP-Header
