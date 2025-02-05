---
title: set:leading()
slug: Web/XML/EXSLT/Reference/set/leading
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`set:leading()` gibt die Knoten in einer Knotenmengen zurück, die vor dem ersten Knoten in der anderen Knotenmengen liegen.

## Syntax

```js-nolint
set:leading(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Die Knotenmengen, in der die Knoten gesucht werden, die dem ersten Knoten in der zweiten Knotenmengen vorausgehen.
- `nodeSet2`
  - : Die Knotenmengen, mit der verglichen wird.

### Rückgabewert

Eine Knotenmengen, die die Knoten aus `nodeSet1` enthält, deren Werte vor dem ersten Knoten in `nodeSet2` liegen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird eine leere Menge zurückgegeben. Falls `nodeSet2` leer ist, ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:LEADING](https://exslt.github.io/set/functions/leading/index.html)
