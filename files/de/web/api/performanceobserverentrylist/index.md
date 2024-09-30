---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Performance API")}}

Das **`PerformanceObserverEntryList`**-Interface ist eine Liste von [Performance-Ereignissen](/de/docs/Web/API/PerformanceEntry), die explizit über die Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) beobachtet wurden.

## Instanzmethoden

- [`PerformanceObserverEntryList.getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück.
- [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte des angegebenen Eintragstyps zurück.
- [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte basierend auf dem angegebenen Namen und Eintragstyp zurück.

## Beispiel

### Verwendung von PerformanceObserverEntryList

Im folgenden Beispiel ist `list` das `PerformanceObserverEntryList`-Objekt. Die Methode [`getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries) wird aufgerufen, um alle explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte abzurufen, die in diesem Fall "measure" und "mark" sind.

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
