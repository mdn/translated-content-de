---
title: regexp:match()
slug: Web/EXSLT/regexp/match
l10n:
  sourceCommit: 8ac73df2fbe2c88d8649fcb006dcde098616c723
---

{{XSLTRef}}{{QuickLinksWithSubpages("/de/docs/Web/EXSLT")}}

`regexp:match()` führt eine reguläre Ausdrucksüberprüfung auf einem String durch und gibt die als Ergebnis gefundenen Teilübereinstimmungen zurück.

## Syntax

```js-nolint
regexp:match(targetString, regExpString[, flagsString])
```

### Parameter

- `targetString`
  - : Der String, auf dem die reguläre Ausdrucksüberprüfung durchgeführt werden soll.
- `regExpString`
  - : Der zu bewertende reguläre Ausdruck im JavaScript-Stil.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichenflags enthält.

Die Zeichenflags sind:

- `g`
  - : Globale Übereinstimmung. Die Teilübereinstimmungen jeder Übereinstimmung im String werden zurückgegeben. Wenn dieses Flag nicht angegeben ist, werden nur die Teilübereinstimmungen der ersten Übereinstimmung zurückgegeben.
- `i`
  - : Groß-/Kleinschreibungunabhängige Übereinstimmung. Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Beachtung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Eine Knotenmenge von `match`-Elementen, von denen jedes den Stringwert eines Teils des ersten Parameterstrings hat, wie er durch den regulären Ausdruck erfasst wurde. Wenn die Übereinstimmung nicht global ist, hat das erste übereinstimmende Element den Wert des Teils des Strings, der durch den gesamten regulären Ausdruck übereinstimmt.

Zum Beispiel:

```xml
<xsl:for-each select="regExp:match('https://developer.mozilla.org/en/docs/Firefox_3_for_developers',
                                   '(\w+):\/\/([^/:]+)(:\d*)?([^# ]*)')">
   Part <xsl:value-of select="position()" /> = <xsl:value-of select="." />
</xsl:for-each>
```

Dieser Code erzeugt die folgende Ausgabe:

```plain
Part 1 = https://developer.mozilla.org/en/docs/Firefox_3_for_developers
Part 2 = https
Part 3 = developer.mozilla.org
Part 4 =
Part 5 = /en/docs/Firefox_3_for_developers
```

## Spezifikationen

[EXSLT - REGEXP:MATCH](https://exslt.github.io/regexp/functions/match/index.html)
