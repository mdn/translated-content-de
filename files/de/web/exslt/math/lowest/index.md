---
title: math:lowest()
slug: Web/EXSLT/math/lowest
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:lowest()` gibt den Knoten im angegebenen Knoten-Set mit dem niedrigsten Wert zurück (wobei der niedrigste Wert unter Verwendung von [`math:min()`](/de/docs/Web/EXSLT/math/min) berechnet wird).

Ein Knoten hat diesen Minimalwert, wenn das Umwandeln seines Zeichenfolgenwerts in eine Zahl dem Minimalwert entspricht.

## Syntax

```plain
math:lowest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das aus Kopien der Knoten besteht, die von [`math:min()`](/de/docs/Web/EXSLT/math/min) zurückgegeben werden.

## Spezifikationen

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
