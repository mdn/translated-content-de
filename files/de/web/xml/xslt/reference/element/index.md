---
title: XSLT-Elementreferenz
short-title: Elements
slug: Web/XML/XSLT/Reference/Element
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Es gibt zwei Arten von Elementen, die hier besprochen werden: Top-Level-Elemente und Anweisungen. Ein Top-Level-Element muss als Kind von entweder `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen. Eine Anweisung hingegen ist mit einer Vorlage verbunden. Ein Stylesheet kann mehrere Vorlagen enthalten. Eine dritte Art von Element, die hier nicht behandelt wird, ist das Literal Result Element (LRE). Ein LRE erscheint ebenfalls in einer Vorlage. Es besteht aus jedem Nicht-Anweisungs-Element, das unverändert in das Ergebnisdokument übernommen werden soll, beispielsweise ein `<hr>`-Element in einem HTML-Konvertierungsstylesheet.

In diesem Zusammenhang können auch beliebige Attribute in einem LRE und einige Attribute einer begrenzten Anzahl von XSLT-Elementen sogenannte Attributwertvorlagen enthalten. Eine Attributwertvorlage ist ein String, der einen eingebetteten XPath-Ausdruck enthält, der verwendet wird, um den Wert eines Attributs zu spezifizieren. Zur Laufzeit wird der Ausdruck ausgewertet, und das Ergebnis der Auswertung wird anstelle des XPath-Ausdrucks eingesetzt. Zum Beispiel nehmen wir an, dass eine Variable `image-dir` wie folgt definiert wird:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

Der Ausdruck, der ausgewertet werden soll, wird in geschweifte Klammern gesetzt:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

Dies würde zu folgendem Ergebnis führen:

```xml
<img src="/images/mygraphic.jpg"/>
```

Die folgenden Elemente enthalten Beschreibungen, eine Syntaxauflistung, eine Liste der erforderlichen und optionalen Attribute, eine Beschreibung des Typs und der Position, die Quelle in der W3C-Empfehlung sowie eine Erläuterung des Grades der aktuellen Gecko-Unterstützung.

- [`<xsl:apply-imports>`](/de/docs/Web/XML/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/de/docs/Web/XML/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/de/docs/Web/XML/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/de/docs/Web/XML/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/de/docs/Web/XML/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/de/docs/Web/XML/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/de/docs/Web/XML/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/de/docs/Web/XML/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/de/docs/Web/XML/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/de/docs/Web/XML/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/de/docs/Web/XML/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/de/docs/Web/XML/XSLT/Reference/Element/fallback) _(nicht unterstützt)_
- [`<xsl:for-each>`](/de/docs/Web/XML/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/de/docs/Web/XML/XSLT/Reference/Element/if)
- [`<xsl:import>`](/de/docs/Web/XML/XSLT/Reference/Element/import) _(größtenteils unterstützt)_
- [`<xsl:include>`](/de/docs/Web/XML/XSLT/Reference/Element/include)
- [`<xsl:key>`](/de/docs/Web/XML/XSLT/Reference/Element/key)
- [`<xsl:message>`](/de/docs/Web/XML/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/de/docs/Web/XML/XSLT/Reference/Element/namespace-alias) _(nicht unterstützt)_
- [`<xsl:number>`](/de/docs/Web/XML/XSLT/Reference/Element/number) _(teilweise unterstützt)_
- [`<xsl:otherwise>`](/de/docs/Web/XML/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/de/docs/Web/XML/XSLT/Reference/Element/output) _(teilweise unterstützt)_
- [`<xsl:param>`](/de/docs/Web/XML/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/de/docs/Web/XML/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/de/docs/Web/XML/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/de/docs/Web/XML/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/de/docs/Web/XML/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/de/docs/Web/XML/XSLT/Reference/Element/stylesheet) _(teilweise unterstützt)_
- [`<xsl:template>`](/de/docs/Web/XML/XSLT/Reference/Element/template)
- [`<xsl:text>`](/de/docs/Web/XML/XSLT/Reference/Element/text) _(teilweise unterstützt)_
- [`<xsl:transform>`](/de/docs/Web/XML/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/de/docs/Web/XML/XSLT/Reference/Element/value-of) _(teilweise unterstützt)_
- [`<xsl:variable>`](/de/docs/Web/XML/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/de/docs/Web/XML/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/de/docs/Web/XML/XSLT/Reference/Element/with-param)
