---
title: "Performance: Speicher-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Performance API")}}{{Non-standard_header}}

Die nicht standardisierte und veraltete **`memory`**-Eigenschaft (nur lesbar) gibt die Größe des JavaScript-Heap zurück, was hilfreich sein kann, um den Speicherverbrauch von Websites zu messen und zu reduzieren.

Beachten Sie, dass die von dieser API bereitgestellten Informationen unzuverlässig sind, da sie den tatsächlichen Speicherverbrauch überschätzen können, wenn Webseiten denselben Heap teilen, oder den tatsächlichen Speicherverbrauch unterschätzen können, wenn Webseiten Worker und/oder seitenübergreifende iFrames verwenden, die in separaten Heaps zugewiesen sind. Es ist nicht standardisiert, was genau "Heap" bedeutet. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die `performance.memory` ersetzen soll, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite verwendeten Speicher zu schätzen.

## Wert

Gibt ein Objekt mit den folgenden Eigenschaften zurück:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heap in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe in Bytes.
- `usedJSHeapSize`
  - : Der derzeit aktive Abschnitt des JS-Heap, in Bytes.

## Beispiele

### Abruf von JavaScript-Heap-Größen

Der Aufruf von `performance.memory` gibt ein Objekt wie dieses zurück:

```json
{
  "totalJSHeapSize": 39973671,
  "usedJSHeapSize": 39127515,
  "jsHeapSizeLimit": 4294705152
}
```

## Spezifikationen

Keine.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory)
