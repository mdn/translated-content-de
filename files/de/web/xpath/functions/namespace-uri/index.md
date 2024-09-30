---
title: namespace-uri
slug: Web/XPath/Functions/namespace-uri
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `namespace-uri` gibt einen String zurück, der den Namensraum-URI des ersten Knotens in einer gegebenen Knotenmenge repräsentiert.

## Syntax

```plain
namespace-uri( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der Namensraum-URI des ersten Knotens in dieser Knotenmenge wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String, der den URI des Namensraums repräsentiert, in dem sich der gegebene Knoten befindet.

## Beschreibung

- Wenn der gegebene Knoten keinen spezifischen Namensraum hat, wird ein leerer String zurückgegeben.
- Für Knoten, die keine Element- oder Attributknoten sind, wird immer ein leerer String zurückgegeben.

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
