---
title: "PerformanceNavigation: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceNavigation/toJSON
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}} {{deprecated_header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}}
> Schnittstelle.

Die **`toJSON()`**-Methode der {{domxref("PerformanceNavigation")}}-Schnittstelle ist ein {{Glossary("Serialization","serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("PerformanceNavigation")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("PerformanceNavigation")}}-Objekts darstellt.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
