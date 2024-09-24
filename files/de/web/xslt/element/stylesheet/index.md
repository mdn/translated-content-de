---
title: <xsl:stylesheet>
slug: Web/XSLT/Element/stylesheet
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

{{XsltSidebar}}

Das `<xsl:stylesheet>`-Element (oder das gleichwertige `<xsl:transform>`-Element) ist das äußerste Element eines Stylesheets.

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
  - : Gibt die Version von XSLT an, die von diesem Stylesheet benötigt wird.

### Optionale Attribute

- `exclude-result-prefixes`
  - : Gibt jeden Namespace an, der in diesem Dokument verwendet wird, jedoch nicht an das Ausgabedokument gesendet werden soll. Die Liste ist durch Leerzeichen getrennt.
- `extension-element-prefixes`
  - : Gibt eine durch Leerzeichen getrennte Liste von Namespace-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standard-Kollation an, die von allen {{Glossary("XPath")}}-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen und bei denen das Element ein Vorfahre ist, es sei denn, eine andere `default-collation`-Attribut auf einem inneren Element überschreibt dies. Es bestimmt auch die Kollation, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XSLT/Element/key) und [`<xsl:for-each-group>`](/de/docs/Web/XSLT/Element/for-each-group)) in seinem Geltungsbereich verwendet wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XSLT/Element/template) und [`<xsl:apply-templates>`](/de/docs/Web/XSLT/Element/apply-templates) Elemente in seinem Geltungsbereich.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen in seinem Geltungsbereich.
- `expand-text`
  - : Bestimmt, ob nachfolgende Textknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Gibt eine `id` für dieses Stylesheet an. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Gibt an, ob Typannotationen vom Element entfernt werden, sodass unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht, die gleichen Ergebnisse erzielt werden.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahre haben, vom Stylesheet ausgeschlossen werden.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn der Elementname nicht mit einem Präfix versehen ist oder ein unverpräfixter Typname innerhalb eines XPath-Ausdrucks vorliegt.

### Typ

Erforderliches äußeres Element des Stylesheets.

## Spezifikationen

{{Specifications}}
