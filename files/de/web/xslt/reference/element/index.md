---
title: XSLT-Elemente-Referenz
short-title: Elements
slug: Web/XSLT/Reference/Element
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Es gibt zwei Typen von Elementen, die hier besprochen werden: Top-Level-Elemente und Anweisungen. Ein Top-Level-Element muss als Kind von entweder `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen. Eine Anweisung hingegen ist mit einer Vorlage verbunden. Ein Stylesheet kann mehrere Vorlagen enthalten. Ein dritter Elementtyp, der hier nicht besprochen wird, ist das Literal Result Element (LRE). Ein LRE erscheint ebenfalls in einer Vorlage. Es besteht aus jedem Nicht-Anweisungs-Element, das unverändert in das Ergebnisdokument kopiert werden soll, zum Beispiel ein `<hr>`-Element in einem HTML-Konvertierungsstylesheet.

In diesem Zusammenhang kann jedes Attribut in einem LRE und einige Attribute einer begrenzten Anzahl von XSLT-Elementen auch eine sogenannte Attributwertvorlage enthalten. Eine Attributwertvorlage ist eine Zeichenfolge, die einen eingebetteten XPath-Ausdruck enthält, der verwendet wird, um den Wert eines Attributs anzugeben. Zur Laufzeit wird der Ausdruck ausgewertet und das Ergebnis der Auswertung ersetzt den XPath-Ausdruck. Zum Beispiel nehmen wir an, dass eine Variable `image-dir` wie folgt definiert ist:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

Der auszuwertende Ausdruck wird in geschweifte Klammern gesetzt:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

Dies würde zu folgendem Ergebnis führen:

```xml
<img src="/images/mygraphic.jpg"/>
```

Die folgenden Elementanmerkungen beinhalten eine Beschreibung, eine Syntaxauflistung, eine Liste von erforderlichen und optionalen Attributen, eine Beschreibung des Typs und der Position, die Quelle in der W3C-Empfehlung und eine Erklärung des Grads der aktuellen Gecko-Unterstützung.

- [`<xsl:apply-imports>`](/de/docs/Web/XSLT/Reference/Element/apply-imports)
- [`<xsl:apply-templates>`](/de/docs/Web/XSLT/Reference/Element/apply-templates)
- [`<xsl:attribute>`](/de/docs/Web/XSLT/Reference/Element/attribute)
- [`<xsl:attribute-set>`](/de/docs/Web/XSLT/Reference/Element/attribute-set)
- [`<xsl:call-template>`](/de/docs/Web/XSLT/Reference/Element/call-template)
- [`<xsl:choose>`](/de/docs/Web/XSLT/Reference/Element/choose)
- [`<xsl:comment>`](/de/docs/Web/XSLT/Reference/Element/comment)
- [`<xsl:copy>`](/de/docs/Web/XSLT/Reference/Element/copy)
- [`<xsl:copy-of>`](/de/docs/Web/XSLT/Reference/Element/copy-of)
- [`<xsl:decimal-format>`](/de/docs/Web/XSLT/Reference/Element/decimal-format)
- [`<xsl:element>`](/de/docs/Web/XSLT/Reference/Element/element)
- [`<xsl:fallback>`](/de/docs/Web/XSLT/Reference/Element/fallback) _(nicht unterstützt)_
- [`<xsl:for-each>`](/de/docs/Web/XSLT/Reference/Element/for-each)
- [`<xsl:if>`](/de/docs/Web/XSLT/Reference/Element/if)
- [`<xsl:import>`](/de/docs/Web/XSLT/Reference/Element/import) _(größtenteils unterstützt)_
- [`<xsl:include>`](/de/docs/Web/XSLT/Reference/Element/include)
- [`<xsl:key>`](/de/docs/Web/XSLT/Reference/Element/key)
- [`<xsl:message>`](/de/docs/Web/XSLT/Reference/Element/message)
- [`<xsl:namespace-alias>`](/de/docs/Web/XSLT/Reference/Element/namespace-alias) _(nicht unterstützt)_
- [`<xsl:number>`](/de/docs/Web/XSLT/Reference/Element/number) _(teilweise unterstützt)_
- [`<xsl:otherwise>`](/de/docs/Web/XSLT/Reference/Element/otherwise)
- [`<xsl:output>`](/de/docs/Web/XSLT/Reference/Element/output) _(teilweise unterstützt)_
- [`<xsl:param>`](/de/docs/Web/XSLT/Reference/Element/param)
- [`<xsl:preserve-space>`](/de/docs/Web/XSLT/Reference/Element/preserve-space)
- [`<xsl:processing-instruction>`](/de/docs/Web/XSLT/Reference/Element/processing-instruction)
- [`<xsl:sort>`](/de/docs/Web/XSLT/Reference/Element/sort)
- [`<xsl:strip-space>`](/de/docs/Web/XSLT/Reference/Element/strip-space)
- [`<xsl:stylesheet>`](/de/docs/Web/XSLT/Reference/Element/stylesheet) _(teilweise unterstützt)_
- [`<xsl:template>`](/de/docs/Web/XSLT/Reference/Element/template)
- [`<xsl:text>`](/de/docs/Web/XSLT/Reference/Element/text) _(teilweise unterstützt)_
- [`<xsl:transform>`](/de/docs/Web/XSLT/Reference/Element/transform)
- [`<xsl:value-of>`](/de/docs/Web/XSLT/Reference/Element/value-of) _(teilweise unterstützt)_
- [`<xsl:variable>`](/de/docs/Web/XSLT/Reference/Element/variable)
- [`<xsl:when>`](/de/docs/Web/XSLT/Reference/Element/when)
- [`<xsl:with-param>`](/de/docs/Web/XSLT/Reference/Element/with-param)
