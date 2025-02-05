---
title: not
slug: Web/XML/XPath/Reference/Functions/not
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Die Funktion `not` bewertet einen booleschen Ausdruck und gibt den entgegengesetzten Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird genau so ausgewertet, als ob er als Argument an die Funktion [boolean()](/de/docs/Web/XML/XPath/Reference/Functions/boolean) übergeben würde.

### Rückgabewert

`true` für einen Ausdruck, der zu `false` ausgewertet wird; `false` für einen Ausdruck, der zu `true` ausgewertet wird.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die Funktion [boolean()](/de/docs/Web/XML/XPath/Reference/Functions/boolean) verhalten, außer dass sie den entgegengesetzten Wert zurückgibt.
- Sie können testen, ob ein Element ein bestimmtes Attribut **nicht** hat.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iterates over any <a> element in the document, that
          either has no 'name' attribute at all, or it has one,
          but its value is not "badname". -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-not)

## Gecko-Unterstützung

Unterstützt.
