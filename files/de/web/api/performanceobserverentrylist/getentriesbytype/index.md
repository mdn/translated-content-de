---
title: "PerformanceObserverEntryList: Methode getEntriesByType()"
short-title: getEntriesByType()
slug: Web/API/PerformanceObserverEntryList/getEntriesByType
l10n:
  sourceCommit: c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{APIRef("Performance API")}}

Die **`getEntriesByType()`**-Methode der {{domxref("PerformanceObserverEntryList")}} gibt eine Liste der explizit _beobachteten_ {{domxref("PerformanceEntry","performance entry", '', 'true')}}-Objekte für einen gegebenen {{domxref("PerformanceEntry.entryType","performance entry type", '', 'true')}} zurück. Die Mitglieder der Liste werden durch die Menge der in dem Aufruf der {{domxref("PerformanceObserver.observe","observe()")}}-Methode angegebenen {{domxref("PerformanceEntry.entryType","entry types", '', 'true')}} bestimmt. Die Liste ist in der Callback-Funktion des Observers verfügbar (als erster Parameter im Callback).

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameter

- `type`
  - : Der Typ des Eintrags, der abgerufen werden soll, wie zum Beispiel `"mark"`. Die gültigen Eintragstypen sind in {{domxref("PerformanceEntry.entryType")}} aufgelistet.

### Rückgabewert

Eine Liste der explizit _beobachteten_ {{domxref("PerformanceEntry")}}-Objekte, die den angegebenen `type` haben. Die Elemente sind in chronologischer Reihenfolge basierend auf den {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge. Wenn keine Objekte mit dem angegebenen `type` existieren oder kein Argument übergeben wird, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden {{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}, {{domxref("PerformanceObserverEntryList.getEntriesByName", "getEntriesByName()")}} und `getEntriesByType()`.

```js
const observer = new PerformanceObserver((list, obs) => {
  // Alle Einträge ausgeben
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Einträge mit dem Namen "debugging" und Typ "measure" ausgeben
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Einträge mit dem Typ "mark" ausgeben
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
});

// Auf verschiedene Arten von Performance-Events abonnieren
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
