---
title: math:min()
slug: Web/EXSLT/math/min
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:min()` gibt den Minimalwert eines Node-Sets zurück.

Um den Minimalwert des Node-Sets zu berechnen, wird das Node-Set in aufsteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XSLT/Element/sort) mit einem Datentyp `number` geschehen würde. Der Minimalwert ist dann der erste Knoten in der sortierten Liste, als Zahl konvertiert.

## Syntax

```plain
math:min(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das den numerischen Wert des Knotens mit dem niedrigsten Wert als Zeichenfolge darstellt.

## Spezifikationen

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
