---
title: "Performance: Methode getEntriesByType()"
short-title: getEntriesByType()
slug: Web/API/Performance/getEntriesByType
l10n:
  sourceCommit: aa8fa82a902746b0bd97839180fc2b5397088140
---

{{APIRef("Performance API")}}

Die **`getEntriesByType()`**-Methode gibt ein Array von {{domxref("PerformanceEntry")}}-Objekten zurück, die derzeit in der Performance-Timeline für einen gegebenen _Typ_ vorhanden sind.

Wenn Sie an Performance-Einträgen mit einem bestimmten Namen interessiert sind, sehen Sie sich {{domxref("Performance.getEntriesByName", "getEntriesByName()")}} an. Für alle Performance-Einträge siehe {{domxref("Performance.getEntries", "getEntries()")}}.

> [!NOTE]
> Diese Methode benachrichtigt Sie nicht über neue Performance-Einträge; Sie erhalten nur Einträge, die in der Performance-Timeline zum Zeitpunkt des Methodenaufrufs vorhanden sind.
> Um Benachrichtigungen über neue Einträge zu erhalten, verwenden Sie einen {{domxref("PerformanceObserver")}}.

Die folgenden Eintragstypen werden von dieser Methode überhaupt nicht unterstützt und werden nicht zurückgegeben, auch wenn Einträge für diese Typen existieren könnten:

- `"element"` ({{domxref("PerformanceElementTiming")}})
- `"event"` ({{domxref("PerformanceEventTiming")}})
- `"largest-contentful-paint"` ({{domxref("LargestContentfulPaint")}})
- `"layout-shift"` ({{domxref("LayoutShift")}})
- `"longtask"` ({{domxref("PerformanceLongTaskTiming")}})

Um auf Einträge dieser Typen zuzugreifen, müssen Sie stattdessen einen {{domxref("PerformanceObserver")}} verwenden.

## Syntax

```js-nolint
getEntriesByType(type)
```

### Parameter

- `type`
  - : Der abzurufende Eintragstyp, wie zum Beispiel "`mark`". Die gültigen Eintragstypen sind in {{domxref("PerformanceEntry.entryType")}} aufgelistet. Die unterstützten `entryTypes` können mit der statischen Eigenschaft {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}} abgerufen werden.

### Rückgabewert

Ein {{jsxref("Array")}} von {{domxref("PerformanceEntry")}}-Objekten, die den angegebenen `type` haben. Die Elemente werden in chronologischer Reihenfolge basierend auf den {{domxref("PerformanceEntry.startTime","startTime")}} der Einträge sein. Wenn keine Objekte den angegebenen `type` haben oder kein Argument angegeben wird, wird ein leeres Array zurückgegeben.

## Beispiele

### Protokollierung von Ressourceneinträgen

Das folgende Beispiel protokolliert alle Einträge mit dem Typ "`resource`".

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

- {{domxref("Performance.getEntries()")}}
- {{domxref("Performance.getEntriesByName()")}}
- {{domxref("PerformanceObserver.supportedEntryTypes_static", "PerformanceObserver.supportedEntryTypes")}}
