---
title: EXSLT
slug: Web/XML/EXSLT
l10n:
  sourceCommit: f731452fabde211bee55aedd39fc83d60c4e4918
---

EXSLT ist eine Sammlung von Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT). Es gibt eine Reihe von Modulen; die, die von Firefox unterstützt werden, sind unten aufgeführt:

## EXSLT-Module

Um eine EXSLT-Funktion zu verwenden, müssen Sie den Namensraum deklarieren, in dem sich die Funktion befindet, und dann den entsprechenden Präfix beim Aufrufen der Funktion verwenden. Zum Beispiel, um das Paket für reguläre Ausdrücke zu nutzen:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    …
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    …
  </xsl:template>

</xsl:stylesheet>
```

### Common

Das EXSLT Common-Paket stellt grundlegende Funktionen bereit, die die Fähigkeiten von XSLT erweitern. Der Namensraum für das Common-Paket ist `http://exslt.org/common`.

#### Funktionen

- [`exsl:node-set()`](/de/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [`exsl:object-type()`](/de/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Math

Das EXSLT Math-Paket bietet Funktionen für die Arbeit mit numerischen Werten und den Vergleich von Knoten. Der Namensraum für das Math-Paket ist `http://exslt.org/math`.

#### Funktionen

- [`math:highest()`](/de/docs/Web/XML/EXSLT/Reference/math/highest)
- [`math:lowest()`](/de/docs/Web/XML/EXSLT/Reference/math/lowest)
- [`math:max()`](/de/docs/Web/XML/EXSLT/Reference/math/max)
- [`math:min()`](/de/docs/Web/XML/EXSLT/Reference/math/min)

### Regular expressions

Das EXSLT Regular Expressions-Paket bietet Funktionen, die es ermöglichen, Text mithilfe von regulären Ausdrücken im JavaScript-Stil zu testen, zu matchen und zu ersetzen.

Der Namensraum für EXSLT Regular Expressions ist `http://exslt.org/regular-expressions`.

#### Funktionen

- [`regexp:match()`](/de/docs/Web/XML/EXSLT/Reference/regexp/match)
- [`regexp:replace()`](/de/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [`regexp:test()`](/de/docs/Web/XML/EXSLT/Reference/regexp/test)

### Sets

Das EXSLT Sets-Paket bietet Funktionen, die es erlauben, Mengenoperationen durchzuführen. Der Namensraum für diese Funktionen ist `http://exslt.org/sets`.

#### Funktionen

- [`set:difference()`](/de/docs/Web/XML/EXSLT/Reference/set/difference)
- [`set:distinct()`](/de/docs/Web/XML/EXSLT/Reference/set/distinct)
- [`set:intersection()`](/de/docs/Web/XML/EXSLT/Reference/set/intersection)
- [`set:has-same-node()`](/de/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [`set:leading()`](/de/docs/Web/XML/EXSLT/Reference/set/leading)
- [`set:trailing()`](/de/docs/Web/XML/EXSLT/Reference/set/trailing)

### Strings

Das EXSLT Strings-Paket stellt Funktionen bereit, die die Manipulation von Zeichenketten ermöglichen. Der Namensraum für das Strings-Paket ist `http://exslt.org/strings`.

#### Funktionen

- [`str:concat()`](/de/docs/Web/XML/EXSLT/Reference/str/concat)
- [`str:split()`](/de/docs/Web/XML/EXSLT/Reference/str/split)
- [`str:tokenize()`](/de/docs/Web/XML/EXSLT/Reference/str/tokenize)

## Siehe auch

- [EXSLT-Website](https://exslt.github.io/)
