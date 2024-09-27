---
title: "PerformanceNavigation: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceNavigation/toJSON
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}} {{deprecated_header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist in der [Navigation Timing Level 2 Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)
> Schnittstelle.

Die **`toJSON()`**-Methode der [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Schnittstelle ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation)-Objekts ist.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
