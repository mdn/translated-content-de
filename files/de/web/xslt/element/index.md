---
title: XSLT Elements Referenz
slug: Web/XSLT/Element
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Es gibt zwei Arten von Elementen, die hier besprochen werden: Top-Level-Elemente und Anweisungen. Ein Top-Level-Element muss als Kind entweder von `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen. Eine Anweisung hingegen ist mit einer Vorlage verbunden. Ein Stylesheet kann mehrere Vorlagen enthalten. Eine dritte Art von Element, die hier nicht besprochen wird, ist das Literal-Resultat-Element (LRE). Ein LRE erscheint ebenfalls in einer Vorlage. Es besteht aus jedem Nicht-Anweisungselement, das unverändert in das Ergebnisdokument kopiert werden soll, zum Beispiel ein `<hr>`-Element in einem HTML-Konvertierungs-Stylesheet.

In diesem Zusammenhang kann jedes Attribut in einem LRE und einige Attribute einer begrenzten Anzahl von XSLT-Elementen auch eine sogenannte Attributwertvorlage enthalten. Eine Attributwertvorlage ist ein String, der einen eingebetteten XPath-Ausdruck enthält, der verwendet wird, um den Wert eines Attributs anzugeben. Zur Laufzeit wird der Ausdruck ausgewertet und das Ergebnis der Auswertung ersetzt den XPath-Ausdruck. Zum Beispiel, nehmen wir an, dass eine Variable `image-dir` wie folgt definiert ist:

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

Die folgenden Elementanmerkungen enthalten eine Beschreibung, eine Syntax-Auflistung, eine Liste der erforderlichen und optionalen Attribute, eine Beschreibung des Typs und der Position, ihre Quelle in der W3C-Empfehlung und eine Erklärung des aktuellen Gecko-Supports.

- [`<xsl:apply-imports>`](/de/docs/Web/XSLT/Element/apply-imports)
- [`<xsl:apply-templates>`](/de/docs/Web/XSLT/Element/apply-templates)
- [`<xsl:attribute>`](/de/docs/Web/XSLT/Element/attribute)
- [`<xsl:attribute-set>`](/de/docs/Web/XSLT/Element/attribute-set)
- [`<xsl:call-template>`](/de/docs/Web/XSLT/Element/call-template)
- [`<xsl:choose>`](/de/docs/Web/XSLT/Element/choose)
- [`<xsl:comment>`](/de/docs/Web/XSLT/Element/comment)
- [`<xsl:copy>`](/de/docs/Web/XSLT/Element/copy)
- [`<xsl:copy-of>`](/de/docs/Web/XSLT/Element/copy-of)
- [`<xsl:decimal-format>`](/de/docs/Web/XSLT/Element/decimal-format)
- [`<xsl:element>`](/de/docs/Web/XSLT/Element/element)
- [`<xsl:fallback>`](/de/docs/Web/XSLT/Element/fallback) _(nicht unterstützt)_
- [`<xsl:for-each>`](/de/docs/Web/XSLT/Element/for-each)
- [`<xsl:if>`](/de/docs/Web/XSLT/Element/if)
- [`<xsl:import>`](/de/docs/Web/XSLT/Element/import) _(größtenteils unterstützt)_
- [`<xsl:include>`](/de/docs/Web/XSLT/Element/include)
- [`<xsl:key>`](/de/docs/Web/XSLT/Element/key)
- [`<xsl:message>`](/de/docs/Web/XSLT/Element/message)
- [`<xsl:namespace-alias>`](/de/docs/Web/XSLT/Element/namespace-alias) _(nicht unterstützt)_
- [`<xsl:number>`](/de/docs/Web/XSLT/Element/number) _(teilweise unterstützt)_
- [`<xsl:otherwise>`](/de/docs/Web/XSLT/Element/otherwise)
- [`<xsl:output>`](/de/docs/Web/XSLT/Element/output) _(teilweise unterstützt)_
- [`<xsl:param>`](/de/docs/Web/XSLT/Element/param)
- [`<xsl:preserve-space>`](/de/docs/Web/XSLT/Element/preserve-space)
- [`<xsl:processing-instruction>`](/de/docs/Web/XSLT/Element/processing-instruction)
- [`<xsl:sort>`](/de/docs/Web/XSLT/Element/sort)
- [`<xsl:strip-space>`](/de/docs/Web/XSLT/Element/strip-space)
- [`<xsl:stylesheet>`](/de/docs/Web/XSLT/Element/stylesheet) _(teilweise unterstützt)_
- [`<xsl:template>`](/de/docs/Web/XSLT/Element/template)
- [`<xsl:text>`](/de/docs/Web/XSLT/Element/text) _(teilweise unterstützt)_
- [`<xsl:transform>`](/de/docs/Web/XSLT/Element/transform)
- [`<xsl:value-of>`](/de/docs/Web/XSLT/Element/value-of) _(teilweise unterstützt)_
- [`<xsl:variable>`](/de/docs/Web/XSLT/Element/variable)
- [`<xsl:when>`](/de/docs/Web/XSLT/Element/when)
- [`<xsl:with-param>`](/de/docs/Web/XSLT/Element/with-param)
