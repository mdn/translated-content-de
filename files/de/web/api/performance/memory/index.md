---
title: "Performance: memory-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{APIRef("Performance API")}} {{Deprecated_Header}}{{Non-standard_header}}

Die nicht standardisierte und veraltete `performance.memory`-Eigenschaft gibt die Größe des JavaScript-Heaps zurück, was hilfreich sein kann, um den Speicherverbrauch von Websites zu messen und zu reduzieren.

Beachten Sie, dass die Informationen, die diese API bereitstellt, unzuverlässig sind, da sie den tatsächlichen Speicherverbrauch überschätzen könnte, wenn Webseiten denselben Heap teilen, oder den tatsächlichen Speicherverbrauch unterschätzen könnte, wenn Webseiten Worker und/oder Cross-Site-Iframes verwenden, die in separaten Heaps zugewiesen werden. Es ist nicht standardisiert, was "Heap" genau bedeutet. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die darauf abzielt, `performance.memory` zu ersetzen, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite genutzten Speicher zu schätzen.

## Wert

Die schreibgeschützte `performance.memory`-Eigenschaft ist ein Objekt mit den folgenden Eigenschaften:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heaps, in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe, in Bytes.
- `usedJSHeapSize`
  - : Der derzeit aktive Abschnitt des JS-Heaps, in Bytes.

## Beispiele

### Abrufen von JavaScript-Heap-Größen

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

- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory)
