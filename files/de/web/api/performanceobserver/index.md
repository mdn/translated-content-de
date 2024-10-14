---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Das **`PerformanceObserver`**-Interface wird verwendet, um Leistungsmessevorgänge zu beobachten und über neue [Performance-Einträge](/de/docs/Web/API/PerformanceEntry) benachrichtigt zu werden, sobald diese in der _Performance-Zeitleiste_ des Browsers aufgezeichnet werden.

## Konstruktor

- [`PerformanceObserver()`](/de/docs/Web/API/PerformanceObserver/PerformanceObserver)
  - : Erstellt und gibt ein neues `PerformanceObserver`-Objekt zurück.

## Statische Eigenschaften

- [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) {{ReadOnlyInline}}
  - : Gibt ein Array der vom Benutzeragenten unterstützten [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte zurück.

## Instanzmethoden

- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)
  - : Gibt die zu beobachtenden Eintragstypen an. Die Callback-Funktion des Leistungsbeobachters wird aufgerufen, wenn ein Leistungs-Eintrag für einen der angegebenen `entryTypes` aufgezeichnet wird.
- [`PerformanceObserver.disconnect()`](/de/docs/Web/API/PerformanceObserver/disconnect)
  - : Beendet die Leistung des Beobachters, um Leistungs-Einträge zu empfangen.
- [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords)
  - : Gibt die aktuelle Liste der im Leistungsbeobachter gespeicherten Leistungs-Einträge zurück und leert diese.

## Beispiele

### Erstellung eines PerformanceObserver

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark" ([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure" ([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignisse achtet. Der Callback `perfObserver` liefert eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)), die Ihnen ermöglicht, beobachtete Leistungs-Einträge abzurufen.

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

## Siehe auch

- [`MutationObserver`](/de/docs/Web/API/MutationObserver)
- [`ResizeObserver`](/de/docs/Web/API/ResizeObserver)
- [`IntersectionObserver`](/de/docs/Web/API/IntersectionObserver)
