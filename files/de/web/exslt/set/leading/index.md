---
title: set:leading()
slug: Web/EXSLT/set/leading
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:leading()` gibt die Knoten in einer Knotenmenge zurück, die vor dem ersten Knoten in der anderen Knotenmenge liegen.

## Syntax

```js-nolint
set:leading(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Die Knotenmenge, in der Knoten gefunden werden sollen, die dem ersten Knoten in der zweiten Knotenmenge vorausgehen.
- `nodeSet2`
  - : Die Knotenmenge, gegen die verglichen wird.

### Rückgabewert

Eine Knotenmenge, die die Knoten aus `nodeSet1` enthält, deren Werte dem ersten Knoten in `nodeSet2` vorausgehen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird eine leere Menge zurückgegeben. Wenn `nodeSet2` leer ist, dann ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:LEADING](https://exslt.github.io/set/functions/leading/index.html)
