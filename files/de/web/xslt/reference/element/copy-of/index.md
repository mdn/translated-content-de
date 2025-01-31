---
title: <xsl:copy-of>
slug: Web/XSLT/Reference/Element/copy-of
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:copy-of>`-Element erstellt eine tiefe Kopie (einschließlich der Nachkommensknoten) von dem, was das `select`-Attribut im Ausgabedokument angibt.

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
