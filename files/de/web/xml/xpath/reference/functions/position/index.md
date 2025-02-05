---
title: position
slug: Web/XML/XPath/Reference/Functions/position
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `position` gibt eine Zahl zurück, die der Kontextposition des Ausdrucksbewertungskontexts entspricht.

## Syntax

```plain
position()
```

### Rückgabewert

Eine ganze Zahl, die der Kontextposition des Ausdrucksbewertungskontexts entspricht.

## Beschreibung

- Beachten Sie, dass die Position eines Knotens in einem Kontext nicht nullbasiert ist. Der erste Knoten hat die Position 1.

- Der Kontext wird vom restlichen Pfad bestimmt.

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

[XPath 1.0 4.1](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-position)

## Gecko-Unterstützung

Unterstützt.
