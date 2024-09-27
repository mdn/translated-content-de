---
title: set:trailing()
slug: Web/EXSLT/set/trailing
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:trailing()` gibt die Knoten in einer Knotenmenge zurück, die nach dem ersten Knoten in der anderen Knotenmenge kommen.

## Syntax

```plain
set:trailing(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Die Knotenmenge, um Knoten zu finden, die dem ersten Knoten in der zweiten Knotenmenge folgen.
- `nodeSet2`
  - : Die Knotenmenge, mit der verglichen wird.

### Rückgabewert

Eine Knotenmenge, die die Knoten aus `nodeSet1` enthält, deren Werte nach dem ersten Knoten in `nodeSet2` folgen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird eine leere Menge zurückgegeben. Wenn `nodeSet2` leer ist, ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:TRAILING](https://exslt.github.io/set/functions/trailing/index.html)
