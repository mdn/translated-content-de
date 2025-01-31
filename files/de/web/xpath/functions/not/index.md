---
title: not
slug: Web/XPath/Functions/not
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Die `not`-Funktion wertet einen booleschen Ausdruck aus und gibt den gegenteiligen Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird genau so ausgewertet, als ob er als Argument an die [boolean()](/de/docs/Web/XPath/Functions/boolean) Funktion übergeben worden wäre.

### Rückgabewert

Wahr für einen Ausdruck, der zu falsch ausgewertet wird; falsch für einen Ausdruck, der zu wahr ausgewertet wird.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die [boolean()](/de/docs/Web/XPath/Functions/boolean) Funktion verhalten, außer dass sie den gegenteiligen Wert zurückgibt.
- Sie können testen, ob ein Element ein bestimmtes Attribut nicht besitzt.

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
