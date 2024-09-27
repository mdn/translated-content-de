---
title: set:difference()
slug: Web/EXSLT/set/difference
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:difference()` gibt die Differenz zwischen zwei Knoten-Mengen zurück. Mit anderen Worten, es wird eine Knoten-Menge zurückgegeben, deren Knoten in einer Knoten-Menge, aber nicht in der anderen enthalten sind.

Die Template-Version von `set:difference` wendet Templates auf diese Knoten im `set:difference`-Modus an, kopiert die Knoten und gibt so ein Ergebnisbaum-Fragment zurück, das aus den Knoten besteht.

## Syntax

```plain
set:difference(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Die Knoten-Menge, von der Knoten subtrahiert werden sollen.
- `nodeSet2`
  - : Die Menge der Knoten, die von `nodeSet1` subtrahiert werden sollen.

### Rückgabewert

Eine Knoten-Menge, die die Knoten enthält, die in `nodeSet1`, aber nicht in `nodeSet2` enthalten sind.

## Spezifikationen

[EXSLT - SET:DIFFERENCE](https://exslt.github.io/set/functions/difference/index.html)
