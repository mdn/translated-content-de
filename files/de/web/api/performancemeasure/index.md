---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMeasure`** ist eine _abstrakte_ Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieses Typs werden erstellt, indem [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wird, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (das _Measure_) zwischen zwei _Marks_ zur _Performance-Zeitleiste_ des Browsers hinzuzufügen.

{{InheritanceDiagram}}

## Instanzeigenschaften

Diese Schnittstelle definiert:

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail)
  - : Enthält beliebige Metadaten über das Measure.

Zusätzlich erweitert es die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem es die Eigenschaften qualifiziert/einschränkt wie folgt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt den Namen zurück, der dem Measure gegeben wurde, als es über einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der dem Measure gegeben wurde, als [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des Measures ist (typischerweise der End-Marken-Zeitstempel des Measures minus seines Start-Marken-Zeitstempels).

## Instanzmethoden

Diese Schnittstelle hat keine Methoden.

## Beispiel

Siehe das Beispiel in [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
