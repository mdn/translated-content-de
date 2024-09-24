---
title: exsl:node-set()
slug: Web/EXSLT/exsl/node-set
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`exsl:node-set()` gibt eine Knotenmenge aus einem Ergebnisbaumfragment zurück, welches Sie erhalten, wenn Sie auf die `xsl:variable` statt auf ihr select-Attribut blicken, um den Wert einer Variablen zu erhalten. Dies ermöglicht es Ihnen, das innerhalb einer Variablen erstellte XML in mehreren Schritten zu verarbeiten.

Sie können `exsl:node-set()` auch verwenden, um Zeichenfolgen in Textknoten umzuwandeln.

## Syntax

```plain
exsl:node-set(object)
```

### Parameter

- `object`
  - : Das Objekt, für das die entsprechende Knotenmenge zurückgegeben werden soll.

### Rückgabewert

Die Knotenmenge, die dem angegebenen `object` entspricht.

## Spezifikationen

[EXSLT - EXSL:NODE-SET](https://exslt.github.io/exsl/functions/node-set/index.html)
