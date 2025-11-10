---
title: EXSLT
slug: Web/XML/EXSLT
l10n:
  sourceCommit: 049e8715d907f47677e85637b5f8292d5376a9f1
---

EXSLT ist eine Sammlung von Erweiterungen zu [XSLT](/de/docs/Web/XML/XSLT), organisiert in Module, die Funktionen zur Durchführung von Transformationen auf einem XML-Dokument bereitstellen. Um eine EXSLT-Funktion zu verwenden, müssen Sie den Namespace deklarieren, in dem sich die Funktion befindet, und dann das entsprechende Präfix beim Aufrufen der Funktion verwenden.

Um beispielsweise das reguläre Ausdrucks-Paket zu nutzen:

```xml
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:regexp="http://exslt.org/regular-expressions">
  <xsl:template match="/">
    <!-- … -->
    <xsl:value-of select="regexp:replace(/root/@value, 'before', 'gi', 'AFTER')"/>
    <!-- … -->
  </xsl:template>
</xsl:stylesheet>
```

## Referenz

Die [EXSLT-Referenz](/de/docs/Web/XML/EXSLT/Reference) beschreibt Namespaces und Funktionen für allgemeine Operationen, Mathematik, reguläre Ausdrücke, Mengenmanipulation und Zeichenfolgenmanipulation.

### Allgemein

Das EXSLT-Allgemein-Paket bietet grundlegende Funktionen, die die Fähigkeiten von XSLT erweitern. Der Namespace für das Allgemein-Paket ist `http://exslt.org/common`.

- [`exsl:node-set()`](/de/docs/Web/XML/EXSLT/Reference/exsl/node-set)
- [`exsl:object-type()`](/de/docs/Web/XML/EXSLT/Reference/exsl/object-type)

### Mathematik

Das EXSLT-Mathematik-Paket bietet Funktionen zum Arbeiten mit numerischen Werten und zum Vergleichen von Knoten. Der Namespace für das Mathematik-Paket ist `http://exslt.org/math`.

- [`math:highest()`](/de/docs/Web/XML/EXSLT/Reference/math/highest)
- [`math:lowest()`](/de/docs/Web/XML/EXSLT/Reference/math/lowest)
- [`math:max()`](/de/docs/Web/XML/EXSLT/Reference/math/max)
- [`math:min()`](/de/docs/Web/XML/EXSLT/Reference/math/min)

### Reguläre Ausdrücke

Das EXSLT-Reguläre-Ausdrücke-Paket bietet Funktionen, die das Testen, Anpassen und Ersetzen von Text mit regulären Ausdrücken im JavaScript-Stil ermöglichen. Der Namespace für EXSLT-Reguläre-Ausdrücke ist `http://exslt.org/regular-expressions`.

- [`regexp:match()`](/de/docs/Web/XML/EXSLT/Reference/regexp/match)
- [`regexp:replace()`](/de/docs/Web/XML/EXSLT/Reference/regexp/replace)
- [`regexp:test()`](/de/docs/Web/XML/EXSLT/Reference/regexp/test)

### Mengen

Das EXSLT-Mengen-Paket bietet Funktionen, mit denen Sie Mengenoperationen durchführen können. Der Namespace für diese Funktionen ist `http://exslt.org/sets`.

- [`set:difference()`](/de/docs/Web/XML/EXSLT/Reference/set/difference)
- [`set:distinct()`](/de/docs/Web/XML/EXSLT/Reference/set/distinct)
- [`set:intersection()`](/de/docs/Web/XML/EXSLT/Reference/set/intersection)
- [`set:has-same-node()`](/de/docs/Web/XML/EXSLT/Reference/set/has-same-node)
- [`set:leading()`](/de/docs/Web/XML/EXSLT/Reference/set/leading)
- [`set:trailing()`](/de/docs/Web/XML/EXSLT/Reference/set/trailing)

### Zeichenfolgen

Das EXSLT-Zeichenfolgen-Paket bietet Funktionen, die die Manipulation von Zeichenfolgen ermöglichen. Der Namespace für das Zeichenfolgen-Paket ist `http://exslt.org/strings`.

- [`str:concat()`](/de/docs/Web/XML/EXSLT/Reference/str/concat)
- [`str:split()`](/de/docs/Web/XML/EXSLT/Reference/str/split)
- [`str:tokenize()`](/de/docs/Web/XML/EXSLT/Reference/str/tokenize)

## Siehe auch

- [EXSLT-Website](https://exslt.github.io/)
