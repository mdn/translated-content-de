---
title: <xsl:message>
slug: Web/XML/XSLT/Reference/Element/message
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:message>`-Element gibt eine Nachricht aus (an die JavaScript-Konsole in NS) und beendet optional die Ausführung des Stylesheets. Es kann nützlich für das Debugging sein.

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
  - : Wenn auf `yes` gesetzt, wird angezeigt, dass die Ausführung beendet werden soll. Der Standardwert ist `no`, in diesem Fall wird die Nachricht ausgegeben und die Ausführung fortgesetzt.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 13.

## Gecko-Unterstützung

Unterstützt.
