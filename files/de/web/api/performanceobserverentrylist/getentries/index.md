---
title: "PerformanceObserverEntryList: getEntries() Methode"
short-title: getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`getEntries()`**-Methode des [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)-Interfaces gibt eine Liste von explizit beobachteten [Performance-Eintrag](/de/docs/Web/API/PerformanceEntry) Objekten zurück. Die Mitglieder der Liste werden durch den Satz von [Eintragstypen](/de/docs/Web/API/PerformanceEntry/entryType) bestimmt, der im Aufruf der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode angegeben wurde. Die Liste ist in der Callback-Funktion des Beobachters verfügbar (als erster Parameter im Callback).

## Syntax

```js-nolint
getEntries()
```

### Rückgabewert

Eine Liste von explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten. Die Einträge sind in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge. Wenn keine Objekte gefunden werden, wird eine leere Liste zurückgegeben.

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
