---
title: <xsl:stylesheet>
slug: Web/XML/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: 46a755ea71206e4512e3639596e6f68f4e71f041
---

Das `<xsl:stylesheet>`-Element (oder das äquivalente `<xsl:transform>`-Element) ist das äußerste Element eines Stylesheets.

## Namespace-Deklaration

Ein Pseudoattribut, das benötigt wird, um das Dokument als XSLT-Stylesheet zu identifizieren. Typischerweise ist dies `xmlns:xsl="http://www.w3.org/1999/XSL/Transform"`.

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
  - : Gibt die von diesem Stylesheet benötigte XSLT-Version an.

### Optionale Attribute

- `exclude-result-prefixes`
  - : Gibt einen Namespace an, der in diesem Dokument verwendet wird und nicht an das Ausgabedokument gesendet werden soll. Die Liste ist durch Leerzeichen getrennt.
- `extension-element-prefixes`
  - : Gibt eine durch Leerzeichen getrennte Liste von Namespace-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standard-Zusammenstellung an, die von allen {{Glossary("XPath", "XPath")}}-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen und bei denen das Element als Vorfahre auftritt, es sei denn, es wird durch ein anderes `default-collation`-Attribut auf einem inneren Element überschrieben. Es bestimmt auch die Zusammenstellung, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XML/XSLT/Reference/Element/key) und `<xsl:for-each-group>`) innerhalb seines Geltungsbereichs verwendet wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XML/XSLT/Reference/Element/template)- und [`<xsl:apply-templates>`](/de/docs/Web/XML/XSLT/Reference/Element/apply-templates)-Elemente innerhalb seines Geltungsbereichs.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen, die innerhalb seines Geltungsbereichs erscheinen.
- `expand-text`
  - : Bestimmt, ob die nachfolgenden Textknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Spezifiziert eine `id` für dieses Stylesheet. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Gibt an, ob Typannotationen von dem Element entfernt werden, sodass dieselben Ergebnisse erzielt werden, unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahre haben, aus dem Stylesheet ausgeschlossen werden.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn der Elementname kein Präfix hat oder ein unpräfigierter Typname innerhalb eines XPath-Ausdrucks ist.

### Typ

Erforderliches äußerstes Element des Stylesheets.

## Spezifikationen

{{Specifications}}
