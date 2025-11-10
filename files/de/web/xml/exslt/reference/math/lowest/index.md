---
title: math:lowest()
slug: Web/XML/EXSLT/Reference/math/lowest
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

`math:lowest()` gibt den Knoten im angegebenen Knoten-Set mit dem niedrigsten Wert zurück (wobei der niedrigste Wert mit [`math:min()`](/de/docs/Web/XML/EXSLT/Reference/math/min) berechnet wird).

Ein Knoten hat diesen minimalen Wert, wenn das Umwandeln seines Zeichenfolgenwerts in eine Zahl dem minimalen Wert entspricht.

## Syntax

```plain
math:lowest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen niedrigster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das Kopien der Knoten enthält, die von [`math:min()`](/de/docs/Web/XML/EXSLT/Reference/math/min) zurückgegeben werden.

## Spezifikationen

[EXSLT - MATH:LOWEST](https://exslt.github.io/math/functions/lowest/index.html)
