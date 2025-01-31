---
title: math:min()
slug: Web/EXSLT/math/min
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:min()` gibt den kleinsten Wert eines Node-Sets zurück.

Um den minimalen Wert des Node-Sets zu berechnen, wird das Node-Set in aufsteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XSLT/Reference/Element/sort) und dem Datentyp `number` erfolgen würde. Der minimale Wert ist dann der erste Knoten in der sortierten Liste, in eine Zahl umgewandelt.

## Syntax

```plain
math:min(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Node-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem niedrigsten Wert als Zeichenkette darstellt.

## Spezifikationen

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
