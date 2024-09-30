---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceObserver`**-Interface wird verwendet, um Ereignisse der Leistungsüberwachung zu beobachten und über neue [Leistungseinträge](/de/docs/Web/API/PerformanceEntry) benachrichtigt zu werden, wenn sie in der _Leistungszeitleiste_ des Browsers aufgezeichnet werden.

## Konstruktor

- [`PerformanceObserver()`](/de/docs/Web/API/PerformanceObserver/PerformanceObserver)
  - : Erstellt und gibt ein neues `PerformanceObserver`-Objekt zurück.

## Statische Eigenschaften

- [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) {{ReadOnlyInline}}
  - : Gibt ein Array der vom Benutzeragenten unterstützten [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType)-Werte zurück.

## Instanzmethoden

- [`PerformanceObserver.observe()`](/de/docs/Web/API/PerformanceObserver/observe)
  - : Legt die zu beobachtenden Eintragstypen fest. Die Callback-Funktion des Performance Observers wird aufgerufen, wenn ein Leistungseintrag für einen der angegebenen `entryTypes` aufgezeichnet wird.
- [`PerformanceObserver.disconnect()`](/de/docs/Web/API/PerformanceObserver/disconnect)
  - : Stoppt den Performance Observer Callback, damit er keine Leistungseinträge mehr empfängt.
- [`PerformanceObserver.takeRecords()`](/de/docs/Web/API/PerformanceObserver/takeRecords)
  - : Gibt die aktuelle Liste der im Performance Observer gespeicherten Leistungseinträge zurück und leert sie.

## Beispiele

### Einen PerformanceObserver erstellen

Das folgende Beispiel erstellt einen `PerformanceObserver`, der "mark"- ([`PerformanceMark`](/de/docs/Web/API/PerformanceMark)) und "measure"- ([`PerformanceMeasure`](/de/docs/Web/API/PerformanceMeasure)) Ereignisse überwacht. Der `perfObserver`-Callback liefert eine `list` ([`PerformanceObserverEntryList`](/de/docs/Web/API/PerformanceObserverEntryList)), die es Ihnen ermöglicht, beobachtete Leistungseinträge abzurufen.

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
