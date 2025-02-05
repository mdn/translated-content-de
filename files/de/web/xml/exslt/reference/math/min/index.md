---
title: math:min()
slug: Web/XML/EXSLT/Reference/math/min
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:min()` gibt den minimalen Wert eines Node-Sets zurück.

Um den minimalen Wert des Node-Sets zu berechnen, wird das Node-Set in aufsteigender Reihenfolge sortiert, wie es mit [`xsl:sort()`](/de/docs/Web/XML/XSLT/Reference/Element/sort) und einem Datentyp von `number` erfolgen würde. Der minimale Wert ist dann der erste Knoten in der sortierten Liste, umgewandelt in eine Zahl.

## Syntax

```plain
math:min(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Node-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaum-Fragment, das den numerischen Wert des Knotens mit dem niedrigsten Wert als Zeichenfolge repräsentiert.

## Spezifikationen

[EXSLT - MATH:MIN](https://exslt.github.io/math/functions/min/index.html)
