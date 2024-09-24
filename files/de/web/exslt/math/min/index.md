---
title: math:min()
slug: Web/EXSLT/math/min
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:min()` gibt den minimalen Wert eines Knoten-Sets zurück.

Um den minimalen Wert des Knoten-Sets zu berechnen, wird das Knoten-Set in aufsteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XSLT/Element/sort) mit einem Datentyp von `number` geschehen würde. Der minimale Wert ist dann der erste Knoten in der sortierten Liste, in eine Zahl umgewandelt.

## Syntax

```plain
math:min(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Resultatbaumfragment, das den numerischen Wert des Knotens mit dem niedrigsten Wert als Zeichenkette darstellt.

## Spezifikationen

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
