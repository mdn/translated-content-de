---
title: PerformanceMark
slug: Web/API/PerformanceMark
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

**`PerformanceMark`** ist eine Schnittstelle für [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekte mit einem [`entryType`](/de/docs/Web/API/PerformanceEntry/entryType) von `"mark"`.

Einträge dieses Typs werden normalerweise durch den Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) erstellt, um einen _benannten_ [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) (die _Markierung_) zur Leistungszeitleiste des Browsers hinzuzufügen. Um eine Leistungsmarkierung zu erstellen, die nicht zur Leistungszeitleiste des Browsers hinzugefügt wird, verwenden Sie den Konstruktor.

{{InheritanceDiagram}}

## Konstruktor

- [`PerformanceMark()`](/de/docs/Web/API/PerformanceMark/PerformanceMark)
  - : Erstellt ein neues `PerformanceMark`-Objekt, das nicht zur Leistungszeitleiste des Browsers hinzugefügt wird.

## Instanz-Eigenschaften

Diese Schnittstelle erweitert die folgenden [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Eigenschaften, indem sie die Eigenschaften wie folgt qualifiziert/einschränkt:

- [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) {{ReadOnlyInline}}
  - : Gibt `"mark"` zurück.
- [`PerformanceEntry.name`](/de/docs/Web/API/PerformanceEntry/name) {{ReadOnlyInline}}
  - : Gibt den Namen zurück, der der Markierung bei der Erstellung durch einen Aufruf von [`performance.mark()`](/de/docs/Web/API/Performance/mark) gegeben wurde.
- [`PerformanceEntry.startTime`](/de/docs/Web/API/PerformanceEntry/startTime) {{ReadOnlyInline}}
  - : Gibt den [`DOMHighResTimeStamp`](/de/docs/Web/API/DOMHighResTimeStamp) zurück, als [`performance.mark()`](/de/docs/Web/API/Performance/mark) aufgerufen wurde.
- [`PerformanceEntry.duration`](/de/docs/Web/API/PerformanceEntry/duration) {{ReadOnlyInline}}
  - : Gibt `0` zurück. (Eine Markierung hat keine _Dauer_.)

Diese Schnittstelle unterstützt auch die folgenden Eigenschaften:

- [`PerformanceMark.detail`](/de/docs/Web/API/PerformanceMark/detail) {{ReadOnlyInline}}
  - : Gibt beliebige Metadaten zurück, die bei der Konstruktion in die Markierung aufgenommen wurden.

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
