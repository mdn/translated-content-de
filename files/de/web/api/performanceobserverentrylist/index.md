---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceObserverEntryList`**-Interface ist eine Liste von [Performance-Ereignissen](/de/docs/Web/API/PerformanceEntry), die explizit über die [`observe()`](/de/docs/Web/API/PerformanceObserver/observe)-Methode beobachtet wurden.

## Instanzmethoden

- [`PerformanceObserverEntryList.getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück.
- [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte des angegebenen Entry-Typs zurück.
- [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte basierend auf dem angegebenen Namen und Entry-Typ zurück.

## Beispiel

### Verwendung von PerformanceObserverEntryList

Im folgenden Beispiel ist `list` das `PerformanceObserverEntryList`-Objekt. Die [`getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries)-Methode wird aufgerufen, um alle explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zu erhalten, die in diesem Fall "measure" und "mark" sind.

```js
function perfObserver(list, observer) {
  list.getEntries().forEach((entry) => {
    if (entry.entryType === "mark") {
      console.log(`${entry.name}'s startTime: ${entry.startTime}`);
    }
    if (entry.entryType === "measure") {
      console.log(`${entry.name}'s duration: ${entry.duration}`);
    }
  });
}
const observer = new PerformanceObserver(perfObserver);
observer.observe({ entryTypes: ["measure", "mark"] });
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
