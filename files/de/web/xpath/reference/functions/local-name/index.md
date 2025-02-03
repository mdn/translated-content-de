---
title: local-name
slug: Web/XPath/Reference/Functions/local-name
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die Funktion `local-name` gibt einen String zurück, der den lokalen Namen des ersten Knotens in einem angegebenen Knotensatz darstellt.

## Syntax

```plain
local-name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der lokale Name des ersten Knotens in diesem Knotensatz wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String.

## Beschreibung

- Der lokale Name ist der lokale Teil eines [expanded-name](https://www.w3.org/TR/xpath/#dt-expanded-name).

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
