---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: 468fcd167cd6f5979b1f6c92583894a281ae886e
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMeasure`** ist eine _abstrakte_ Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieses Typs werden durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt. Dabei wird der _Performance-Zeitleiste_ des Browsers ein _benannter_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (die _Messung_) zwischen zwei _Markierungen_ hinzugefügt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail) {{ReadOnlyInline}}
  - : Enthält beliebige Metadaten zur Messung.

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem sie diese wie folgt näher bestimmt oder einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der der Messung beim Erstellen durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der der Messung beim Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) zugewiesen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer der Messung angibt (üblicherweise der Zeitstempel der Endmarkierung abzüglich des Zeitstempels der Startmarkierung).

## Instanzmethoden

Diese Schnittstelle hat keine Methoden.

## Beispiele

Siehe das Beispiel unter [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

Chrome DevTools verwendet `performance.measure()` und insbesondere eine strukturierte `detail`-Eigenschaft als Teil seiner Erweiterungs-API, um diese Daten in benutzerdefinierten Spuren von Performance-Aufzeichnungen anzuzeigen. Weitere Informationen und Beispiele finden Sie im Beispiel auf der Seite zur [Methode Performance: measure()](/de/docs/Web/API/Performance/measure) und in der [Dokumentation zur Erweiterungs-API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Überblick)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
