---
title: exsl:node-set()
slug: Web/EXSLT/exsl/node-set
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`exsl:node-set()` gibt eine Node-Set aus einem Ergebnisbaumfragment zurück, das Sie erhalten, wenn Sie die `xsl:variable` anstelle ihres select-Attributs betrachten, um den Wert einer Variablen abzurufen. Dies ermöglicht es Ihnen, das innerhalb einer Variablen erstellte XML in mehreren Schritten zu verarbeiten.

Sie können `exsl:node-set()` auch verwenden, um Zeichenfolgen in Textknoten umzuwandeln.

## Syntax

```plain
exsl:node-set(object)
```

### Parameter

- `object`
  - : Das Objekt, für das das entsprechende Node-Set zurückgegeben werden soll.

### Rückgabewert

Das Node-Set, das dem angegebenen `object` entspricht.

## Spezifikationen

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
