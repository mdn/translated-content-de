---
title: regexp:match()
slug: Web/XML/EXSLT/Reference/regexp/match
l10n:
  sourceCommit: 3fcc43c9a6dd8e2eac385da0496586105256a468
---

`regexp:match()` führt eine reguläre Ausdrucksübereinstimmung auf einem String durch und gibt die gefundenen Teilübereinstimmungen als Ergebnis zurück.

## Syntax

```plain
regexp:match(targetString, regExpString[, flagsString])
```

### Parameter

- `targetString`
  - : Der String, auf dem die reguläre Ausdrucksübereinstimmung durchgeführt werden soll.
- `regExpString`
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet werden soll.
- `flagsString` {{optional_inline}}
  - : Ein optionaler String, der Zeichen-Flags enthält.

Die Zeichen-Flags sind:

- `g`
  - : Globale Übereinstimmung. Die Teilübereinstimmungen von jedem Treffer im String werden zurückgegeben. Wenn dieses Flag nicht angegeben ist, werden nur die Teilübereinstimmungen des ersten Treffers zurückgegeben.
- `i`
  - : Groß-/Kleinschreibung ignorieren. Wenn dieses Flag angegeben ist, wird die Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Eine Knotenmenge von `match`-Elementen, von denen jedes den Stringwert eines Teils des ersten Parameterstrings hat, wie es durch den regulären Ausdruck erfasst wurde. Wenn die Übereinstimmung nicht global ist, hat das erste Match-Element den Wert des Teils des Strings, der durch den gesamten regulären Ausdruck übereinstimmt.

Beispielsweise:

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
