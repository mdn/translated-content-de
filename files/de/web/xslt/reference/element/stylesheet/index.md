---
title: <xsl:stylesheet>
slug: Web/XSLT/Reference/Element/stylesheet
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:stylesheet>`-Element (oder das dazu äquivalente `<xsl:transform>`-Element) ist das äußerste Element eines Stylesheets.

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
  - : Gibt alle Namespaces an, die in diesem Dokument verwendet werden und nicht an das Ausgabedokument gesendet werden sollen. Die Liste ist durch Leerzeichen getrennt.
- `extension-element-prefixes`
  - : Gibt eine durch Leerzeichen getrennte Liste von Namespace-Präfixen für Erweiterungselemente in diesem Dokument an.
- `default-collation`
  - : Gibt die Standard-Sortierreihenfolge an, die von allen {{Glossary("XPath", "XPath")}}-Ausdrücken verwendet wird, die in Attributen oder Textwertvorlagen erscheinen, die das Element als Vorfahren haben, es sei denn, sie wird durch ein anderes `default-collation`-Attribut in einem inneren Element überschrieben. Sie bestimmt auch die Sortierreihenfolge, die von bestimmten XSLT-Konstrukten (wie [`<xsl:key>`](/de/docs/Web/XSLT/Reference/Element/key) und [`<xsl:for-each-group>`](/de/docs/Web/XSLT/Element/for-each-group)) innerhalb ihres Geltungsbereichs verwendet wird.
- `default-mode`
  - : Definiert den Standardwert für das `mode`-Attribut aller [`<xsl:template>`](/de/docs/Web/XSLT/Reference/Element/template) und [`<xsl:apply-templates>`](/de/docs/Web/XSLT/Reference/Element/apply-templates) Elemente innerhalb seines Geltungsbereichs.
- `default-validation`
  - : Definiert den Standardwert des `validation`-Attributs aller relevanten Anweisungen, die innerhalb seines Geltungsbereichs erscheinen.
- `expand-text`
  - : Bestimmt, ob Nachkommen-Textknoten des Elements als Textwertvorlagen behandelt werden.
- `id`
  - : Gibt eine `id` für dieses Stylesheet an. Dies wird am häufigsten verwendet, wenn das Stylesheet in ein anderes XML-Dokument eingebettet ist.
- `input-type-annotations`
  - : Gibt an, ob Typannotationen vom Element entfernt werden, sodass dieselben Ergebnisse erzielt werden, unabhängig davon, ob die Quelldokumente gegen ein Schema validiert wurden oder nicht.
- `use-when`
  - : Bestimmt, ob das Element und alle Knoten, die es als Vorfahren haben, vom Stylesheet ausgeschlossen werden.
- `xpath-default-namespace`
  - : Gibt den Namespace an, der verwendet wird, wenn der Elementname in einem XPath-Ausdruck nicht mit einem Präfix versehen ist oder ein nicht mit einem Präfix versehener Typname.

### Typ

Erforderliches äußerstes Element des Stylesheets.

## Spezifikationen

{{Specifications}}
