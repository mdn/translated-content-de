---
title: "Performance: getEntriesByName()-Methode"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`getEntriesByName()`** gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die zum Zeitpunkt des Aufrufs in der Performance-Timeline vorhanden sind und den angegebenen _Namen_ und _Typ_ haben.

Wenn Sie sich für Performance-Einträge bestimmter Typen interessieren, verwenden Sie [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Alle Performance-Einträge erhalten Sie mit [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge. Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs in der Performance-Timeline vorhanden sind.
> Um Benachrichtigungen zu erhalten, sobald Einträge verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode nicht unterstützt und daher nicht zurückgegeben, selbst wenn entsprechende Einträge vorhanden sind:

- `"container"` ([`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming))
- `"element"` ([`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming))
- `"event"` ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming))
- `"largest-contentful-paint"` ([`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint))
- `"layout-shift"` ([`LayoutShift`](/de/docs/Web/API/LayoutShift))
- `"longtask"` ([`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming))

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden.

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Der Name der abzurufenden Einträge.
- `type` {{optional_inline}}
  - : Der Typ der abzurufenden Einträge, beispielsweise `"mark"`. Die gültigen Eintragstypen sind unter [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgeführt.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten mit dem angegebenen `name` und `type`.
Die Elemente sind anhand ihres [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Werts chronologisch geordnet. Wenn keine Objekte die angegebenen Kriterien erfüllen, wird ein leeres Array zurückgegeben.

## Beispiele

### Performance-Markierungen protokollieren

Das folgende Beispiel protokolliert alle [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte mit dem Namen `"debug-mark"`.

```js
const debugMarks = performance.getEntriesByName("debug-mark", "mark");
debugMarks.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
- [`Performance.getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType)
