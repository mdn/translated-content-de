---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: 5143045a1106f2e415985dec50f11d3cf5d1d4f9
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMark`** ist eine Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"mark"`.

Einträge dieses Typs werden typischerweise durch Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (die _Markierung_) zur Leistungszeitachse des Browsers hinzuzufügen. Um eine Leistungsmarkierung zu erstellen, die nicht zur Leistungszeitachse des Browsers hinzugefügt wird, verwenden Sie den Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)
  - : Erstellt ein neues `PerformanceMark`-Objekt, das nicht zur Leistungszeitachse des Browsers hinzugefügt wird.

## Eigenschaften der Instanz

- [`PerformanceMark.detail`](/de/docs/Web/API/PerformanceMark/detail)
  - : Enthält beliebige Metadaten über die Messung.

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert/einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"mark"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der der Markierung bei der Erstellung durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als [`performance.mark()`](/de/docs/Web/API/Performance/mark) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück. (Eine Markierung hat keine _Dauer_.)

## Methoden der Instanz

Diese Schnittstelle hat keine Methoden.

## Beispiel

Sehen Sie das Beispiel in [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

Chrome DevTools verwendet `performance.mark()` und insbesondere eine strukturierte `detail`-Eigenschaft als Teil seiner erweiterbaren API, die diese in benutzerdefinierten Spuren in Leistungstraces darstellt. Siehe das Beispiel auf der Seite [Performance: mark() Methode](/de/docs/Web/API/Performance/mark) und die [Chrome-Erweiterbarkeits-API-Dokumentation](https://developer.chrome.com/docs/devtools/performance/extension#inject_your_data_with_the_user_timings_api) für weitere Informationen und Beispiele.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Benutzer-Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Verwendung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
