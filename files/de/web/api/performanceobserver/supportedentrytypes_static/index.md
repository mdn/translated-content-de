---
title: "PerformanceObserver: 'supportedEntryTypes' statische Eigenschaft"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
l10n:
  sourceCommit: a0f6bf6f7d148f368f6965255058df1ed1f43839
---

{{APIRef("Performance API")}}

Die statische, schreibgeschützte Eigenschaft **`supportedEntryTypes`** des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Interfaces gibt ein Array der vom User-Agent unterstützten [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte zurück.

Da die Liste der unterstützten Einträge je nach Browser variiert und sich entwickelt, ermöglicht es diese Eigenschaft Webentwicklern zu überprüfen, welche verfügbar sind.

## Wert

Ein Array von [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werten.

## Beispiele

### Verwenden der Konsole zum Überprüfen unterstützter Typen

Um herauszufinden, welche [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte ein Browser unterstützt, geben Sie <kbd>PerformanceObserver.supportedEntryTypes</kbd> in die Konsole ein. Dies gibt ein Array der unterstützten Werte zurück.

```js
PerformanceObserver.supportedEntryTypes;

// returns ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "longtask", "mark", "measure", "navigation", "paint", "resource"] in Chrome 89
```

### Überprüfen von nicht unterstützten Typen

Die folgende Funktion prüft die Unterstützung eines Arrays möglicher `entryType`s. Die nicht unterstützten Typen werden in der Konsole protokolliert, jedoch könnten diese Informationen auch in client-seitigen Analysen protokolliert werden, um anzuzeigen, dass der jeweilige Typ nicht beobachtet werden konnte.

```js
function detectSupport(entryTypes) {
  for (const entryType of entryTypes) {
    if (!PerformanceObserver.supportedEntryTypes.includes(entryType)) {
      console.log(entryType);
    }
  }
}

detectSupport(["resource", "mark", "first-input", "largest-contentful-paint"]);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
