---
title: math:max()
slug: Web/EXSLT/math/max
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:max()` gibt den Maximalwert eines Node-Sets zurück.

Um den maximalen Wert des Node-Sets zu berechnen, wird das Node-Set in absteigender Reihenfolge sortiert, wie es unter Verwendung von [`xsl:sort()`](/de/docs/Web/XSLT/Element/sort) mit einem Datentyp von `number` erfolgen würde. Der maximale Wert ist dann der erste Knoten in der sortierten Liste, umgewandelt in eine Zahl.

## Syntax

```plain
math:max(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Node-Set, dessen höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem höchsten Wert als Zeichenfolge darstellt.

## Spezifikationen

[EXSLT - MATH:MAX](https://exslt.github.io/math/functions/max/index.html)
