---
title: str:concat()
slug: Web/EXSLT/str/concat
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`str:concat()` gibt einen String zurück, der alle Zeichenkettenwerte in einem Knoten-Set zusammengefügt enthält.

## Syntax

```plain
str:concat(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen Knoten-Zeichenkettenwerte zu einem einzigen String zusammengefügt werden sollten.

### Rückgabewert

Ein String, dessen Wert alle zusammengefügten Zeichenkettenwerte der Knoten im `nodeSet` enthält. Wenn `nodeSet` leer ist, wird ein leerer String zurückgegeben.

## Spezifikationen

[EXSLT - STR:CONCAT](https://exslt.github.io/str/functions/concat/index.html)
