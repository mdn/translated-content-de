---
title: math:max()
slug: Web/EXSLT/math/max
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:max()` gibt den maximalen Wert eines Knoten-Sets zurück.

Um den maximalen Wert des Knoten-Sets zu berechnen, wird das Knoten-Set in absteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XSLT/Reference/Element/sort) mit einem Datentyp von `number` der Fall wäre. Der maximale Wert ist dann der erste Knoten in der sortierten Liste, der in eine Zahl umgewandelt wird.

## Syntax

```plain
math:max(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem höchsten Wert als Zeichenkette darstellt.

## Spezifikationen

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
