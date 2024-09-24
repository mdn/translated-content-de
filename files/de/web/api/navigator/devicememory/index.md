---
title: "Navigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

Die schreibgeschützte **`deviceMemory`**-Eigenschaft der {{domxref("Navigator")}}-Schnittstelle gibt die ungefähre Menge des Gerätespeichers in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um {{glossary("fingerprinting")}} zu reduzieren. Er wird angenähert, indem er auf die nächstniedrigere Zweierpotenz abgerundet und dann durch 1024 geteilt wird. Anschließend wird der Wert auf bestimmte Unter- und Obergrenzen beschränkt, um die Privatsphäre der Besitzer von Geräten mit sehr wenig oder sehr viel Speicher zu schützen.

## Wert

Eine Gleitkommazahl; einer von `0.25`, `0.5`, `1`, `2`, `4`, `8`.

## Beispiele

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
