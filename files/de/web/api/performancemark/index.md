---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: d678295b8c67d19354bca1db406af1b6bc8cf1c6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMark`** ist eine Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"mark"`.

Einträge dieses Typs werden normalerweise durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt. Dadurch wird der Performance-Zeitleiste des Browsers ein _benannter_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (die _Markierung_) hinzugefügt. Um eine Performance-Markierung zu erstellen, die nicht zur Performance-Zeitleiste des Browsers hinzugefügt wird, verwenden Sie den Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)
  - : Erstellt ein neues `PerformanceMark`-Objekt, das nicht zur Performance-Zeitleiste des Browsers hinzugefügt wird.

## Instanzeigenschaften

- [`PerformanceMark.detail`](/de/docs/Web/API/PerformanceMark/detail) {{ReadOnlyInline}}
  - : Enthält beliebige Metadaten zur Messung.

Diese Schnittstelle erweitert die folgenden Eigenschaften von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry), indem sie sie wie folgt näher bestimmt oder einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"mark"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, den die Markierung bei ihrer Erstellung durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erhalten hat.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) für den Zeitpunkt zurück, zu dem [`performance.mark()`](/de/docs/Web/API/Performance/mark) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück. (Eine Markierung hat keine _Dauer_.)

## Instanzmethoden

Diese Schnittstelle hat keine Methoden.

## Beispiel

Ein Beispiel finden Sie unter [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

Chrome DevTools verwendet `performance.mark()` und insbesondere eine strukturierte `detail`-Eigenschaft als Teil seiner Erweiterbarkeits-API. Damit werden diese Daten in benutzerdefinierten Spuren von Performance-Traces angezeigt. Weitere Informationen und Beispiele finden Sie im Beispiel auf der Seite [Performance: Methode mark()](/de/docs/Web/API/Performance/mark) und in der [Dokumentation zur Erweiterbarkeits-API von Chrome](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Überblick)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
