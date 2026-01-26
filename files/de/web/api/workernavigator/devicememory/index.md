---
title: "WorkerNavigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: 53d1a4810a69dc436badd5b73c1a66c8764c835b
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die schreibgeschützte **`deviceMemory`**-Eigenschaft des [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Interfaces gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um {{Glossary("fingerprinting", "Fingerprinting")}} zu begrenzen. Er wird approximiert, indem er auf die nächste Zweierpotenz abgerundet und dann diese Zahl durch 1024 geteilt wird. Anschließend wird er innerhalb von unteren und oberen Grenzen eingegrenzt, um die Privatsphäre der Besitzer von Geräten mit sehr wenig oder sehr viel Speicher zu schützen.

## Wert

Eine Gleitkommazahl; einer der Werte `0.25`, `0.5`, `1`, `2`, `4`, `8`.

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

- {{HTTPHeader("Sec-CH-Device-Memory")}} HTTP-Header
