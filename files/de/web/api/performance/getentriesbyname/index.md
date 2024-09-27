---
title: "Performance: getEntriesByName() Methode"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`getEntriesByName()`** Methode gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die sich derzeit in der Performance-Zeitleiste mit dem angegebenen _name_ und _type_ befinden.

Wenn Sie an Performance-Einträgen bestimmter Typen interessiert sind, siehe [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType). Für alle Performance-Einträge siehe [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste vorhanden sind.
> Um Benachrichtigungen über Einträge bei ihrem Eintreffen zu erhalten, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragsarten werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn Einträge dieser Arten existieren:

- `"element"` ([`PerformanceElementTiming`](/de/docs/Web/API/PerformanceElementTiming))
- `"event"` ([`PerformanceEventTiming`](/de/docs/Web/API/PerformanceEventTiming))
- `"largest-contentful-paint"` ([`LargestContentfulPaint`](/de/docs/Web/API/LargestContentfulPaint))
- `"layout-shift"` ([`LayoutShift`](/de/docs/Web/API/LayoutShift))
- `"longtask"` ([`PerformanceLongTaskTiming`](/de/docs/Web/API/PerformanceLongTaskTiming))

Um Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver) verwenden.

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Der Name der Einträge, die abgerufen werden sollen.
- `type` {{optional_inline}}
  - : Der Typ der Einträge, die abgerufen werden sollen, wie z. B. `"mark"`. Die gültigen Eintragsarten sind
    in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgeführt.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `name` und `type` haben.
Die Elemente werden in chronologischer Reihenfolge basierend auf dem [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge sein. Wenn keine Objekte die
angegebenen Kriterien erfüllen, wird ein leeres Array zurückgegeben.

## Beispiele

### Performance-Marker protokollieren

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
