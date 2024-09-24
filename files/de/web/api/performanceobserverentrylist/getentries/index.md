---
title: "PerformanceObserverEntryList: getEntries()-Methode"
short-title: getEntries()
slug: Web/API/PerformanceObserverEntryList/getEntries
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`getEntries()`**-Methode der {{domxref("PerformanceObserverEntryList")}}-Schnittstelle gibt eine Liste explizit beobachteter {{domxref("PerformanceEntry","Performanceeinträge",'', 'true')}}-Objekte zurück. Die Mitglieder der Liste werden durch die Menge von {{domxref("PerformanceEntry.entryType","Eintragstypen",'', 'true')}} bestimmt, die im Aufruf der {{domxref("PerformanceObserver.observe","observe()")}}-Methode angegeben sind. Die Liste ist in der Rückruffunktion des Beobachters verfügbar (als erster Parameter im Rückruf).

## Syntax

```js-nolint
getEntries()
```

### Rückgabewert

Eine Liste von explizit beobachteten {{domxref("PerformanceEntry")}}-Objekten. Die Elemente befinden sich in chronologischer Reihenfolge basierend auf der {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge. Wenn keine Objekte gefunden werden, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden `getEntries()`, {{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}} und {{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}}.

```js
const observer = new PerformanceObserver((list, obs) => {
  // Alle Einträge protokollieren
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Einträge mit dem Namen "debugging" und dem Typ "measure" protokollieren
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Einträge mit dem Typ "mark" protokollieren
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
});

// Anmeldung für verschiedene Performance-Ereignistypen
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
