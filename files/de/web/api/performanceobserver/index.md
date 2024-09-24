---
title: PerformanceObserver
slug: Web/API/PerformanceObserver
l10n:
  sourceCommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

Das **`PerformanceObserver`** Interface wird verwendet, um Leistungsereignisse zu beobachten und über neue {{domxref("PerformanceEntry","Performance-Einträge", '', 'true')}} benachrichtigt zu werden, sobald diese in der _Performance-Zeitleiste_ des Browsers aufgezeichnet werden.

## Konstruktor

- {{domxref("PerformanceObserver.PerformanceObserver","PerformanceObserver()")}}
  - : Erstellt und gibt ein neues `PerformanceObserver`-Objekt zurück.

## Statische Eigenschaften

- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} {{ReadOnlyInline}}
  - : Gibt ein Array der vom Benutzeragenten unterstützten {{domxref("PerformanceEntry.entryType","entryType")}} Werte zurück.

## Instanzmethoden

- {{domxref("PerformanceObserver.observe","PerformanceObserver.observe()")}}
  - : Legt die Menge der zu beobachtenden Eintragsarten fest. Die Rückruffunktion des Leistungsbeobachters wird aufgerufen, wenn ein Leistungseintrag für eine der angegebenen `entryTypes` aufgezeichnet wird.
- {{domxref("PerformanceObserver.disconnect","PerformanceObserver.disconnect()")}}
  - : Stoppt den Leistungsbeobachter-Rückruf vom Empfangen von Leistungseinträgen.
- {{domxref("PerformanceObserver.takeRecords","PerformanceObserver.takeRecords()")}}
  - : Gibt die aktuelle Liste der im Leistungsbeobachter gespeicherten Leistungseinträge zurück und leert sie.

## Beispiele

### Erstellen eines PerformanceObserver

Das folgende Beispiel erstellt einen `PerformanceObserver`, der auf "mark"- ({{domxref("PerformanceMark")}}) und "measure"- ({{domxref("PerformanceMeasure")}}) Ereignisse achtet.
Der `perfObserver`-Rückruf stellt eine `list` ({{domxref("PerformanceObserverEntryList")}}) zur Verfügung, die es Ihnen ermöglicht, beobachtete Leistungseinträge abzurufen.

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

- {{domxref('MutationObserver')}}
- {{domxref('ResizeObserver')}}
- {{domxref('IntersectionObserver')}}
