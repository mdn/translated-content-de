---
title: <xsl:copy-of>
slug: Web/XSLT/Element/copy-of
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:copy-of>`-Element erstellt eine Tiefenkopie (einschließlich der untergeordneten Knoten) von dem, was das `select`-Attribut für das Ausgabedokument angibt.

## Syntax

```xml
<xsl:copy-of select=EXPRESSION />
```

### Erforderliche Attribute

- `select`
  - : Verwendet einen XPath-Ausdruck, der angibt, was kopiert werden soll.

### Optionale Attribute

Keine.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 11.3.

## Gecko-Unterstützung

Unterstützt.
