---
title: "Performance: Speicher-Eigenschaft"
short-title: memory
slug: Web/API/Performance/memory
l10n:
  sourceCommit: 5fb2b1ccd1e795511f0be413118beb17c47250bf
---

{{APIRef("Performance API")}}{{Deprecated_Header}}{{Non-standard_header}}

Die nicht standardisierte und veraltete **`memory`**-Eigenschaft ist eine schreibgeschützte Eigenschaft, die die Größe des JavaScript-Heaps zurückgibt. Dies kann hilfreich sein, um den Speicherbedarf von Websites zu messen und zu reduzieren.

Beachten Sie, dass die Informationen, die diese API bereitstellt, unzuverlässig sind, da sie den tatsächlichen Speicherverbrauch überschätzen kann, wenn mehrere Webseiten denselben Heap teilen. Alternativ kann sie den tatsächlichen Speicherverbrauch unterschätzen, wenn Webseiten Workers und/oder Cross-Site-Iframes verwenden, die in separaten Heaps zugewiesen werden. Es ist nicht standardisiert, was genau mit "Heap" gemeint ist. Die API ist nur in Chromium-basierten Browsern verfügbar.

Eine neue API, die `performance.memory` ersetzen soll, ist [`Performance.measureUserAgentSpecificMemory()`](/de/docs/Web/API/Performance/measureUserAgentSpecificMemory). Sie versucht, den von einer Webseite genutzten Speicher zu schätzen.

## Wert

Gibt ein Objekt mit den folgenden Eigenschaften zurück:

- `jsHeapSizeLimit`
  - : Die maximale Größe des Heaps, in Bytes, die dem Kontext zur Verfügung steht.
- `totalJSHeapSize`
  - : Die insgesamt zugewiesene Heap-Größe, in Bytes.
- `usedJSHeapSize`
  - : Das derzeit aktive Segment des JS-Heaps, in Bytes.

## Beispiele

### Abrufen der JavaScript-Heap-Größen

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
