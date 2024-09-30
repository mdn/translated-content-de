---
title: "Performance: getEntriesByName() Methode"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`getEntriesByName()`** Methode gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die derzeit in der Leistungs-Timeline mit dem angegebenen _name_ und _type_ vorhanden sind.

Wenn Sie sich für Leistungs-Einträge bestimmter Typen interessieren, siehe [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Für alle Leistungs-Einträge, siehe [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Leistungs-Einträge; Sie erhalten nur Einträge, die in der Leistungs-Timeline vorhanden sind, wenn Sie diese Methode aufrufen.
> Um Benachrichtigungen über Einträge zu erhalten, sobald sie verfügbar sind, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden auch dann nicht zurückgegeben, wenn Einträge für diese Typen existieren könnten:

- `"element"` ([`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming))
- `"event"` ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming))
- `"largest-contentful-paint"` ([`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint))
- `"layout-shift"` ([`LayoutShift`](/de/docs/Web/API/LayoutShift))
- `"longtask"` ([`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming))

Um Einträge dieser Typen zu erfassen, müssen Sie stattdessen einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden.

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Der Name der abzurufenden Einträge.
- `type` {{optional_inline}}
  - : Der Typ der abzurufenden Einträge, z.B. `"mark"`. Die gültigen Eintragstypen sind
    in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgelistet.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `name` und `type` haben.
Die Elemente werden in chronologischer Reihenfolge basierend auf der [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge sein. Wenn keine Objekte die
angegebenen Kriterien erfüllen, wird ein leeres Array zurückgegeben.

## Beispiele

### Protokollierung von Leistungsmarkern

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
