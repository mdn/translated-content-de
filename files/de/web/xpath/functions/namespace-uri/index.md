---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `namespace-uri`-Funktion gibt einen String zurück, der den Namespace-URI des ersten Knotens in einem angegebenen Knoten-Set darstellt.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namespace-URI des ersten Knotens in diesem Knoten-Set wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den URI des Namespaces darstellt, in dem sich der angegebene Knoten befindet.

## Beschreibung

- Wenn der angegebene Knoten keinen spezifizierten Namespace hat, ist der zurückgegebene String ein leerer String.
- Für andere Knoten als Element- und Attribut-Knoten ist der zurückgegebene String immer ein leerer String.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
