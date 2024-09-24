---
title: math:highest()
slug: Web/EXSLT/math/highest
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:highest()` gibt den Knoten im angegebenen Knoten-Set zurück, der den höchsten Wert hat (wobei der höchste Wert mit [`math:max()`](/de/docs/Web/EXSLT/math/max) berechnet wird).

Ein Knoten hat diesen Maximalwert, wenn das Umwandeln seines String-Wertes in eine Zahl dem Maximalwert entspricht.

## Syntax

```plain
math:highest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Knoten-Set, dessen höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaumfragment, das Kopien der Knoten enthält, die von [`math:max()`](/de/docs/Web/EXSLT/math/max) zurückgegeben werden.

## Spezifikationen

[EXSLT - MATH:HIGHEST](https://exslt.github.io/math/functions/highest/index.html)
