---
title: "Performance: memory-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 8ab0f2fde2a9c1c7e547884abedf3848f8d7dda5
---

{{APIRef("Performance API")}}{{AvailableInWorkers}}{{Deprecated_Header}}{{Non-standard_header}}

Die nicht-standardisierte und veraltete `performance.memory`-Eigenschaft gibt die Größe des JavaScript-Heaps zurück, was hilfreich sein kann, um den Speicherbedarf von Websites zu messen und zu verringern.

Beachten Sie, dass die Informationen, die diese API bietet, unzuverlässig sind, da sie möglicherweise die tatsächliche Speicherausnutzung überschätzt, wenn Webseiten denselben Heap teilen, oder die tatsächliche Speicherausnutzung unterschätzt, wenn Webseiten Worker und/oder Cross-Site-Iframes verwenden, die in getrennten Heaps zugewiesen sind. Es ist nicht standardisiert, was genau mit "Heap" gemeint ist. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die darauf abzielt, `performance.memory` zu ersetzen, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite verwendeten Speicher abzuschätzen.

## Wert

Die schreibgeschützte `performance.memory`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:

- `jsHeapSizeLimit`
  - : Die maximale Heap-Größe in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe in Bytes.
- `usedJSHeapSize`
  - : Das aktuell aktive Segment des JS-Heaps in Bytes.

## Beispiele

### Ermitteln der JavaScript-Heap-Größen

Durch Aufrufen von `performance.memory` wird ein Objekt wie dieses zurückgegeben:

```js
{
  totalJSHeapSize: 39973671,
  usedJSHeapSize: 39127515,
  jsHeapSizeLimit: 4294705152
}
```

## Spezifikationen

Keine.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory)
