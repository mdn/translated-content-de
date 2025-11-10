---
title: not
slug: Web/XML/XPath/Reference/Functions/not
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

Die `not` Funktion bewertet einen booleschen Ausdruck und gibt den gegenteiligen Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird exakt so ausgewertet, als ob er als Argument an die [boolean()](/de/docs/Web/XML/XPath/Reference/Functions/boolean) Funktion übergeben worden wäre.

### Rückgabewert

True für einen Ausdruck, der zu false ausgewertet wird; false für einen Ausdruck, der zu true ausgewertet wird.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die [boolean()](/de/docs/Web/XML/XPath/Reference/Functions/boolean) Funktion verhalten, außer dass sie den gegenteiligen Wert zurückgibt.
- Sie können testen, ob ein Element ein bestimmtes Attribut nicht hat.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iterates over any <a> element in the document, that
          either has no 'name' attribute at all, or it has one,
          but its value is not "badname". -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/xpath-10/#function-not)

## Gecko-Unterstützung

Unterstützt.
