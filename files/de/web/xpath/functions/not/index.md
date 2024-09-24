---
title: not
slug: Web/XPath/Functions/not
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Die Funktion `not` wertet einen booleschen Ausdruck aus und gibt den gegenteiligen Wert zurück.

## Syntax

```plain
not( expression )
```

### Parameter

- `expression`
  - : Der Ausdruck wird genau so ausgewertet, als ob er als Argument an die [boolean()](/de/docs/Web/XPath/Functions/boolean)-Funktion übergeben wurde.

### Rückgabewert

Wahr für einen Ausdruck, der sich zu falsch auswertet; falsch für einen Ausdruck, der sich zu wahr auswertet.

## Beschreibung

- Diese Funktion sollte sich ähnlich wie die [boolean()](/de/docs/Web/XPath/Functions/boolean)-Funktion verhalten, außer dass sie den gegenteiligen Wert zurückgibt.
- Sie können testen, ob ein Element ein Attribut nicht hat.

  ```xml
  <xsl:for-each match="//a[not(@name and @name = 'badname')]">
    <!-- iteriert über jedes <a>-Element im Dokument, das
          entweder kein 'name'-Attribut hat oder ein solches hat,
          dessen Wert jedoch nicht "badname" ist. -->
  </xsl:template>
  ```

## Spezifikationen

[XPath 1.0 4.3](https://www.w3.org/TR/1999/REC-xpath-19991116/#function-not)

## Gecko-Unterstützung

Unterstützt.
