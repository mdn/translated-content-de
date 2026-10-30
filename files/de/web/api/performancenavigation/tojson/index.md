---
title: "PerformanceNavigation: Methode toJSON()"
short-title: toJSON()
slug: Web/API/PerformanceNavigation/toJSON
l10n:
  sourceCommit: 2f3bc982aa82fe341afb61f09f8fa1599d319c6c
---

{{APIRef("Performance API")}}

> [!WARNING]
> Diese Schnittstelle ist in der [Navigation Timing Level 2-Spezifikation](https://w3c.github.io/navigation-timing/#obsolete) als veraltet eingestuft. Verwenden Sie stattdessen die Schnittstelle [`PerformanceNavigationTiming`](/de/docs/Web/API/PerformanceNavigationTiming).

Die Methode **`toJSON()`** der Schnittstelle [`PerformanceNavigation`](/de/docs/Web/API/PerformanceNavigation) gibt ein JSON-serialisierbares einfaches Objekt zurück, das das `PerformanceNavigation`-Objekt repräsentiert.

Die Methode wird von {{jsxref("JSON.stringify()")}} automatisch aufgerufen, wenn bei der {{Glossary("JSON", "JSON")}}-Serialisierung ein `PerformanceNavigation`-Objekt angetroffen wird.

## Syntax

```js-nolint
toJSON()
```

### Parameter

Keine.

### Rückgabewert

Ein JSON-serialisierbares einfaches Objekt mit den folgenden Eigenschaften:

- [`type`](/de/docs/Web/API/PerformanceNavigation/type)
- [`redirectCount`](/de/docs/Web/API/PerformanceNavigation/redirectCount)

Der Wert jeder Eigenschaft wird unverändert übernommen.

## Beispiele

### toJSON() direkt aufrufen

Wenn `toJSON()` direkt für `performance.navigation` aufgerufen wird, gibt die Methode ein einfaches Objekt zurück. Dessen Eigenschaften haben dieselben Werte wie die entsprechenden Eigenschaften des ursprünglichen Objekts.

```js
const json = performance.navigation.toJSON();
console.log(json); // A plain object
console.log(typeof json); // "object"
console.log(json.type); // Same value as performance.navigation.type
```

### In einen JSON-String serialisieren

In diesem Beispiel wird das `PerformanceNavigation`-Objekt mit {{jsxref("JSON.stringify()")}} serialisiert. Dabei wird die Methode `toJSON()` automatisch aufgerufen.

```js
console.log(JSON.stringify(performance.navigation));
```

Dadurch würde ein JSON-String wie der folgende ausgegeben (zur besseren Lesbarkeit formatiert):

```json
{
  "type": 0,
  "redirectCount": 0
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{jsxref("JSON")}}
