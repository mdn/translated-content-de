---
title: math:highest()
slug: Web/EXSLT/math/highest
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`math:highest()` gibt den Knoten in der angegebenen Node-Set zurück, der den höchsten Wert hat (wobei der höchste Wert mit [`math:max()`](/de/docs/Web/EXSLT/math/max) berechnet wird).

Ein Knoten hat diesen Maximalwert, wenn die Umwandlung seines String-Werts in eine Zahl dem Maximalwert entspricht.

## Syntax

```plain
math:highest(nodeSet)
```

### Parameter

- `nodeSet`
  - : Das Node-Set, dessen höchster Wert zurückgegeben werden soll.

### Rückgabewert

Ein Ergebnisbaum-Fragment, das Kopien der Knoten enthält, die von [`math:max()`](/de/docs/Web/EXSLT/math/max) zurückgegeben werden.

## Spezifikationen

[EXSLT - MATH:HIGHEST](https://exslt.github.io/math/functions/highest/index.html)
