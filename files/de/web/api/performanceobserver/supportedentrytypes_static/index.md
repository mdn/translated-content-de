---
title: "PerformanceObserver: static Eigenschaft supportedEntryTypes"
short-title: supportedEntryTypes
slug: Web/API/PerformanceObserver/supportedEntryTypes_static
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die statische, schreibgeschützte Eigenschaft **`supportedEntryTypes`** des [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) Interfaces gibt ein Array der vom User-Agent unterstützten [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) Werte zurück.

Da die Liste der unterstützten Einträge je nach Browser variiert und sich weiterentwickelt, ermöglicht diese Eigenschaft Webentwicklern zu überprüfen, welche Einträge verfügbar sind.

## Wert

Ein Array von [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) Werten.

## Beispiele

### Verwendung der Konsole zur Überprüfung unterstützter Typen

Um herauszufinden, welche [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) Werte ein Browser unterstützt, geben Sie <kbd>PerformanceObserver.supportedEntryTypes</kbd> in die Konsole ein. Dies wird ein Array der unterstützten Werte zurückgeben.

```js
PerformanceObserver.supportedEntryTypes;

// returns ["element", "event", "first-input", "largest-contentful-paint", "layout-shift", "long-animation-frame", "longtask", "mark", "measure", "navigation", "paint", "resource", "visibility-state"] in the main thread in Chrome 129
// returns ["mark", "measure", "resource"] in a worker thread in Chrome 129
```

### Überprüfung nicht unterstützter Typen

Die folgende Funktion prüft die Unterstützung eines Arrays möglicher Eintragstypen. Die nicht unterstützten Typen werden in der Konsole protokolliert, jedoch könnte diese Information auch an clientseitige Analysen übermittelt werden, um anzuzeigen, dass der besondere Typ nicht beobachtet werden konnte.

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
