---
title: <xsl:message>
slug: Web/XSLT/Element/message
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:message>`-Element gibt eine Nachricht aus (in der JavaScript-Konsole von NS) und beendet optional die Ausführung des Stylesheets. Es kann nützlich zum Debuggen sein.

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
  - : Auf `yes` gesetzt, zeigt an, dass die Ausführung beendet werden soll. Der Standardwert ist `no`, in diesem Fall wird die Nachricht ausgegeben und die Ausführung fortgesetzt.

### Typ

Instruktion, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 13.

## Browser-Kompatibilität

Unterstützt.
