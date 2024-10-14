---
title: "Performance: getEntriesByName()-Methode"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die **`getEntriesByName()`**-Methode gibt ein Array von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten zurück, die sich derzeit in der Performance-Zeitleiste mit dem angegebenen _Namen_ und _Typ_ befinden.

Wenn Sie an Performance-Einträgen bestimmter Typen interessiert sind, sehen Sie sich [`getEntriesByType()`](/de/docs/Web/API/Performance/getEntriesByType) an. Für alle Performance-Einträge siehe [`getEntries()`](/de/docs/Web/API/Performance/getEntries).

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste vorhanden sind.
> Um Benachrichtigungen über Einträge zu erhalten, sobald sie verfügbar werden, verwenden Sie einen [`PerformanceObserver`](/de/docs/Web/API/PerformanceObserver).

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn möglicherweise Einträge für diese Typen existieren:

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
  - : Der Typ der abzurufenden Einträge, wie z. B. `"mark"`. Die gültigen Eintragstypen sind
    in [`PerformanceEntry.entryType`](/de/docs/Web/API/PerformanceEntry/entryType) aufgelistet.

### Rückgabewert

Ein {{jsxref("Array")}} von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten, die den angegebenen `name` und `type` haben.
Die Elemente werden in chronologischer Reihenfolge basierend auf den [`startTime`](/de/docs/Web/API/PerformanceEntry/startTime) der Einträge angeordnet sein. Wenn keine Objekte den
angegebenen Kriterien entsprechen, wird ein leeres Array zurückgegeben.

## Beispiele

### Protokollierung von Performance-Markern

Das folgende Beispiel protokolliert alle [`PerformanceMark`](/de/docs/Web/API/PerformanceMark)-Objekte, die den Namen `"debug-mark"` haben.

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
