---
title: "PerformanceObserver: static property supportedEntryTypes"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
l10n:
  sourceCommit: 90fa4c2688482c0f9edb0e6e667e640c99c97768
---

{{APIRef("Performance API")}}

Die statische, schreibgeschützte Eigenschaft **`supportedEntryTypes`** der [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver)-Schnittstelle gibt ein Array der vom Benutzeragent unterstützten [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte zurück.

Da die Liste der unterstützten Einträge je nach Browser variiert und sich entwickelt, können Webentwickler mit dieser Eigenschaft prüfen, welche verfügbar sind.

## Wert

Ein Array von [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werten.

## Beispiele

### Verwenden der Konsole, um unterstützte Typen zu überprüfen

Um herauszufinden, welche [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte ein Browser unterstützt, geben Sie <kbd>PerformanceObserver.supportedEntryTypes</kbd> in die Konsole ein. Dies gibt ein Array der unterstützten Werte zurück.

```js
PerformanceObserver.supportedEntryTypes;

// returns ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "long-animation-frame", "longtask", "mark", "measure", "navigation", "paint", "resource", "visibility-state"] in the main thread in Chrome 129
// returns ["mark", "measure", "resource"] in a worker thread in Chrome 129
```

### Überprüfen nicht unterstützter Typen

Die folgende Funktion prüft die Unterstützung eines Arrays möglicher Entry-Typen. Die nicht unterstützten Typen werden in die Konsole protokolliert, diese Information könnte jedoch auch auf clientseitige Analysen protokolliert werden, um anzuzeigen, dass der jeweilige Typ nicht beobachtet werden konnte.

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
