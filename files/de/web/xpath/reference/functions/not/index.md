---
title: not
slug: Web/XPath/Reference/Functions/not
l10n:
  sourceCommit: 32e4a82509d6bbadd84c4cd6149fdd5f344e1204
---

Die `not`-Funktion wertet einen booleschen Ausdruck aus und gibt den entgegengesetzten Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird genau so ausgewertet, als ob er als Argument an die Funktion [boolean()](/de/docs/Web/XPath/Reference/Functions/boolean) übergeben würde.

### Rückgabewert

Wahr für einen Ausdruck, der als falsch ausgewertet wird; falsch für einen Ausdruck, der als wahr ausgewertet wird.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die Funktion [boolean()](/de/docs/Web/XPath/Reference/Functions/boolean) verhalten, außer dass sie den entgegengesetzten Wert zurückgibt.
- Sie können testen, ob ein Element ein Attribut nicht hat.

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
