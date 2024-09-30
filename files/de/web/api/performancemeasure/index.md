---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMeasure`** ist eine _abstrakte_ Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieser Art werden durch Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (die _Messung_) zwischen zwei _Marks_ zur _Leistungstimeline_ des Browsers hinzuzufügen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle definiert:

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail)
  - : Enthält beliebige Metadaten über die Messung.

Zusätzlich erweitert es die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem die Eigenschaften folgendermaßen qualifiziert/eingeschränkt werden:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt den Namen zurück, der der Messung beim Erstellen durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Messung beim Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) gegeben wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer der Messung ist (typischerweise der Zeitstempel der Endmarkierung der Messung minus dem Zeitstempel der Startmarkierung).

## Instanz-Methoden

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
