---
title: <xsl:stylesheet>
slug: Web/XML/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

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
  - : Gibt die Version von XSLT an, die für dieses Stylesheet benötigt wird.

### Optionale Attribute

- `exclude-result-prefixes`
  - : Gibt jeden Namespace an, der in diesem Dokument verwendet wird und nicht an das Ausgabedokument weitergegeben werden soll. Die Liste ist leerzeichengetrennt.
- `extension-element-prefixes`
  - : Gibt eine leerzeichengetrennte Liste von Namespace-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standard-Kollation an, die von allen {{Glossary("XPath", "XPath")}}-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen und dieses Element als Vorfahren haben, es sei denn, sie wird durch ein anderes `default-collation`-Attribut in einem inneren Element überschrieben. Sie bestimmt auch die Kollation, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XML/XSLT/Reference/Element/key) und [`<xsl:for-each-group>`](/de/docs/Web/XSLT/Element/for-each-group)) innerhalb ihres Geltungsbereichs genutzt wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XML/XSLT/Reference/Element/template)- und [`<xsl:apply-templates>`](/de/docs/Web/XML/XSLT/Reference/Element/apply-templates)-Elemente innerhalb ihres Geltungsbereichs.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen innerhalb des Geltungsbereichs.
- `expand-text`
  - : Bestimmt, ob die Nachkommen-Textknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Gibt eine `id` für dieses Stylesheet an. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Gibt an, ob Typannotationen vom Element entfernt werden, sodass die gleichen Ergebnisse erzielt werden, unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahren haben, aus dem Stylesheet ausgeschlossen werden.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn der Elementname oder ein unverändertes Typname innerhalb eines XPath-Ausdrucks kein Präfix hat.

### Typ

Erforderliches äußerstes Element eines Stylesheets.

## Spezifikationen

{{Specifications}}
