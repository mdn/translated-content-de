---
title: math:lowest()
slug: Web/XML/EXSLT/Reference/math/lowest
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`math:lowest()` gibt den Knoten in der angegebenen Knoten-Menge (`node-set`) mit dem niedrigsten Wert zurück (wobei der niedrigste Wert mit [`math:min()`](/de/docs/Web/XML/EXSLT/math/min) berechnet wird).

Ein Knoten hat diesen Minimalwert, wenn das Konvertieren seines Zeichenkettenwerts in eine Zahl dem Minimalwert entspricht.

## Syntax

```plain
math:lowest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knoten-Menge, deren niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaum-Fragment, das Kopien der von [`math:min()`](/de/docs/Web/XML/EXSLT/math/min) zurückgegebenen Knoten enthält.

## Spezifikationen

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
