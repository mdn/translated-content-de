---
title: "Leistung: Methode setResourceTimingBufferSize()"
short-title: setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}

Die Methode **`setResourceTimingBufferSize()`** legt die gewünschte Größe des Resource Timing Puffers des Browsers fest, der die `"resource"` Performance-Einträge speichert.

Die Spezifikation erfordert, dass der Resource Timing Puffer anfangs 250 oder größer ist.

Um den Performance-Resource-Datenpuffer des Browsers zu löschen, verwenden Sie die Methode [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Um benachrichtigt zu werden, wenn der Resource Timing Puffer des Browsers voll ist, hören Sie auf das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)-Ereignis.

## Syntax

```js-nolint
setResourceTimingBufferSize(maxSize)
```

### Parameter

- `maxSize`
  - : Eine `number`, die die maximale Anzahl von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten darstellt, die der Browser in seinem Performance-Eintragspuffer halten soll.

### Rückgabewert

Kein ({{jsxref("undefined")}}).

## Beispiele

### Einstellen der Größe des Resource Timing Puffers

Folgender Aufruf erlaubt 500 `"resource"` Performance-Einträge in der Performance-Zeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Wenn Sie die Puffergröße auf eine Zahl kleiner als die Anzahl der aktuellen Einträge im Puffer setzen, werden keine Einträge entfernt. Um den Puffer stattdessen zu löschen, rufen Sie [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings) auf.

```js
performance.getEntriesByType("resource").length; // 20
performance.setResourceTimingBufferSize(10);
performance.getEntriesByType("resource").length; // 20

performance.clearResourceTimings();
performance.getEntriesByType("resource").length; // 0
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings)
- [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)
