---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `namespace-uri` gibt eine Zeichenkette zurück, die den Namespace-URI des ersten Knotens in einer gegebenen Knotensatz darstellt.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namespace-URI des ersten Knotens in diesem Knotensatz wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette, die den URI des Namespaces darstellt, in dem sich der gegebene Knoten befindet.

## Beschreibung

- Wenn der gegebene Knoten keinen festgelegten Namespace hat, wird die zurückgegebene Zeichenkette eine leere Zeichenkette sein.
- Für andere Knoten als Element- und Attributknoten wird die zurückgegebene Zeichenkette immer eine leere Zeichenkette sein.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
