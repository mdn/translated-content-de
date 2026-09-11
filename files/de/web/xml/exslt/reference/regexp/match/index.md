---
title: regexp:match()
slug: Web/XML/EXSLT/Reference/regexp/match
l10n:
  sourceCommit: 8b0250d2e2bd4676046dbb441da91f7cefc32507
---

`regexp:match()` führt den Abgleich regulärer Ausdrücke mit einer Zeichenkette durch und gibt die dabei gefundenen Teilübereinstimmungen zurück.

## Syntax

```plain
regexp:match(targetString, regExpString[, flagsString])
```

### Parameter

- `targetString`
  - : Die Zeichenkette, auf der der Abgleich mit einem regulären Ausdruck durchgeführt werden soll.
- `regExpString`
  - : Der auszuwertende reguläre Ausdruck im JavaScript-Stil.
- `flagsString` {{optional_inline}}
  - : Eine optionale Zeichenkette mit Zeichen-Flags.

Die Zeichen-Flags sind:

- `g`
  - : Globaler Abgleich. Die Teilübereinstimmungen aus jeder Übereinstimmung in der Zeichenkette werden zurückgegeben. Wenn dieses Flag nicht angegeben ist, werden nur die Teilübereinstimmungen der ersten Übereinstimmung zurückgegeben.
- `i`
  - : Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung. Wenn dieses Flag angegeben ist, wird der Abgleich ohne Berücksichtigung der Groß- und Kleinschreibung durchgeführt.

### Rückgabewert

Eine Knotenmenge von `match`-Elementen, deren Zeichenkettenwert jeweils einem Teil der ersten Parameterzeichenkette entspricht, der vom regulären Ausdruck erfasst wurde. Wenn die Übereinstimmung nicht global ist, hat das erste `match`-Element den Wert des Teils der Zeichenkette, der vom gesamten regulären Ausdruck erfasst wurde.

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

[EXSLT – REGEXP:MATCH](https://exslt.github.io/regexp/functions/match/index.html)
