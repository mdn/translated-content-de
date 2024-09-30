---
title: "PerformanceObserverEntryList: getEntriesByName()-Methode"
short-title: getEntriesByName()
slug: Web/API/PerformanceObserverEntryList/getEntriesByName
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die **`getEntriesByName()`**-Methode der [`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)-Schnittstelle gibt eine Liste von explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten für einen gegebenen [`name`](/de/docs/Web/API/PerformanceEntry/name) und [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) zurück. Die Mitglieder der Liste werden durch die in dem Aufruf der [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode spezifizierten [Entry-Typen](/de/docs/Web/API/PerformanceEntry/entryType) bestimmt. Die Liste ist in der Callback-Funktion des Observers verfügbar (als erster Parameter im Callback).

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Ein String, der den Namen des abzurufenden Eintrags darstellt.
- `type` {{optional_inline}}
  - : Ein String, der den Typ des abzurufenden Eintrags darstellt, wie z. B. `"mark"`. Die gültigen Entry-Typen sind in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgeführt.

### Rückgabewert

Eine Liste von explizit _beobachteten_ [Performance-Entry](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `name` und `type` haben. Wenn das `type`-Argument nicht spezifiziert ist, wird nur der `name` verwendet, um die zurückzugebenden Einträge zu bestimmen. Die Elemente werden in chronologischer Reihenfolge basierend auf den [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge angeordnet. Wenn keine Objekte die angegebenen Kriterien erfüllen, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden [`getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries), `getEntriesByName()`, und [`getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType).

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
