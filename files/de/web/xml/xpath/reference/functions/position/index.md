---
title: position
slug: Web/XML/XPath/Reference/Functions/position
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die Funktion `position` gibt eine Zahl zurück, die der Kontextposition im Ausdrucksauswertungskontext entspricht.

## Syntax

```plain
position()
```

### Rückgabewert

Ein ganzzahliger Wert, der der Kontextposition im Ausdrucksauswertungskontext entspricht.

## Beschreibung

- Beachten Sie, dass die Position eines Knotens in einem Kontext nicht nullbasiert ist. Der erste Knoten hat die Position 1.

- Der Kontext wird durch den Rest des Pfades bestimmt.

  ```xml
  <xsl:template match="//a[position() = 5]">
    <!-- this template matches the fifth a element
            anywhere in the document. -->
  </xsl:template>
  ```

  ```xml
  <xsl:template match="//div[@class='foo']/bar[position() = 1]">
    <!-- this template matches the first bar element that is
        a child of a div element with a class attribute equal to "foo" -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.1](https://www.w3.org/TR/xpath-10/#function-position)

## Gecko-Unterstützung

Unterstützt.
