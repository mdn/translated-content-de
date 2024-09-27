---
title: not
slug: Web/XPath/Functions/not
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die `not`-Funktion wertet einen booleschen Ausdruck aus und gibt den entgegengesetzten Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird genau so ausgewertet, als ob er als Argument an die [boolean()](/de/docs/Web/XPath/Functions/boolean)-Funktion übergeben worden wäre.

### Rückgabewert

Wahr für einen Ausdruck, der zu falsch ausgewertet wird; falsch für einen Ausdruck, der zu wahr ausgewertet wird.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die [boolean()](/de/docs/Web/XPath/Functions/boolean)-Funktion verhalten, außer dass sie den entgegengesetzten Wert zurückgibt.
- Sie können testen, ob ein Element kein bestimmtes Attribut hat.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iterates over any <a> element in the document, that
          either has no 'name' attribute at all, or it has one,
          but its value is not "badname". -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-not)

## Browser-Kompatibilität

Unterstützt.
