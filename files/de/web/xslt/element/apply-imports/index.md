---
title: <xsl:apply-imports>
slug: Web/XSLT/Element/apply-imports
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:apply-imports>`-Element ist ziemlich komplex und wird hauptsächlich in anspruchsvollen Stylesheets verwendet. Aufgrund der Import-Vorrangregel haben Template-Regeln in Haupt-Stylesheets höheren Vorrang als Regeln in importierten Stylesheets. Manchmal ist es jedoch nützlich, den Prozessor dazu zu zwingen, eine Regel aus dem (niedrigeren Vorrang) importierten Stylesheet zu verwenden, anstatt einer gleichwertigen Regel im Haupt-Stylesheet.

## Syntax

```xml
<xsl:apply-imports/>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 5.6.

## Gecko-Unterstützung

Unterstützt.
