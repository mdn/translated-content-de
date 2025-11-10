---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMeasure`** ist eine _abstrakte_ Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieses Typs werden erstellt, indem [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wird, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (das _Measure_) zwischen zwei _Marks_ zur _Performance-Zeitachse_ des Browsers hinzuzufügen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail)
  - : Enthält beliebige Metadaten über das Measure.

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert/beschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt den Namen zurück, der dem Measure gegeben wurde, als es über einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der dem Measure zugewiesen wurde, als [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des Measures darstellt (typischerweise der End-Mark-Zeitstempel minus dem Start-Mark-Zeitstempel des Measures).

## Instanz-Methoden

Diese Schnittstelle hat keine Methoden.

## Beispiel

Siehe das Beispiel in [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

Chrome DevTools verwendet `performance.measure()` und insbesondere eine strukturierte `detail`-Eigenschaft als Teil seiner Erweiterbarkeits-API, die diese in benutzerdefinierten Spuren in Performance-Traces anzeigt. Siehe das Beispiel auf der Seite [Performance: measure() Methode](/de/docs/Web/API/Performance/measure) und die [Dokumentation zur Erweiterbarkeits-API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api) für weitere Informationen und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
