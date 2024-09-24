---
title: "Performance: getEntriesByName()-Methode"
short-title: getEntriesByName()
slug: Web/API/Performance/getEntriesByName
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`getEntriesByName()`**-Methode gibt ein Array von {{domxref("PerformanceEntry")}}-Objekten zurück, die aktuell in der Performance-Zeitleiste mit dem angegebenen _Namen_ und _Typ_ vorhanden sind.

Wenn Sie an Performance-Einträgen bestimmter Typen interessiert sind, sehen Sie sich {{domxref("Performance.getEntriesByType", "getEntriesByType()")}} an. Für alle Performance-Einträge siehe {{domxref("Performance.getEntries", "getEntries()")}}.

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur Einträge, die zum Zeitpunkt des Aufrufs dieser Methode in der Performance-Zeitleiste vorhanden sind.
> Um Benachrichtigungen über verfügbare Einträge zu erhalten, verwenden Sie einen {{domxref("PerformanceObserver")}}.

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, selbst wenn Einträge für diese Typen existieren könnten:

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen {{domxref("PerformanceObserver")}} verwenden.

## Syntax

```js-nolint
getEntriesByName(name)
getEntriesByName(name, type)
```

### Parameter

- `name`
  - : Der Name der abzurufenden Einträge.
- `type` {{optional_inline}}
  - : Der Typ der abzurufenden Einträge, z.B. "`mark`". Die gültigen Eintragstypen sind in {{domxref("PerformanceEntry.entryType")}} aufgelistet.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("PerformanceEntry")}}-Objekten, die den angegebenen `name` und `type` haben.
Die Elemente werden in chronologischer Reihenfolge basierend auf der {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge sein. Wenn keine Objekte die angegebenen Kriterien erfüllen, wird ein leeres Array zurückgegeben.

## Beispiele

### Protokollierung von Performance-Markierungen

Das folgende Beispiel protokolliert alle {{domxref("PerformanceMark")}}-Objekte mit dem Namen "`debug-mark`".

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

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByType()")}}
