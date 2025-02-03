---
title: namespace-uri
slug: Web/XPath/Reference/Functions/namespace-uri
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `namespace-uri` gibt einen String zurück, der den Namespace-URI des ersten Knotens in einem angegebenen Knoten-Set darstellt.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namespace-URI des ersten Knotens in diesem Knoten-Set wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den URI des Namespaces darstellt, in dem sich der gegebene Knoten befindet.

## Beschreibung

- Wenn der gegebene Knoten keinen spezifizierten Namespace hat, wird ein leerer String zurückgegeben.
- Für Knoten, die keine Element- oder Attributknoten sind, wird immer ein leerer String zurückgegeben.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
