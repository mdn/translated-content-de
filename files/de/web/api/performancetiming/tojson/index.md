---
title: "PerformanceTiming: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}{{deprecated_header}}

> [!WARNING]
> Diese Eigenschaftsschnittstelle ist im [Navigation Timing Level 2 specification](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming)-Schnittstelle.

Die veraltete **`toJSON()`**-Methode der [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Schnittstelle ist ein [Serializer](/de/docs/Glossary/Serialization); sie gibt eine JSON-Darstellung des [`PerformanceTiming`](/de/docs/Web/API/PerformanceTiming)-Objekts zurück.

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
