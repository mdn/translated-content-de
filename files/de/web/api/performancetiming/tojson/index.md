---
title: "PerformanceTiming: toJSON() Methode"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) als veraltet markiert. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete **`toJSON()`**-Methode der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle ist ein {{Glossary("Serialization", "Serializer")}}; sie gibt eine JSON-Darstellung des [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekts darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
