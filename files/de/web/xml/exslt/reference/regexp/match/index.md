---
title: regexp:match()
slug: Web/XML/EXSLT/Reference/regexp/match
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

`regexp:match()` führt eine reguläre Ausdrucksübereinstimmung auf einem Zeichenstring durch und gibt die gefundenen Teilübereinstimmungen als Ergebnis zurück.

## Syntax

```js-nolint
regexp:match(targetString, regExpString[, flagsString])
```

### Parameter

- `targetString`
  - : Der Zeichenstring, auf den die Übereinstimmung des regulären Ausdrucks angewendet werden soll.
- `regExpString`
  - : Der reguläre Ausdruck im JavaScript-Stil, der ausgewertet wird.
- `flagsString` {{optional_inline}}
  - : Ein optionaler Zeichenstring, der Zeichenflags enthält.

Die Zeichenflags sind:

- `g`
  - : Globale Übereinstimmung. Die Teilübereinstimmungen jeder Übereinstimmung im Zeichenstring werden zurückgegeben. Falls dieses Flag nicht angegeben ist, werden nur die Teilübereinstimmungen der ersten Übereinstimmung zurückgegeben.
- `i`
  - : Groß-/Kleinschreibung ignorieren. Falls dieses Flag angegeben ist, wird die Übereinstimmung ohne Berücksichtigung der Groß-/Kleinschreibung durchgeführt.

### Rückgabewert

Ein Knotensatz von `match`-Elementen, von denen jedes den Zeichenstringwert eines Teils des ersten Parameterzeichens enthält, wie durch den regulären Ausdruck erfasst. Falls die Übereinstimmung keine globale ist, hat das erste `match`-Element den Wert des Teils des Zeichenstrings, der durch den gesamten regulären Ausdruck übereinstimmt.

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
