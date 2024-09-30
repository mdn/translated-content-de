---
title: position
slug: Web/XPath/Functions/position
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `position` gibt eine Zahl zurück, die der Kontextposition aus dem Ausdrucks-Evaluierungskontext entspricht.

## Syntax

```plain
position()
```

### Rückgabewert

Ein ganzzahliger Wert, der der Kontextposition aus dem Ausdrucks-Evaluierungskontext entspricht.

## Beschreibung

- Beachten Sie, dass die Position eines Knotens in einem Kontext nicht nullbasiert ist. Der erste Knoten hat die Position 1.

- Der Kontext wird durch den restlichen Pfad bestimmt.

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
