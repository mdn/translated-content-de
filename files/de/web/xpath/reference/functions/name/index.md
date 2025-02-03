---
title: name
slug: Web/XPath/Reference/Functions/name
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `name` gibt einen String zurück, der den QName des ersten Knotens in einem angegebenen Knoten-Set darstellt.

## Syntax

```plain
name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der QName des ersten Knotens in diesem Knoten-Set wird zurückgegeben. Wird dieses Argument weggelassen, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den QName eines Knotens darstellt.

## Beschreibung

- Der [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) ist der qualifizierte Name des Knotens, einschließlich seines Namespace-Präfixes und seines lokalen Namens.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Unterstützung in Gecko

Unterstützt.
