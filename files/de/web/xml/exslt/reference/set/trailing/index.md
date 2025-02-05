---
title: set:trailing()
slug: Web/XML/EXSLT/Reference/set/trailing
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`set:trailing()` gibt die Knoten in einem Knoten-Set zurück, die nach dem ersten Knoten im anderen Knoten-Set kommen.

## Syntax

```plain
set:trailing(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Das Knoten-Set, in dem die Knoten gefunden werden sollen, die nach dem ersten Knoten im zweiten Knoten-Set folgen.
- `nodeSet2`
  - : Das Knoten-Set, gegen das verglichen wird.

### Rückgabewert

Ein Knoten-Set, das die Knoten aus `nodeSet1` enthält, deren Werte nach dem ersten Knoten in `nodeSet2` folgen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird eine leere Menge zurückgegeben. Wenn `nodeSet2` leer ist, ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:TRAILING](https://exslt.github.io/set/functions/trailing/index.html)
