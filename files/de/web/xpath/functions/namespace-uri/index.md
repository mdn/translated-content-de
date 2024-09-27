---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `namespace-uri` gibt einen String zurück, der den Namespace-URI des ersten Knotens in einem gegebenen Knotensatz darstellt.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namespace-URI des ersten Knotens in diesem Knotensatz wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den URI des Namespace darstellt, in dem sich der gegebene Knoten befindet.

## Beschreibung

- Wenn der gegebene Knoten keinen spezifischen Namespace hat, wird ein leerer String zurückgegeben.
- Für andere Knoten als Element- und Attributknoten wird immer ein leerer String zurückgegeben.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
