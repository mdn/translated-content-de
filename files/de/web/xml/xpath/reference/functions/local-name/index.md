---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `local-name` gibt eine Zeichenkette zurück, die den lokalen Namen des ersten Knotens in einer gegebenen Knotenmenge darstellt.

## Syntax

```plain
local-name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der lokale Name des ersten Knotens in dieser Knotenmenge wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Eine Zeichenkette.

## Beschreibung

- Der lokale Name ist der lokale Teil eines [expanded-name](https://www.w3.org/TR/xpath/#dt-expanded-name).

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
