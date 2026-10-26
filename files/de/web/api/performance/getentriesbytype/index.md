---
title: "Performance: Methode getEntriesByType()"
short-title: getEntriesByType()
slug: Web/API/Performance/getEntriesByType
l10n:
  sourceCommit: 4d218f9fdff30e8e01a26402b9f9615c9527ccf6
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`getEntriesByType()`** gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die sich zum Zeitpunkt des Aufrufs für einen bestimmten _Typ_ in der Performance-Timeline befinden.

Wenn Sie Performance-Einträge mit einem bestimmten Namen suchen, lesen Sie die Dokumentation zu [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName). Informationen zu allen Performance-Einträgen finden Sie unter [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge. Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs in der Performance-Timeline vorhanden sind.
> Um Benachrichtigungen zu erhalten, sobald Einträge verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode nicht unterstützt und daher auch dann nicht zurückgegeben, wenn entsprechende Einträge vorhanden sind:

- `"container"` ([`PerformanceContainerTiming`](/de/docs/Web/API/PerformanceContainerTiming))
- `"element"` ([`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming))
- `"event"` ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming))
- `"largest-contentful-paint"` ([`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint))
- `"layout-shift"` ([`LayoutShift`](/de/docs/Web/API/LayoutShift))
- `"longtask"` ([`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming))

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden.

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameter

- `type`
  - : Der Typ der abzurufenden Einträge, beispielsweise `"mark"`. Die gültigen Eintragstypen sind unter [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgeführt. Die unterstützten `entryTypes` können über die statische Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) abgerufen werden.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten mit dem angegebenen `type`. Die Elemente sind anhand des [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime)-Werts der Einträge chronologisch geordnet. Wenn keine Objekte den angegebenen `type` haben oder kein Argument übergeben wird, wird ein leeres Array zurückgegeben.

## Beispiele

### Ressourceneinträge protokollieren

Das folgende Beispiel protokolliert alle Einträge des Typs `"resource"`.

```js
const resources = performance.getEntriesByType("resource");
resources.forEach((entry) => {
  console.log(`${entry.name}'s startTime: ${entry.startTime}`);
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.getEntries()`](/de/docs/Web/API/Performance/getEntries)
- [`Performance.getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName)
- [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static)
