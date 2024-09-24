---
title: PerformanceObserverEntryList
slug: Web/API/PerformanceObserverEntryList
l10n:
  sourceCommit: c244d3b2cb6c17e6ba8692e3faec393afd9988ca
---

{{APIRef("Performance API")}}

Die **`PerformanceObserverEntryList`**-Schnittstelle ist eine Liste von {{domxref("PerformanceEntry","Performance-Ereignissen", '', 'true')}}, die explizit über die {{domxref("PerformanceObserver.observe","observe()")}}-Methode beobachtet wurden.

## Instanzmethoden

- {{domxref("PerformanceObserverEntryList.getEntries","PerformanceObserverEntryList.getEntries()")}}
  - : Gibt eine Liste aller explizit beobachteten {{domxref("PerformanceEntry")}}-Objekte zurück.
- {{domxref("PerformanceObserverEntryList.getEntriesByType","PerformanceObserverEntryList.getEntriesByType()")}}
  - : Gibt eine Liste aller explizit beobachteten {{domxref("PerformanceEntry")}}-Objekte des angegebenen Entry-Typs zurück.
- {{domxref("PerformanceObserverEntryList.getEntriesByName","PerformanceObserverEntryList.getEntriesByName()")}}
  - : Gibt eine Liste aller explizit beobachteten {{domxref("PerformanceEntry")}}-Objekte basierend auf dem angegebenen Namen und dem Entry-Typ zurück.

## Beispiel

### Verwendung von PerformanceObserverEntryList

Im folgenden Beispiel ist `list` das `PerformanceObserverEntryList`-Objekt. Die Methode {{domxref("PerformanceObserverEntryList.getEntries","getEntries()")}} wird aufgerufen, um alle explizit beobachteten {{domxref("PerformanceEntry")}}-Objekte zu erhalten, die in diesem Fall "measure" und "mark" sind.

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

## Kompatibilität der Browser

{{Compat}}
