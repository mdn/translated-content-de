---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMeasure`** ist eine _abstrakte_ Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieses Typs werden erstellt, indem [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wird, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (das _Maß_) zwischen zwei _Markierungen_ zur _Leistungszeitachse_ des Browsers hinzuzufügen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Diese Schnittstelle definiert:

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail)
  - : Enthält beliebige Metadaten über das Maß.

Darüber hinaus erweitert sie die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert/einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType)
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name)
  - : Gibt den Namen zurück, der dem Maß bei der Erstellung durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime)
  - : Gibt einen [`Zeitstempel`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der dem Maß gegeben wurde, als [`performance.measure()`](/de/docs/Web/API/Performance/measure) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration)
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des Maßes ist (typischerweise der Endmarkierungs-Zeitstempel des Maßes minus seines Startmarkierungs-Zeitstempels).

## Instanz-Methoden

Diese Schnittstelle hat keine Methoden.

## Beispiel

Siehe das Beispiel in [Using the User Timing API](/de/docs/Web/API/Performance_API/User_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Using the User Timing API](/de/docs/Web/API/Performance_API/User_timing)
