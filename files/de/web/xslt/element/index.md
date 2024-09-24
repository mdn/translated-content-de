---
title: XSLT-Elemente Referenz
slug: Web/XSLT/Element
l10n:
  sourceCommit: e3faa375b0179de77a5eff00074e3d168a0a904c
---

{{XsltSidebar}}

Es werden hier zwei Arten von Elementen besprochen: Top-Level-Elemente und Anweisungen. Ein Top-Level-Element muss als Kind von entweder `<xsl:stylesheet>` oder `<xsl:transform>` erscheinen. Eine Anweisung hingegen ist mit einer Vorlage verknüpft. Ein Stylesheet kann mehrere Vorlagen enthalten. Eine dritte Art von Elementen, die hier nicht besprochen wird, ist das wörtliche Ergebnis-Element (LRE). Ein LRE erscheint ebenfalls in einer Vorlage. Es besteht aus jedem Nicht-Anweisungselement, das unverändert in das Ergebnisdokument kopiert werden soll, beispielsweise ein `<hr>`-Element in einem HTML-Konversionsstylesheet.

In diesem Zusammenhang kann jedes Attribut in einem LRE und einige Attribute einer begrenzten Anzahl von XSLT-Elementen auch eine sogenannte Attribut-Wert-Vorlage enthalten. Eine Attribut-Wert-Vorlage ist ein String, der einen eingebetteten XPath-Ausdruck enthält, der zur Angabe des Wertes eines Attributs verwendet wird. Zur Laufzeit wird der Ausdruck ausgewertet und das Ergebnis der Auswertung wird anstelle des XPath-Ausdrucks eingefügt. Zum Beispiel setzen Sie voraus, dass eine Variable "`image-dir`" wie folgt definiert ist:

```xml
<xsl:variable name="image-dir">/images</xsl:variable>
```

Der zu bewertende Ausdruck wird in geschweifte Klammern gesetzt:

```xml
<img src="{$image-dir}/mygraphic.jpg"/>
```

Dies würde folgendes Ergebnis liefern:

```xml
<img src="/images/mygraphic.jpg"/>
```

Die folgenden Elementanmerkungen beinhalten eine Beschreibung, eine Syntaxauflistung, eine Liste der erforderlichen und optionalen Attribute, eine Beschreibung von Typ und Position, ihre Quelle in der W3C-Empfehlung und eine Erklärung des Grades der aktuellen Unterstützung durch Gecko.

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
