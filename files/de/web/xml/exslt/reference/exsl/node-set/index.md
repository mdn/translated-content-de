---
title: exsl:node-set()
slug: Web/XML/EXSLT/Reference/exsl/node-set
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`exsl:node-set()` gibt ein Knoten-Set aus einem Ergebnisbaum-Fragment zurück, das Sie erhalten, wenn Sie auf die `xsl:variable` schauen, anstatt deren select-Attribut zu verwenden, um den Wert einer Variablen abzurufen. Dies ermöglicht es Ihnen, das innerhalb einer Variablen erstellte XML in mehreren Schritten zu verarbeiten.

Sie können `exsl:node-set()` auch verwenden, um Strings in Textknoten zu verwandeln.

## Syntax

```plain
exsl:node-set(object)
```

### Parameter

- `object`
  - : Das Objekt, für das das entsprechende Knoten-Set zurückgegeben werden soll.

### Rückgabewert

Das Knoten-Set, das dem angegebenen `object` entspricht.

## Spezifikationen

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
