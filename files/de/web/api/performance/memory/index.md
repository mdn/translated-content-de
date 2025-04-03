---
title: "Performance: memory-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("Performance API")}}{{Deprecated_Header}}{{Non-standard_header}}

Die nicht standardisierte und veraltete **`memory`**-Schreibgeschützte Eigenschaft gibt die Größe des JavaScript-Heap zurück, was hilfreich sein kann, um den Speicherverbrauch von Websites zu messen und zu reduzieren.

Beachten Sie, dass die Informationen, die diese API bereitstellt, unzuverlässig sind, da sie den tatsächlichen Speicherverbrauch überschätzen könnte, wenn Webseiten denselben Heap teilen, oder den tatsächlichen Speicherverbrauch unterschätzen könnte, wenn Webseiten Worker und/oder cross-site iframes verwenden, die in separaten Heaps zugewiesen werden. Es ist nicht standardisiert, was "Heap" genau bedeutet. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die `performance.memory` ersetzen soll, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite verwendeten Speicher zu schätzen.

## Wert

Gibt ein Objekt mit den folgenden Eigenschaften zurück:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heaps in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe in Bytes.
- `usedJSHeapSize`
  - : Das derzeit aktive Segment des JS-Heap in Bytes.

## Beispiele

### Abrufen von JavaScript-Heap-Größen

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
