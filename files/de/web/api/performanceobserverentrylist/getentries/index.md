---
title: "PerformanceObserverEntryList: getEntries() Methode"
short-title: getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
l10n:
  sourceCommit: ffff697fbd3004c3da50323ef4d868b3ad47e4d0
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`getEntries()`**-Methode der [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)-Schnittstelle gibt eine Liste von explizit beobachteten [Performance-Entry](/de/docs/Web/API/PerformanceEntry)-Objekten zurück. Die Mitglieder der Liste werden durch die Menge der in dem Aufruf der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode angegebenen [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType) bestimmt. Die Liste ist in der Callback-Funktion des Beobachters verfügbar (als erster Parameter im Callback).

## Syntax

```js-nolint
getEntries()
```

### Parameter

Keine.

### Rückgabewert

Eine Liste von explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten. Die Einträge sind in chronologischer Reihenfolge anhand der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge. Wenn keine Objekte gefunden werden, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden `getEntries()`, [`getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName) und [`getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType).

```js
const observer = new PerformanceObserver((list, obs) => {
  // Log all entries
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Log entries named "debugging" with type "measure"
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Log entries with type "mark"
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
});

// Subscribe to various performance event types
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
