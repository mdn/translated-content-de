---
title: local-name
slug: Web/XML/XPath/Reference/Functions/local-name
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `local-name` gibt einen String zurück, der den lokalen Namen des ersten Knotens in einer gegebenen Knotenmenge darstellt.

## Syntax

```plain
local-name( [node-set] )
```

### Parameter

- `node-set` (optional)
  - : Der lokale Name des ersten Knotens in dieser Knotenmenge wird zurückgegeben. Wenn dieses Argument weggelassen wird, wird der aktuelle Kontextknoten verwendet.

### Rückgabewert

Ein String.

## Beschreibung

- Der lokale Name ist der lokale Teil eines [expanded-name](https://www.w3.org/TR/xpath-10/#dt-expanded-name).

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-local-name)

## Gecko-Unterstützung

Unterstützt.
