---
title: "WorkerNavigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}

Die **`deviceMemory`**-Eigenschaft der [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator)-Schnittstelle ist schreibgeschützt und gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um {{Glossary("fingerprinting", "Fingerprinting")}} zu reduzieren.
Er wird approximiert, indem der tatsächliche Wert auf die nächste Zweierpotenz aufgerundet und diese Zahl dann durch 1024 geteilt wird.
Danach wird er innerhalb unterer und oberer Grenzen festgelegt, um die Privatsphäre der Besitzer von sehr speicherarmen oder speicherreichen Geräten zu schützen.
Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Browser-Kompatibilitätstabelle](#browser-kompatibilität)).

## Wert

Eine Gleitkommazahl, die auf einen Wert in einer Zweierpotenz genähert und auf implementierungsdefinierte Grenzen beschränkt ist.

Zum Beispiel, wenn ein Browser keine Werte unter `2` oder über `32` meldet, dann ist der Wert einer von: `2`, `4`, `8`, `16`, `32`.

## Beispiele

Der folgende Code kann in einem Worker ausgeführt werden:

```js
const memory = navigator.deviceMemory;
console.log(`This device has approximately ${memory}GiB of RAM.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Sec-CH-Device-Memory")}} HTTP-Header
