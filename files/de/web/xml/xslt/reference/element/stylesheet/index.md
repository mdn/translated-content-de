---
title: <xsl:stylesheet>
slug: Web/XML/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Das `<xsl:stylesheet>`-Element (oder das äquivalente `<xsl:transform>`-Element) ist das äußerste Element eines Stylesheets.

## Namespace-Deklaration

Ein Pseudo-Attribut, das erforderlich ist, um das Dokument als XSLT-Stylesheet zu identifizieren. Normalerweise ist dies `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

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
  - : Gibt jeden Namespace an, der in diesem Dokument verwendet wird und nicht an das Ausgabedokument gesendet werden soll. Die Liste ist durch Leerzeichen getrennt.
- `extension-element-prefixes`
  - : Gibt eine durch Leerzeichen getrennte Liste von Namensraum-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standardvergleichsreihenfolge an, die von allen {{Glossary("XPath", "XPath")}}-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen und die das Element als Vorfahre haben, es sei denn, sie wird durch ein anderes `default-collation`-Attribut auf einem inneren Element überschrieben. Sie bestimmt auch die Vergleichsreihenfolge, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XML/XSLT/Reference/Element/key) und [`<xsl:for-each-group>`](/de/docs/Web/XSLT/Element/for-each-group)) innerhalb ihres Bereichs verwendet wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XML/XSLT/Reference/Element/template) und [`<xsl:apply-templates>`](/de/docs/Web/XML/XSLT/Reference/Element/apply-templates) Elemente innerhalb ihres Bereichs.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen, die innerhalb ihres Bereichs erscheinen.
- `expand-text`
  - : Bestimmt, ob Nachkommentextknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Gibt eine `id` für dieses Stylesheet an. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Bestimmt, ob Typ-Anmerkungen vom Element entfernt werden, sodass dieselben Ergebnisse erzielt werden, unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahren haben, aus dem Stylesheet ausgeschlossen sind.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn der Elementname oder ein nicht-präfixierter Typname innerhalb eines XPath-Ausdrucks ohne Präfix ist.

### Typ

Erforderliches äußerstes Element des Stylesheets.

## Spezifikationen

{{Specifications}}
