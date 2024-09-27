---
title: "Performance: memory-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

Die nicht standardisierte und veraltete `performance.memory`-Eigenschaft gibt die Größe des JavaScript-Heap zurück, was hilfreich sein kann, um den Speicherbedarf von Websites zu messen und zu reduzieren.

Beachten Sie, dass die Informationen, die diese API bereitstellt, unzuverlässig sind. Sie könnten die tatsächliche Speichernutzung überschätzen, wenn Webseiten den gleichen Heap teilen, oder die tatsächliche Speichernutzung unterschätzen, wenn Webseiten Worker und/oder Cross-Site-Iframes verwenden, die in separaten Heaps zugewiesen sind. Es ist nicht standardisiert, was genau "Heap" bedeutet. Die API ist nur in auf Chromium basierenden Browsern verfügbar.

Eine neue API, die `performance.memory` ersetzen soll, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite verwendeten Speicher zu schätzen.

## Wert

Die schreibgeschützte `performance.memory`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heap, in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe, in Bytes.
- `usedJSHeapSize`
  - : Das derzeit aktive Segment des JS-Heap, in Bytes.

## Beispiele

### Ermitteln der JavaScript-Heap-Größen

Ein Aufruf von `performance.memory` gibt ein Objekt wie dieses zurück:

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
