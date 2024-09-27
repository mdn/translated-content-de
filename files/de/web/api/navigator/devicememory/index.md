---
title: "Navigator: deviceMemory-Eigenschaft"
short-title: deviceMemory
slug: Web/API/Navigator/deviceMemory
l10n:
  sourceCommit: ca577adc00ddc882765c131739ad2ed25edd2285
---

{{APIRef("Device Memory API")}}{{securecontext_header}}

Die schreibgeschützte **`deviceMemory`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt die ungefähre Menge an Gerätespeicher in Gigabyte zurück.

Der gemeldete Wert ist ungenau, um [Fingerprinting](/de/docs/Glossary/fingerprinting) zu reduzieren. Er wird durch Abrunden auf die nächste Zweierpotenz und anschließende Division dieser Zahl durch 1024 angenähert. Der Wert wird dann innerhalb unterer und oberer Grenzen eingeklemmt, um die Privatsphäre von Besitzern von Geräten mit sehr geringem oder hohem Speicher zu schützen.

## Wert

Eine Gleitkommazahl; eine der folgenden: `0.25`, `0.5`, `1`, `2`, `4`, `8`.

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
