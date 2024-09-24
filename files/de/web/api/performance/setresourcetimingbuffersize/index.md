---
title: "Performance: setResourceTimingBufferSize() Methode"
short-title: setResourceTimingBufferSize()
slug: Web/API/Performance/setResourceTimingBufferSize
l10n:
  sourceCommit: 73b2b6ee411ac094b9fc57dafac6f9c232fc20d9
---

{{APIRef("Performance API")}}

Die **`setResourceTimingBufferSize()`**-Methode legt die gewünschte Größe des Ressourcen-Timing-Puffers des Browsers fest, der die "`resource`"-Performance-Einträge speichert.

Die Spezifikation erfordert, dass der Ressourcen-Timing-Puffer zunächst mindestens 250 beträgt.

Um den Leistungsdatenpuffer des Browsers zu leeren, verwenden Sie die
{{domxref("Performance.clearResourceTimings()")}}-Methode.

Um benachrichtigt zu werden, wenn der Ressourcen-Timing-Puffer des Browsers voll ist, hören Sie auf das {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}-Ereignis.

## Syntax

```js-nolint
setResourceTimingBufferSize(maxSize)
```

### Parameter

- `maxSize`
  - : Eine `number`, die die maximale Anzahl der {{domxref("PerformanceEntry")}}-Objekte darstellt, die der Browser in seinem Performance-Eintrags-Puffer halten soll.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beispiele

### Einstellen einer Größe für den Ressourcen-Timing-Puffer

Der folgende Aufruf erlaubt 500 "`resource`"-Performance-Einträge in der Performance-Zeitleiste des Browsers.

```js
performance.setResourceTimingBufferSize(500);
```

Wenn Sie die Puffergröße auf eine Zahl setzen, die kleiner ist als die Anzahl der derzeitigen Einträge im Puffer, werden keine Einträge entfernt. Um den Puffer zu leeren, rufen Sie stattdessen {{domxref("Performance.clearResourceTimings()")}} auf.

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

- {{domxref("Performance.clearResourceTimings()")}}
- {{domxref("Performance.resourcetimingbufferfull_event", "resourcetimingbufferfull")}}
