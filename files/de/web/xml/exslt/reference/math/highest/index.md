---
title: math:highest()
slug: Web/XML/EXSLT/Reference/math/highest
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:highest()` gibt den Knoten in der angegebenen Node-Set mit dem höchsten Wert zurück (wobei der höchste Wert mit [`math:max()`](/de/docs/Web/XML/EXSLT/math/max) berechnet wird).

Ein Knoten hat diesen Maximalwert, wenn das Konvertieren seines String-Werts in eine Zahl dem Maximalwert entspricht.

## Syntax

```plain
math:highest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Der Node-Set, dessen höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaum-Fragment, das Kopien der durch [`math:max()`](/de/docs/Web/XML/EXSLT/math/max) zurückgegebenen Knoten enthält.

## Spezifikationen

[EXSLT - MATH:HIGHEST](https://exslt.github.io/math/functions/highest/index.html)
