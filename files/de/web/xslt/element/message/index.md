---
title: <xsl:message>
slug: Web/XSLT/Element/message
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:message>`-Element gibt eine Nachricht aus (in der JavaScript-Konsole in NS) und beendet optional die Ausführung des Stylesheets. Es kann nützlich für das Debugging sein.

## Syntax

```xml
<xsl:message terminate="yes" | "no" >
  TEMPLATE
</xsl:message>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `terminate`
  - : Wenn auf `yes` gesetzt, bedeutet das, dass die Ausführung beendet werden soll. Der Standardwert ist `no`, in welchem Fall die Nachricht ausgegeben wird und die Ausführung fortgesetzt wird.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 13.

## Gecko-Unterstützung

Unterstützt.
