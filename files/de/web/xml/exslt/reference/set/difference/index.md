---
title: set:difference()
slug: Web/XML/EXSLT/Reference/set/difference
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`set:difference()` gibt die Differenz zwischen zwei Knoten-Mengen zurück. Mit anderen Worten, es gibt eine Knoten-Menge zurück, deren Knoten in einer Knoten-Menge enthalten sind, aber nicht in der anderen.

Die Vorlagen-Version von `set:difference` wendet Vorlagen auf diese Knoten im Modus `set:difference` an und kopiert die Knoten, sodass ein Ergebnisbaum-Fragment bestehend aus diesen Knoten zurückgegeben wird.

## Syntax

```plain
set:difference(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Die Knoten-Menge, von der Knoten subtrahiert werden sollen.
- `nodeSet2`
  - : Die Knoten-Menge, die von `nodeSet1` subtrahiert werden soll.

### Rückgabewert

Eine Knoten-Menge, die die Knoten enthält, die in `nodeSet1` sind, aber nicht in `nodeSet2`.

## Spezifikationen

[EXSLT - SET:DIFFERENCE](https://exslt.github.io/set/functions/difference/index.html)
