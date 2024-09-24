---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: e4c0939929e1b3e1fa3fd3da82b827fca3ed4c79
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMeasure`** ist ein _abstraktes_ Interface für {{domxref("PerformanceEntry")}}-Objekte mit einem {{domxref("PerformanceEntry.entryType","entryType")}} von "`measure`". Einträge dieses Typs werden erstellt, indem {{domxref("Performance.measure","performance.measure()")}} aufgerufen wird, um einen _benannten_ {{domxref("DOMHighResTimeStamp")}} (die _Messung_) zwischen zwei _Markierungen_ zur _Performance-Timeline_ des Browsers hinzuzufügen.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

Dieses Interface definiert:

- {{domxref("PerformanceMeasure.detail")}}
  - : Enthält beliebige Metadaten über die Messung.

Darüber hinaus erweitert es die folgenden {{domxref("PerformanceEntry")}}-Eigenschaften, indem es die Eigenschaften wie folgt qualifiziert/einschränkt:

- {{domxref("PerformanceEntry.entryType")}}
  - : Gibt "`measure`" zurück.
- {{domxref("PerformanceEntry.name")}}
  - : Gibt den Namen zurück, der der Messung gegeben wurde, als sie durch einen Aufruf von {{domxref("Performance.measure()","performance.measure()")}} erstellt wurde.
- {{domxref("PerformanceEntry.startTime")}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp","Zeitstempel")}} zurück, der der Messung gegeben wurde, als {{domxref("Performance.measure()","performance.measure()")}} aufgerufen wurde.
- {{domxref("PerformanceEntry.duration")}}
  - : Gibt einen {{domxref("DOMHighResTimeStamp")}} zurück, der die Dauer der Messung ist (typischerweise der Zeitstempel der Endmarkierung der Messung minus des Zeitstempels der Startmarkierung).

## Instanz-Methoden

Dieses Interface hat keine Methoden.

## Beispiel

Siehe das Beispiel unter [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
