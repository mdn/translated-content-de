---
title: str:concat()
slug: Web/EXSLT/str/concat
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`str:concat()` gibt einen String zurück, der alle Zeichenfolgenwerte in einer Knotenmengen zusammengefügt enthält.

## Syntax

```plain
str:concat(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knotenmengen, deren Knotenzeichenfolgenwerte zu einem String verkettet werden sollen.

### Rückgabewert

Ein String, dessen Wert alle Zeichenfolgenwerte der Knoten in `nodeSet` zusammengefügt enthält. Wenn `nodeSet` leer ist, wird ein leerer String zurückgegeben.

## Spezifikationen

[EXSLT - STR:CONCAT](https://exslt.github.io/str/functions/concat/index.html)
