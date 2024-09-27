---
title: "PerformanceObserverEntryList: getEntriesByType() Methode"
short-title: getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`getEntriesByType()`** Methode der [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList) gibt eine Liste von explizit _beobachteten_ [Performance-Entry](/de/docs/Web/API/PerformanceEntry)-Objekten für einen gegebenen [Performance-Entry-Typ](/de/docs/Web/API/PerformanceEntry/entryType) zurück. Die Mitglieder der Liste werden durch die Menge von [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType) bestimmt, die beim Aufruf der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) Methode angegeben wurde. Die Liste ist in der Callback-Funktion des Observers verfügbar (als erstes Parameter im Callback).

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameter

- `type`
  - : Der Typ des Eintrags, der abgerufen werden soll, wie beispielsweise `"mark"`. Die gültigen Entry-Typen sind in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgelistet.

### Rückgabewert

Eine Liste von explizit _beobachteten_ [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `type` haben. Die Elemente werden in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge dargestellt. Wenn keine Objekte den angegebenen `type` haben oder kein Argument bereitgestellt wird, wird eine leere Liste zurückgegeben.

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
