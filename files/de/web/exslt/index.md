---
title: EXSLT
slug: Web/EXSLT
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

EXSLT ist eine Sammlung von Erweiterungen zu [XSLT](/de/docs/Web/XSLT). Es gibt eine Reihe von Modulen; die von Firefox unterstützten sind unten aufgeführt:

{{SubpagesWithSummaries}}

## EXSLT-Module

Um eine EXSLT-Funktion zu verwenden, müssen Sie den Namensraum deklarieren, in dem sich die Funktion befindet, und dann das entsprechende Präfix beim Aufruf der Funktion verwenden. Zum Beispiel, um das Reguläre Ausdrücke-Paket zu verwenden:

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

Das EXSLT-Common-Paket bietet grundlegende Funktionen, die die Fähigkeiten von XSLT erweitern. Der Namensraum für das Common-Paket ist `http://exslt.org/common`.

#### Funktionen

- [`exsl:node-set()`](/de/docs/Web/EXSLT/exsl/node-set)
- [`exsl:object-type()`](/de/docs/Web/EXSLT/exsl/object-type)

### Math

Das EXSLT-Math-Paket bietet Funktionen zum Arbeiten mit numerischen Werten und zum Vergleichen von Knoten. Der Namensraum für das Math-Paket ist `http://exslt.org/math`.

#### Funktionen

- [`math:highest()`](/de/docs/Web/EXSLT/math/highest)
- [`math:lowest()`](/de/docs/Web/EXSLT/math/lowest)
- [`math:max()`](/de/docs/Web/EXSLT/math/max)
- [`math:min()`](/de/docs/Web/EXSLT/math/min)

### Reguläre Ausdrücke

Das EXSLT Reguläre Ausdrücke-Paket bietet Funktionen, die das Testen, Abgleichen und Ersetzen von Text mit regulären Ausdrücken im JavaScript-Stil ermöglichen.

Der Namensraum für die EXSLT Reguläre Ausdrücke ist `http://exslt.org/regular-expressions`.

#### Funktionen

- [`regexp:match()`](/de/docs/Web/EXSLT/regexp/match)
- [`regexp:replace()`](/de/docs/Web/EXSLT/regexp/replace)
- [`regexp:test()`](/de/docs/Web/EXSLT/regexp/test)

### Sets

Das EXSLT-Sets-Paket bietet Funktionen, die die Durchführung von Mengenoperationen ermöglichen. Der Namensraum für diese Funktionen ist `http://exslt.org/sets`.

#### Funktionen

- [`set:difference()`](/de/docs/Web/EXSLT/set/difference)
- [`set:distinct()`](/de/docs/Web/EXSLT/set/distinct)
- [`set:intersection()`](/de/docs/Web/EXSLT/set/intersection)
- [`set:has-same-node()`](/de/docs/Web/EXSLT/set/has-same-node)
- [`set:leading()`](/de/docs/Web/EXSLT/set/leading)
- [`set:trailing()`](/de/docs/Web/EXSLT/set/trailing)

### Strings

Das EXSLT-Strings-Paket bietet Funktionen, die die Manipulation von Strings ermöglichen. Der Namensraum für das Strings-Paket ist `http://exslt.org/strings`.

#### Funktionen

- [`str:concat()`](/de/docs/Web/EXSLT/str/concat)
- [`str:split()`](/de/docs/Web/EXSLT/str/split)
- [`str:tokenize()`](/de/docs/Web/EXSLT/str/tokenize)

## Siehe auch

- [EXSLT Webseite](https://exslt.github.io/)

<section id="Quick_links">
  <ol>
    <li><strong><a href="/de/docs/Web/XSLT">XSLT</a></strong></li>
    <li><strong><a href="/de/docs/Web/XPath">XPath</a></strong></li>
    <li><strong><a href="/de/docs/Web/EXSLT">EXSLT</a></strong></li>
    <li class="toggle">
      <details open>
        <summary><a href="/de/docs/Web/EXSLT/exsl">Common (exsl)</a></summary>
        {{ListSubpagesForSidebar("/de/docs/Web/EXSLT/exsl", "", "", "exsl:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/de/docs/Web/EXSLT/math">Math (math)</a></summary>
        {{ListSubpagesForSidebar("/de/docs/Web/EXSLT/math", "", "", "math:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/de/docs/Web/EXSLT/regexp">Reguläre Ausdrücke (regexp)</a></summary>
        {{ListSubpagesForSidebar("/de/docs/Web/EXSLT/regexp", "", "", "regexp:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/de/docs/Web/EXSLT/set">Sets (set)</a></summary>
        {{ListSubpagesForSidebar("/de/docs/Web/EXSLT/set", "", "", "set:", ")")}}
      </details>
    </li>
    <li class="toggle">
      <details open>
        <summary><a href="/de/docs/Web/EXSLT/str">Strings (str)</a></summary>
        {{ListSubpagesForSidebar("/de/docs/Web/EXSLT/str", "", "", "str:", ")")}}
      </details>
    </li>
  </ol>
</section>
