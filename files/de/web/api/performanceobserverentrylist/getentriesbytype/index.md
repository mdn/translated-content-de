---
title: "PerformanceObserverEntryList: getEntriesByType() Methode"
short-title: getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`getEntriesByType()`** Methode der [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList) gibt eine Liste von explizit _beobachteten_ [Performance-Entry](/de/docs/Web/API/PerformanceEntry)-Objekten für einen gegebenen [Performance-Entry-Typ](/de/docs/Web/API/PerformanceEntry/entryType) zurück. Die Mitglieder der Liste werden durch die Menge der in dem Aufruf der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode angegebenen [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType) bestimmt. Die Liste steht in der Rückruffunktion des Beobachters zur Verfügung (als erster Parameter im Rückruf).

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameter

- `type`
  - : Der Typ von Entry, der abgerufen werden soll, z. B. `"mark"`. Die gültigen Entry-Typen sind in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgeführt.

### Rückgabewert

Eine Liste von explizit _beobachteten_ [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `type` haben. Die Einträge sind in chronologischer Reihenfolge basierend auf den [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge. Wenn keine Objekte mit dem angegebenen `type` vorhanden sind oder kein Argument angegeben wird, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden [`getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries), [`getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName) und `getEntriesByType()`.

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
