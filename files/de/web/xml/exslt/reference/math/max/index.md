---
title: math:max()
slug: Web/XML/EXSLT/Reference/math/max
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:max()` gibt den maximalen Wert einer Knotenmenge zurück.

Um den maximalen Wert der Knotenmenge zu berechnen, wird die Menge in absteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XML/XSLT/Reference/Element/sort) und einem Datentyp `number` der Fall wäre. Der maximale Wert ist dann der erste Knoten in der sortierten Liste, umgewandelt in eine Zahl.

## Syntax

```plain
math:max(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knotenmenge, deren höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem höchsten Wert als String darstellt.

## Spezifikationen

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
