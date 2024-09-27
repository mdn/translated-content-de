---
title: "Performance: getEntriesByType() Methode"
short-title: getEntriesByType()
slug: Web/API/Performance/getEntriesByType
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`getEntriesByType()`** Methode gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die derzeit in der Performance-Timeline für einen bestimmten _Typ_ vorhanden sind.

Wenn Sie an Leistungs-Einträgen mit einem bestimmten Namen interessiert sind, siehe [`getEntriesByName()`](/de/docs/Web/API/Performance/getEntriesByName). Für alle Leistungs-Einträge, siehe [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Leistungs-Einträge; Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Timeline vorhanden sind.
> Um Benachrichtigungen über Einträge zu erhalten, sobald sie verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn Einträge für diese Typen vorhanden sein könnten:

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
  - : Der Typ des abzurufenden Eintrags, z.B. `"mark"`. Die gültigen Eintragstypen sind in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgelistet. Die unterstützten `entryTypes` können mit der statischen Eigenschaft [`PerformanceObserver.supportedEntryTypes`](/de/docs/Web/API/PerformanceObserver/supportedEntryTypes_static) abgerufen werden.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `type` haben. Die Elemente werden in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge sein. Wenn keine Objekte den angegebenen `type` haben, oder kein Argument angegeben wird, wird ein leeres Array zurückgegeben.

## Beispiele

### Protokollierung von Ressourceneinträgen

Das folgende Beispiel protokolliert alle Einträge mit dem Typ `"resource"`.

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
