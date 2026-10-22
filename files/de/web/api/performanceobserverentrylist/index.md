---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`PerformanceObserverEntryList`**-Schnittstelle ist eine Liste von [Performance-Ereignissen](/de/docs/Web/API/PerformanceEntry), die explizit über die Methode [`observe()`](/de/docs/Web/API/PerformanceObserver/observe) beobachtet wurden.

## Instanzmethoden

- [`PerformanceObserverEntryList.getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte zurück.
- [`PerformanceObserverEntryList.getEntriesByType()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByType)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte des angegebenen Eintragstyps zurück.
- [`PerformanceObserverEntryList.getEntriesByName()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntriesByName)
  - : Gibt eine Liste aller explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte anhand des angegebenen Namens und Eintragstyps zurück.

## Beispiele

### PerformanceObserverEntryList verwenden

Im folgenden Beispiel ist `list` das `PerformanceObserverEntryList`-Objekt. Die Methode [`getEntries()`](/de/docs/Web/API/PerformanceObserverEntryList/getEntries) wird aufgerufen, um alle explizit beobachteten [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte abzurufen. In diesem Fall sind dies Einträge der Typen „measure“ und „mark“.

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
