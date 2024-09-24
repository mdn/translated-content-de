---
title: position
slug: Web/XPath/Functions/position
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `position` Funktion gibt eine Zahl zurück, die der Kontextposition aus dem Ausdrucksauswertungskontext entspricht.

## Syntax

```plain
position()
```

### Rückgabewert

Ein ganzzahliger Wert, der der Kontextposition aus dem Ausdrucksauswertungskontext entspricht.

## Beschreibung

- Beachten Sie, dass die Position eines Knotens in einem Kontext nicht nullbasiert ist. Der erste Knoten hat die Position 1.

- Der Kontext wird durch den Rest des Pfades bestimmt.

  ```xml
  <xsl:template match="//a[position() = 5]">
    <!-- dieses Template passt zum fünften a-Element
            irgendwo im Dokument. -->
  </xsl:template>
  ```

  ```xml
  <xsl:template match="//div[@class='foo']/bar[position() = 1]">
    <!-- dieses Template passt zum ersten bar-Element, das
        ein Kind eines div-Elements ist mit einem class-Attribut, das "foo" entspricht -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-position)

## Gecko-Unterstützung

Unterstützt.
