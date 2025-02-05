---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `namespace-uri` gibt einen String zurück, der die Namespace-URI des ersten Knotens in einer angegebenen Knotensammlung repräsentiert.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Die Namespace-URI des ersten Knotens in dieser Knotensammlung wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der die URI des Namespaces repräsentiert, in dem sich der angegebene Knoten befindet.

## Beschreibung

- Wenn der angegebene Knoten keinen spezifizierten Namespace hat, wird ein leerer String zurückgegeben.
- Für Knoten, die keine Element- oder Attributknoten sind, wird immer ein leerer String zurückgegeben.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
