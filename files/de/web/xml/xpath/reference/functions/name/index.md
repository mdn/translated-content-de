---
title: name
slug: Web/XML/XPath/Reference/Functions/name
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `name` gibt einen String zurück, der den QName des ersten Knotens in einem gegebenen Knoten-Set darstellt.

## Syntax

```plain
name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der QName des ersten Knotens in diesem Knoten-Set wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den QName eines Knotens darstellt.

## Beschreibung

- Der [QName](https://www.w3.org/TR/xml-names/#NT-QName) ist der qualifizierte Name des Knotens, einschließlich seines Namespace-Präfixes und seines lokalen Namens.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
