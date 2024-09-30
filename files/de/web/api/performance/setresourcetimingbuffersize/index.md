---
title: "Performance: setResourceTimingBufferSize()-Methode"
short-title: setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Performance API")}}

Die **`setResourceTimingBufferSize()`**-Methode legt die gewünschte Größe des Ressourcentimingspeichers des Browsers fest, in dem die Performance-Einträge vom Typ `"resource"` gespeichert werden.

Die Spezifikation verlangt, dass der Ressourcentimingspeicher zunächst 250 oder größer ist.

Um den Speicher für Performance-Ressourcendaten des Browsers zu löschen, verwenden Sie die Methode
[`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings).

Um benachrichtigt zu werden, wenn der Ressourcentimingspeicher des Browsers voll ist, verfolgen Sie das [`resourcetimingbufferfull`](/de/docs/Web/API/Performance/resourcetimingbufferfull_event)-Ereignis.

## Syntax

```js-nolint
setResourceTimingBufferSize(maxSize)
```

### Parameter

- `maxSize`
  - : Eine `number`, die die maximale Anzahl von [`PerformanceEntry`](/de/docs/Web/API/PerformanceEntry)-Objekten darstellt, die der Browser im Performance-Eintragspeicher halten soll.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

### Festlegen einer Ressourcentimingspeichergröße

Der folgende Aufruf erlaubt 500 `"resource"`-Performance-Einträge in der Performance-Zeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Wenn Sie die Größe des Speichers auf eine Zahl setzen, die kleiner ist als die Anzahl der aktuellen Einträge im Speicher, werden keine Einträge entfernt. Um den Speicher zu leeren, rufen Sie stattdessen [`Performance.clearResourceTimings()`](/de/docs/Web/API/Performance/clearResourceTimings) auf.

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
