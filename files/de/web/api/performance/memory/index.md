---
title: "Performance: Speichereigenschaft"
short-title: Speicher
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

Die nicht standardisierte und veraltete `performance.memory`-Eigenschaft gibt die Größe des JavaScript-Heaps zurück, was hilfreich sein kann, um den Speicherbedarf von Websites zu messen und zu reduzieren.

Beachten Sie, dass die Informationen, die diese API liefert, unzuverlässig sind, da sie den tatsächlichen Speicherverbrauch überschätzen könnte, wenn Webseiten denselben Heap teilen, oder den tatsächlichen Speicherverbrauch unterschätzen könnte, wenn Webseiten Worker und/oder Cross-Site-Iframes verwenden, die in separaten Heaps zugewiesen sind. Es ist nicht standardisiert, was genau "Heap" bedeutet. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die `performance.memory` ersetzen soll, ist {{domxref("Performance.measureUserAgentSpecificMemory()")}}. Sie versucht, den von einer Webseite verwendeten Speicher zu schätzen.

## Wert

Die schreibgeschützte `performance.memory`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heaps, in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe, in Bytes.
- `usedJSHeapSize`
  - : Das derzeit aktive Segment des JS-Heaps, in Bytes.

## Beispiele

### JavaScript-Heap-Größen abrufen

Der Aufruf von `performance.memory` gibt ein Objekt wie dieses zurück:

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

- {{domxref("Performance.measureUserAgentSpecificMemory()")}}
