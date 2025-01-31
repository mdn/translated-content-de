---
title: name
slug: Web/XPath/Functions/name
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `name`-Funktion gibt einen String zurück, der den QName des ersten Knotens in einem gegebenen Knoten-Set repräsentiert.

## Syntax

```plain
name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der QName des ersten Knotens in diesem Knoten-Set wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontext-Knoten verwendet.

### Rückgabewert

Ein String, der den QName eines Knotens darstellt.

## Beschreibung

- Der [QName](https://www.w3.org/TR/REC-xml-names/#NT-QName) ist der qualifizierte Name des Knotens, einschließlich seines Namespace-Präfixes und seines lokalen Namens.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
