---
title: "PerformanceObserverEntryList: getEntriesByName() Methode"
short-title: getEntriesByName()
slug: Web/API/PerformanceObserverEntryList/getEntriesByName
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die **`getEntriesByName()`**-Methode der {{domxref("PerformanceObserverEntryList")}}-Schnittstelle gibt eine Liste explizit beobachteter {{domxref("PerformanceEntry")}}-Objekte für einen bestimmten {{domxref("PerformanceEntry.name","Namen")}} und {{domxref("PerformanceEntry.entryType","entryType")}} zurück. Die Mitglieder der Liste werden durch die Menge der {{domxref("PerformanceEntry.entryType","Eingabetypen", '', 'entry')}} bestimmt, die im Aufruf der {{domxref("PerformanceObserver.observe","observe()")}}-Methode angegeben sind. Die Liste ist in der Rückruffunktion des Observers verfügbar (als erster Parameter im Callback).

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Ein String, der den Namen des abzurufenden Eintrags darstellt.
- `type` {{optional_inline}}
  - : Ein String, der den Typ des abzurufenden Eintrags darstellt, wie z.B. `"mark"`. Die gültigen Eingangstypen sind in {{domxref("PerformanceEntry.entryType")}} aufgeführt.

### Rückgabewert

Eine Liste von explizit _beobachteten_ {{domxref("PerformanceEntry","Performance-Eintrag", '', 'true')}}-Objekten, die den angegebenen `name` und `type` haben. Wenn das `type`-Argument nicht angegeben ist, wird nur der `name` verwendet, um die zurückzugebenden Einträge zu bestimmen. Die Elemente werden in chronologischer Reihenfolge basierend auf den {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge angeordnet. Wenn keine Objekte die angegebenen Kriterien erfüllen, wird eine leere Liste zurückgegeben.

## Beispiele

### Arbeiten mit getEntries, getEntriesByName und getEntriesByType

Das folgende Beispiel zeigt den Unterschied zwischen den Methoden {{domxref("PerformanceObserverEntryList.getEntries", "getEntries()")}}, `getEntriesByName()` und {{domxref("PerformanceObserverEntryList.getEntriesByType", "getEntriesByType()")}}.

```js
const observer = new PerformanceObserver((list, obs) => {
  // Loggen Sie alle Einträge
  let perfEntries = list.getEntries();
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Loggen Sie Einträge mit dem Namen "debugging" und dem Typ "measure"
  perfEntries = list.getEntriesByName("debugging", "measure");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s duration: ${entry.duration}`);
  });

  // Loggen Sie Einträge mit dem Typ "mark"
  perfEntries = list.getEntriesByType("mark");
  perfEntries.forEach((entry) => {
    console.log(`${entry.name}'s startTime: ${entry.startTime}`);
  });
});

// Abonnieren Sie verschiedene Performance-Ereignistypen
observer.observe({
  entryTypes: ["mark", "measure", "navigation", "resource"],
});
```

## Spezifikationen

{{Specifications}}

## Kompatibilität mit Browsern

{{Compat}}
