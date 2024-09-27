---
title: set:leading()
slug: Web/EXSLT/set/leading
l10n:
  sourceCommit: 857c6f9e7f1a847e7d3466b0d047159f7b345991
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:leading()` gibt die Knoten in einem Node-Set zurück, die vor dem ersten Knoten im anderen Node-Set liegen.

## Syntax

```js-nolint
set:leading(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Das Node-Set, in dem die Knoten gefunden werden sollen, die dem ersten Knoten im zweiten Node-Set vorausgehen.
- `nodeSet2`
  - : Das Node-Set, gegen das verglichen wird.

### Rückgabewert

Ein Node-Set, das die Knoten aus `nodeSet1` enthält, deren Werte vor dem ersten Knoten in `nodeSet2` liegen.

> [!NOTE]
> Wenn der erste Knoten in `nodeSet2` nicht in `nodeSet1` enthalten ist, wird ein leeres Set zurückgegeben. Wenn `nodeSet2` leer ist, ist das Ergebnis `nodeSet1`.

## Spezifikationen

[EXSLT - SET:LEADING](https://exslt.github.io/set/functions/leading/index.html)
