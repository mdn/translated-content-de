---
title: Transformation von XML mit XSLT
slug: Web/XSLT/Transforming_XML_with_XSLT
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

## Ein Überblick

[Ein Überblick](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/An_Overview)

Die Trennung von Inhalt und Darstellung ist ein wesentliches Designelement von [XML](/de/docs/Web/XML). Die Struktur eines XML-Dokuments ist so gestaltet, dass sie wichtige Beziehungen zwischen den einzelnen Aspekten des Inhalts selbst widerspiegelt und verdeutlicht, ohne dass ein Hinweis darauf gegeben wird, wie diese Daten letztendlich dargestellt werden sollen. Diese intelligente Strukturierung ist besonders wichtig, da immer mehr Datentransfers automatisiert werden und zwischen stark heterogenen Maschinen stattfinden, die durch ein Netzwerk verbunden sind.

Dennoch muss der Großteil der Inhalte, die in XML-Dokumenten gespeichert sind, letztendlich menschlichen Lesern präsentiert werden. Da ein Browser eine vertraute und hochgradig flexible Benutzeroberfläche bietet, ist er ein ideales Mittel, um solche Präsentationsversionen von XML-Inhalten bereitzustellen. Firefox, von Grund auf unter Verwendung einer Vielzahl von XML-Technologien gebaut, integriert alle Mechanismen zur Verarbeitung sowohl von Original-XML-Dokumenten als auch der spezialisierten Stylesheets, die verwendet werden, um sie für die HTML-Anzeige zu stylen und darzustellen, und reduziert die Serverlast durch Client-seitige Verarbeitung.

Derzeit unterstützt Gecko (die Layout-Engine hinter Firefox) zwei Formen von XML-Stylesheets. Für die grundlegende Kontrolle des Erscheinungsbilds – Schriftarten, Farben, Positionen usw. – verwendet Gecko [CSS](/de/docs/Web/CSS).

Unser Fokus liegt hier auf der zweiten Art von Stylesheet, die Gecko unterstützt: das XSLT-Stylesheet. XSLT steht für eXtensible Stylesheet Language/Transform, und der Name ist passend. XSLT erlaubt es einem Stylesheet-Autor, ein primäres XML-Dokument auf zwei wesentliche Arten zu transformieren: Manipulation und Sortierung des Inhalts, einschließlich einer vollständigen Neuanordnung, falls gewünscht, und Transformation des Inhalts in ein anderes Format (im Fall von Firefox liegt der Fokus darauf, es sofort in HTML umzuwandeln, das dann vom Browser angezeigt werden kann).

## XSLT/XPath-Referenz

### Elemente

[Elemente](/de/docs/Web/XSLT/Element)

- [xsl:apply-imports](/de/docs/Web/XSLT/Element/apply-imports) _(unterstützt)_
- [xsl:apply-templates](/de/docs/Web/XSLT/Element/apply-templates) _(unterstützt)_
- [xsl:attribute](/de/docs/Web/XSLT/Element/attribute) _(unterstützt)_
- [xsl:attribute-set](/de/docs/Web/XSLT/Element/attribute-set) _(unterstützt)_
- [xsl:call-template](/de/docs/Web/XSLT/Element/call-template) _(unterstützt)_
- [xsl:choose](/de/docs/Web/XSLT/Element/choose) _(unterstützt)_
- [xsl:comment](/de/docs/Web/XSLT/Element/comment) _(unterstützt)_
- [xsl:copy](/de/docs/Web/XSLT/Element/copy) _(unterstützt)_
- [xsl:copy-of](/de/docs/Web/XSLT/Element/copy-of) _(unterstützt)_
- [xsl:decimal-format](/de/docs/Web/XSLT/Element/decimal-format) _(unterstützt)_
- [xsl:element](/de/docs/Web/XSLT/Element/element) _(unterstützt)_
- [xsl:fallback](/de/docs/Web/XSLT/Element/fallback) _(nicht unterstützt)_
- [xsl:for-each](/de/docs/Web/XSLT/Element/for-each) _(unterstützt)_
- [xsl:if](/de/docs/Web/XSLT/Element/if) _(unterstützt)_
- [xsl:import](/de/docs/Web/XSLT/Element/import) _(weitestgehend unterstützt)_
- [xsl:include](/de/docs/Web/XSLT/Element/include) _(unterstützt)_
- [xsl:key](/de/docs/Web/XSLT/Element/key) _(unterstützt)_
- [xsl:message](/de/docs/Web/XSLT/Element/message) _(unterstützt)_
- [xsl:namespace-alias](/de/docs/Web/XSLT/Element/namespace-alias) _(nicht unterstützt)_
- [xsl:number](/de/docs/Web/XSLT/Element/number) _(teilweise unterstützt)_
- [xsl:otherwise](/de/docs/Web/XSLT/Element/otherwise) _(unterstützt)_
- [xsl:output](/de/docs/Web/XSLT/Element/output) _(teilweise unterstützt)_
- [xsl:param](/de/docs/Web/XSLT/Element/param) _(unterstützt)_
- [xsl:preserve-space](/de/docs/Web/XSLT/Element/preserve-space) _(unterstützt)_
- [xsl:processing-instruction](/de/docs/Web/XSLT/Element/processing-instruction)
- [xsl:sort](/de/docs/Web/XSLT/Element/sort) _(unterstützt)_
- [xsl:strip-space](/de/docs/Web/XSLT/Element/strip-space) _(unterstützt)_
- [xsl:stylesheet](/de/docs/Web/XSLT/Element/stylesheet) _(teilweise unterstützt)_
- [xsl:template](/de/docs/Web/XSLT/Element/template) _(unterstützt)_
- [xsl:text](/de/docs/Web/XSLT/Element/text) _(teilweise unterstützt)_
- [xsl:transform](/de/docs/Web/XSLT/Element/transform) _(unterstützt)_
- [xsl:value-of](/de/docs/Web/XSLT/Element/value-of) _(teilweise unterstützt)_
- [xsl:variable](/de/docs/Web/XSLT/Element/variable) _(unterstützt)_
- [xsl:when](/de/docs/Web/XSLT/Element/when) _(unterstützt)_
- [xsl:with-param](/de/docs/Web/XSLT/Element/with-param) _(unterstützt)_

### Achsen

[Achsen](/de/docs/Web/XPath/Axes)

- [ancestor](/de/docs/Web/XPath/Axes#ancestor)
- [ancestor-or-self](/de/docs/Web/XPath/Axes#ancestor-or-self)
- [attribute](/de/docs/Web/XPath/Axes#attribute)
- [child](/de/docs/Web/XPath/Axes#child)
- [descendant](/de/docs/Web/XPath/Axes#descendant)
- [descendant-or-self](/de/docs/Web/XPath/Axes#descendant-or-self)
- [following](/de/docs/Web/XPath/Axes#following)
- [following-sibling](/de/docs/Web/XPath/Axes#following-sibling)
- [namespace](/de/docs/Web/XPath/Axes#namespace) _(nicht unterstützt)_
- [parent](/de/docs/Web/XPath/Axes#parent)
- [preceding](/de/docs/Web/XPath/Axes#preceding)
- [preceding-sibling](/de/docs/Web/XPath/Axes#preceding-sibling)
- [self](/de/docs/Web/XPath/Axes#self)

### Funktionen

[Funktionen](/de/docs/Web/XPath/Functions)

- [boolean()](/de/docs/Web/XPath/Functions/boolean) _(unterstützt)_
- [ceiling()](/de/docs/Web/XPath/Functions/ceiling) _(unterstützt)_
- [concat()](/de/docs/Web/XPath/Functions/concat) _(unterstützt)_
- [contains()](/de/docs/Web/XPath/Functions/contains) _(unterstützt)_
- [count()](/de/docs/Web/XPath/Functions/count) _(unterstützt)_
- [current()](/de/docs/Web/XPath/Functions/current) _(unterstützt)_
- [document()](/de/docs/Web/XPath/Functions/document) _(unterstützt)_
- [element-available()](/de/docs/Web/XPath/Functions/element-available) _(unterstützt)_
- [false()](/de/docs/Web/XPath/Functions/false) _(unterstützt)_
- [floor()](/de/docs/Web/XPath/Functions/floor) _(unterstützt)_
- [format-number()](/de/docs/Web/XPath/Functions/format-number) _(unterstützt)_
- [function-available()](/de/docs/Web/XPath/Functions/function-available) _(unterstützt)_
- [generate-id()](/de/docs/Web/XPath/Functions/generate-id) _(unterstützt)_
- [id()](/de/docs/Web/XPath/Functions/id) _(teilweise unterstützt)_
- [key()](/de/docs/Web/XPath/Functions/key) _(unterstützt)_
- [lang()](/de/docs/Web/XPath/Functions/lang) _(unterstützt)_
- [last()](/de/docs/Web/XPath/Functions/last) _(unterstützt)_
- [local-name()](/de/docs/Web/XPath/Functions/local-name) _(unterstützt)_
- [name()](/de/docs/Web/XPath/Functions/name) _(unterstützt)_
- [namespace-uri()](/de/docs/Web/XPath/Functions/namespace-uri) _(unterstützt)_
- [normalize-space()](/de/docs/Web/XPath/Functions/normalize-space) _(unterstützt)_
- [not()](/de/docs/Web/XPath/Functions/not) _(unterstützt)_
- [number()](/de/docs/Web/XPath/Functions/number) _(unterstützt)_
- [position()](/de/docs/Web/XPath/Functions/position) _(unterstützt)_
- [round()](/de/docs/Web/XPath/Functions/round) _(unterstützt)_
- [starts-with()](/de/docs/Web/XPath/Functions/starts-with) _(unterstützt)_
- [string()](/de/docs/Web/XPath/Functions/string) _(unterstützt)_
- [string-length()](/de/docs/Web/XPath/Functions/string-length) _(unterstützt)_
- [substring()](/de/docs/Web/XPath/Functions/substring) _(unterstützt)_
- [substring-after()](/de/docs/Web/XPath/Functions/substring-after) _(unterstützt)_
- [substring-before()](/de/docs/Web/XPath/Functions/substring-before) _(unterstützt)_
- [sum()](/de/docs/Web/XPath/Functions/sum) _(unterstützt)_
- [system-property()](/de/docs/Web/XPath/Functions/system-property) _(unterstützt)_
- [translate()](/de/docs/Web/XPath/Functions/translate) _(unterstützt)_
- [true()](/de/docs/Web/XPath/Functions/true) _(unterstützt)_
- [unparsed-entity-url()](/de/docs/Web/XPath/Functions/unparsed-entity-url) _(nicht unterstützt)_

## Weiterführende Literatur

[Weiterführende Literatur](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading)

- [Bücher](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#books)
- [Digital](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#digital)

  - [Webseiten](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#websites)
  - [Artikel](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#articles)
  - [Tutorials/Beispiele](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#tutorialsexamples)
  - [Andere](/de/docs/Web/XSLT/Transforming_XML_with_XSLT/For_Further_Reading#other)

## Informationen zum Originaldokument

- Urheberrechtliche Informationen: Urheberrecht © 2001-2003 Netscape. Alle Rechte vorbehalten.
- Hinweis: Dieser nachgedruckte Artikel war ursprünglich Teil der DevEdge-Website.
