---
title: "PerformanceTiming: toJSON()-Methode"
short-title: toJSON()
slug: Web/API/PerformanceTiming/toJSON
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}{{deprecated_header}}

> [!WARNING]
> Diese Schnittstelle dieser Eigenschaft ist im [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) veraltet. Bitte verwenden Sie stattdessen die {{domxref("PerformanceNavigationTiming")}} Schnittstelle.

Die veraltete **`toJSON()`**-Methode der {{domxref("PerformanceTiming")}}-Schnittstelle ist ein {{Glossary("Serialization","serializer")}}; sie gibt eine JSON-Darstellung des {{domxref("PerformanceTiming")}}-Objekts zurück.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("JSON")}}-Objekt, das die Serialisierung des {{domxref("PerformanceTiming")}}-Objekts darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
