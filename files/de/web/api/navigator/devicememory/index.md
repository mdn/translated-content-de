---
title: "Navigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: 076ee5b53d5e933e7fc2fd5eff68304f9691148e
---

{{APIRef("Device Memory API")}}{{securecontext_header}}{{non-standard_header}}

Die schreibgeschützte Eigenschaft **`deviceMemory`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Größe des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um {{Glossary("fingerprinting", "Fingerprinting")}} zu erschweren. Dazu wird die tatsächliche Speichergröße auf die nächstgelegene Zweierpotenz gerundet und das Ergebnis anschließend durch 1024 geteilt. Danach wird der Wert auf einen unteren und einen oberen Grenzwert beschränkt, um die Privatsphäre der Besitzer von Geräten mit besonders wenig oder besonders viel Speicher zu schützen. Diese Grenzwerte können sich im Laufe der Zeit ändern (siehe [Tabelle zur Browser-Kompatibilität](#browser-kompatibilität)).

## Wert

Eine Gleitkommazahl, die auf einen Zweierpotenzwert angenähert und auf implementierungsspezifische Grenzwerte beschränkt wird.

Wenn ein Browser beispielsweise keine Werte unter `2` oder über `32` meldet, ist der Wert einer der folgenden: `2`, `4`, `8`, `16`, `32`.

## Beispiele

```js
const memory = navigator.deviceMemory;
console.log(`This device approximately ${memory}GiB of RAM.`);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- HTTP-Header {{HTTPHeader("Sec-CH-Device-Memory")}}
