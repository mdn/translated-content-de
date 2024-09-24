---
title: set:difference()
slug: Web/EXSLT/set/difference
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`set:difference()` gibt die Differenz zwischen zwei Node-Sets zurück. Mit anderen Worten, es gibt ein Node-Set zurück, dessen Knoten in einem Node-Set sind, aber nicht im anderen.

Die Template-Version von `set:difference` wendet Vorlagen auf diese Knoten im Modus `set:difference` an und kopiert die Knoten, sodass ein Ergebnisbaumfragment bestehend aus diesen Knoten zurückgegeben wird.

## Syntax

```plain
set:difference(nodeSet1, nodeSet2)
```

### Parameter

- `nodeSet1`
  - : Das Node-Set, von dem die Knoten subtrahiert werden sollen.
- `nodeSet2`
  - : Die Menge von Knoten, die von `nodeSet1` subtrahiert werden sollen.

### Rückgabewert

Ein Node-Set, das die Knoten enthält, die in `nodeSet1`, aber nicht in `nodeSet2` sind.

## Spezifikationen

[EXSLT - SET:DIFFERENCE](https://exslt.github.io/set/functions/difference/index.html)
