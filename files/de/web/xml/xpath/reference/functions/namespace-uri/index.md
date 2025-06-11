---
title: namespace-uri
slug: Web/XML/XPath/Reference/Functions/namespace-uri
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `namespace-uri` gibt einen String zurück, der den Namensraum-URI des ersten Knotens in einer gegebenen Knotenmenge darstellt.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namensraum-URI des ersten Knotens in dieser Knotenmenge wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den URI des Namensraums darstellt, in dem sich der gegebene Knoten befindet.

## Beschreibung

- Wenn der angegebene Knoten keinen festgelegten Namensraum hat, wird ein leerer String zurückgegeben.
- Für andere Knoten als Element- und Attributknoten wird immer ein leerer String zurückgegeben.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
