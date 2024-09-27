---
title: math:max()
slug: Web/EXSLT/math/max
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:max()` gibt den maximalen Wert einer Knotenmenge zurück.

Um den maximalen Wert der Knotenmenge zu berechnen, wird die Knotenmenge in absteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XSLT/Element/sort) unter Verwendung des Datentyps `number` der Fall wäre. Der maximale Wert ist dann der erste Knoten in der sortierten Liste, umgewandelt in eine Zahl.

## Syntax

```plain
math:max(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knotenmenge, deren höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem höchsten Wert als Zeichenfolge darstellt.

## Spezifikationen

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
