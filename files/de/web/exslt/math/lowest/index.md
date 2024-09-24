---
title: math:lowest()
slug: Web/EXSLT/math/lowest
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:lowest()` gibt den Knoten in der angegebenen Knotenmenge zurück, der den niedrigsten Wert hat (wobei der niedrigste Wert unter Verwendung von [`math:min()`](/de/docs/Web/EXSLT/math/min) berechnet wird).

Ein Knoten hat diesen minimalen Wert, wenn das Umwandeln seines Zeichenfolgenwerts in eine Zahl dem minimalen Wert entspricht.

## Syntax

```plain
math:lowest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knotenmenge, deren niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das aus Kopien der von [`math:min()`](/de/docs/Web/EXSLT/math/min) zurückgegebenen Knoten besteht.

## Spezifikationen

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
