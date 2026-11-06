---
title: "WorkerNavigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/WorkerNavigator/deviceMemory
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{AvailableInWorkers("worker")}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`deviceMemory`** der Schnittstelle [`WorkerNavigator`](/de/docs/Web/API/WorkerNavigator) gibt die ungefähre Größe des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um {{Glossary("fingerprinting", "Fingerprinting")}} zu erschweren.
Er wird angenähert, indem der tatsächliche Wert auf die nächstgelegene Zweierpotenz gerundet und das Ergebnis anschließend durch 1024 geteilt wird.
Danach wird er auf einen unteren und einen oberen Grenzwert begrenzt, um die Privatsphäre der Besitzer von Geräten mit sehr wenig oder sehr viel Arbeitsspeicher zu schützen.
Diese Grenzwerte können sich im Laufe der Zeit ändern (siehe [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität)).

## Wert

Eine Gleitkommazahl, die auf einen Wert als Zweierpotenz vergröbert und auf implementierungsspezifische Grenzwerte begrenzt wird.

Wenn ein Browser beispielsweise keine Werte unter `2` oder über `32` meldet, ist der Wert einer der folgenden: `2`, `4`, `8`, `16`, `32`.

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

- {{HTTPHeader("Sec-CH-Device-Memory")}}-HTTP-Header
