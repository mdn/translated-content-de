---
title: str:concat()
slug: Web/EXSLT/str/concat
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`str:concat()` gibt eine Zeichenfolge zurück, die alle Zeichenfolgenwerte in einem Knoten-Set miteinander verkettet enthält.

## Syntax

```plain
str:concat(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen Knoten-Stringwerte zu einer einzigen Zeichenfolge verkettet werden sollen.

### Rückgabewert

Eine Zeichenfolge, deren Wert alle Zeichenfolgenwerte der Knoten in `nodeSet` sind, die miteinander verkettet wurden. Wenn `nodeSet` leer ist, wird eine leere Zeichenfolge zurückgegeben.

## Spezifikationen

[EXSLT - STR:CONCAT](https://exslt.github.io/str/functions/concat/index.html)
