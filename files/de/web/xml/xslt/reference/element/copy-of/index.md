---
title: <xsl:copy-of>
slug: Web/XML/XSLT/Reference/Element/copy-of
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:copy-of>`-Element erstellt eine tiefe Kopie (einschließlich der untergeordneten Knoten) von dem, was das `select`-Attribut für das Ausgabedokument angibt.

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
