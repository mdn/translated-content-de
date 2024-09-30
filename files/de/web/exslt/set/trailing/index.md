---
title: set:trailing()
slug: Web/EXSLT/set/trailing
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:trailing()` gibt die Knoten in einem Knoten-Set zurück, die nach dem ersten Knoten in dem anderen Knoten-Set vorkommen.

## Syntax

```plain
set:trailing(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Das Knoten-Set, in dem nach Knoten gesucht wird, die dem ersten Knoten im zweiten Knoten-Set folgen.
- `nodeSet2`
  - : Das Knoten-Set, gegen das verglichen wird.

### Rückgabewert

Ein Knoten-Set, das die Knoten aus `nodeSet1` enthält, deren Werte dem ersten Knoten in `nodeSet2` folgen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird ein leeres Set zurückgegeben. Wenn `nodeSet2` leer ist, dann ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:TRAILING](https://exslt.github.io/set/functions/trailing/index.html)
