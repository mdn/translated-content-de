---
title: math:highest()
slug: Web/XML/EXSLT/Reference/math/highest
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`math:highest()` gibt den Knoten in der angegebenen Knotenmenge mit dem höchsten Wert zurück (wobei der höchste Wert mit [`math:max()`](/de/docs/Web/XML/EXSLT/Reference/math/max) berechnet wird).

Ein Knoten hat diesen maximalen Wert, wenn die Umwandlung seines Zeichenfolgenwerts in eine Zahl dem maximalen Wert entspricht.

## Syntax

```plain
math:highest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Die Knotenmenge, deren höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisausschnitt, der aus Kopien der von [`math:max()`](/de/docs/Web/XML/EXSLT/Reference/math/max) zurückgegebenen Knoten besteht.

## Spezifikationen

[EXSLT - MATH:HIGHEST](https://exslt.github.io/math/functions/highest/index.html)
