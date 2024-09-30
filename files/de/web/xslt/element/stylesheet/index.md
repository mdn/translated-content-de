---
title: <xsl:stylesheet>
slug: Web/XSLT/Element/stylesheet
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Das `<xsl:stylesheet>`-Element (oder das äquivalente `<xsl:transform>`-Element) ist das äußerste Element eines Stylesheets.

### Namespace-Deklaration

Ein Pseudo-Attribut, das erforderlich ist, um das Dokument als XSLT-Stylesheet zu identifizieren. Typischerweise ist dies `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

## Syntax

```xml
<xsl:stylesheet
  version="NUMBER"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  id="NAME"
  extension-element-prefixes="LIST-OF-NAMES"
  exclude-result-prefixes="LIST-OF-NAMES">
    ENTIRE STYLESHEET
</xsl:stylesheet>
```

### Erforderliche Attribute

- `version`
  - : Gibt die XSLT-Version an, die von diesem Stylesheet benötigt wird.

### Optionale Attribute

- `exclude-result-prefixes`
  - : Gibt einen Namespace an, der in diesem Dokument verwendet wird und nicht an das Ausgabedokument gesendet werden soll. Die Liste ist durch Leerzeichen getrennt.
- `extension-element-prefixes`
  - : Gibt eine durch Leerzeichen getrennte Liste von Namespace-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standard-Kollation an, die von allen [XPath](/de/docs/Glossary/XPath)-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen, die das Element als Vorfahre haben, es sei denn, es wird durch ein anderes `default-collation`-Attribut auf einem inneren Element überschrieben. Sie bestimmt auch die Kollation, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XSLT/Element/key) und [`<xsl:for-each-group>`](/de/docs/Web/XSLT/Element/for-each-group)) innerhalb seines Geltungsbereichs verwendet wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XSLT/Element/template) und [`<xsl:apply-templates>`](/de/docs/Web/XSLT/Element/apply-templates)-Elemente innerhalb seines Geltungsbereichs.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen innerhalb seines Geltungsbereichs.
- `expand-text`
  - : Bestimmt, ob nachfolgende Textknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Gibt eine `id` für dieses Stylesheet an. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Gibt an, ob Typannotationen vom Element entfernt werden, sodass die gleichen Ergebnisse erzielt werden, unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahre haben, aus dem Stylesheet ausgeschlossen sind.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn das Elementname ohne Präfix ist oder ein unpräfigierter Typname innerhalb eines XPath-Ausdrucks ist.

### Typ

Erforderliches äußerstes Element des Stylesheets.

## Spezifikationen

{{Specifications}}
