---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}} {{AvailableInWorkers}}

**`PerformanceMark`** ist eine Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"mark"`.

Einträge dieses Typs werden typischerweise durch Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (das _Mark_) zur Leistungszeitleiste des Browsers hinzuzufügen. Um ein Leistungsmark zu erstellen, das nicht zur Leistungszeitleiste des Browsers hinzugefügt wird, verwenden Sie den Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)
  - : Erstellt ein neues `PerformanceMark`-Objekt, das nicht zur Leistungszeitleiste des Browsers hinzugefügt wird.

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert/einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"mark"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der dem Mark zugewiesen wurde, als es durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als [`performance.mark()`](/de/docs/Web/API/Performance/mark) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück. (Ein Mark hat keine _Dauer_.)

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceMark.detail`](/de/docs/Web/API/PerformanceMark/detail) {{ReadOnlyInline}}
  - : Gibt beliebige Metadaten zurück, die bei der Erstellung im Mark enthalten waren.

## Instanz-Methoden

Diese Schnittstelle hat keine Methoden.

## Beispiel

Siehe das Beispiel unter [Benutzung der User Timing API](/de/docs/Web/API/Performance_API/User_timing).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [User Timing (Übersicht)](/de/docs/Web/API/Performance_API/User_timing)
- [Benutzung der User Timing API](/de/docs/Web/API/Performance_API/User_timing)
