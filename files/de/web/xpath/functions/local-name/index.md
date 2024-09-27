---
title: local-name
slug: Web/XPath/Functions/local-name
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `local-name` gibt einen String zurück, der den lokalen Namen des ersten Knotens in einer gegebenen Knotenmengen darstellt.

## Syntax

```plain
local-name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der lokale Name des ersten Knotens in dieser Knotenmengen wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String.

## Beschreibung

- Der lokale Name ist der lokale Teil eines [expanded-name](https://www.w3.org/TR/xpath/#dt-expanded-name).

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
