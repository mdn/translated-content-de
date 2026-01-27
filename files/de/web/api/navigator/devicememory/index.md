---
title: "Navigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

Die schreibgeschützte Eigenschaft **`deviceMemory`** der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.

Der gemeldete Wert ist absichtlich ungenau, um {{Glossary("fingerprinting", "Fingerabdrücke")}} zu erschweren. Der Wert wird geschätzt, indem der tatsächliche Speicher auf die nächste Zweierpotenz gerundet und dann durch 1024 geteilt wird. Anschließend wird der Wert innerhalb unterer und oberer Grenzen festgelegt, um die Privatsphäre von Besitzern von Geräten mit sehr geringem oder hohem Speicher zu schützen. Diese Grenzen können sich im Laufe der Zeit ändern (siehe [Browser-Kompatibilitätstabelle](#browser-kompatibilität)).

## Wert

Eine Gleitkommazahl, die auf einen Wert einer Zweierpotenz gerundet ist, innerhalb von implementierungsdefinierten Grenzen fixiert.

Beispielsweise, wenn ein Browser keine Werte unter `2` oder über `32` meldet, dann ist der Wert einer der folgenden: `2`, `4`, `8`, `16`, `32`.

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

- {{HTTPHeader("Sec-CH-Device-Memory")}} HTTP-Header
