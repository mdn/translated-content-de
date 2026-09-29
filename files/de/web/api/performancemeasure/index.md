---
title: PerformanceMeasure
slug: Web/API/PerformanceMeasure
l10n:
  sourceCommit: 5b8d7c22883325e4abffcce235520c4a8b840bf3
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMeasure`** ist ein _abstraktes_ Interface für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"measure"`. Einträge dieses Typs werden durch Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) erstellt. Dadurch wird ein _benanntes_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (das _Measure_) zwischen zwei _Marks_ zur _Performance-Timeline_ des Browsers hinzugefügt.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`PerformanceMeasure.detail`](/de/docs/Web/API/PerformanceMeasure/detail) {{ReadOnlyInline}}
  - : Enthält beliebige Metadaten über das Measure.

Dieses Interface erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem es sie wie folgt konkretisiert oder einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"measure"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der dem Measure beim Erstellen durch einen Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt einen [`timestamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der dem Measure beim Aufruf von [`performance.measure()`](/de/docs/Web/API/Performance/measure) zugewiesen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt einen [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, der die Dauer des Measures angibt (in der Regel der Zeitstempel des End-Marks abzüglich des Zeitstempels des Start-Marks).

## Instanzmethoden

Dieses Interface hat keine Methoden.

## Beispiel

Ein Beispiel finden Sie unter [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

Chrome DevTools verwendet `performance.measure()` und insbesondere eine strukturierte `detail`-Eigenschaft als Teil seiner Erweiterbarkeits-API. Damit werden diese Daten in benutzerdefinierten Tracks von Performance-Traces angezeigt. Weitere Informationen und Beispiele finden Sie im Beispiel auf der Seite [Performance: Methode measure()](/de/docs/Web/API/Performance/measure) und in der [Dokumentation zur Erweiterbarkeits-API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Überblick)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
