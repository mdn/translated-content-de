---
title: "WorkerNavigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: e8fe043f7d2ad7cd9804d1bf96e0310949f1dac7
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die **`deviceMemory`** schreibgeschützte
Eigenschaft der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um [Fingerprinting](/de/docs/Glossary/fingerprinting) einzuschränken. Er wird angenähert, indem er auf die nächste Zweierpotenz abgerundet und diese Zahl dann durch 1024 geteilt wird. Anschließend wird der Wert innerhalb unterer und oberer Grenzen gehalten, um die Privatsphäre der Besitzer von Geräten mit sehr wenig oder sehr viel Speicher zu schützen.

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
