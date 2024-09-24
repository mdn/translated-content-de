---
title: <xsl:message>
slug: Web/XSLT/Element/message
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:message>`-Element gibt eine Nachricht (in die JavaScript-Konsole in NS) aus und kann optional die Ausführung des Stylesheets beenden. Es kann nützlich für das Debugging sein.

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
  - : Wenn auf "`yes`" gesetzt, zeigt dies an, dass die Ausführung beendet werden soll. Der Standardwert ist "`no`", in diesem Fall wird die Nachricht ausgegeben und die Ausführung fortgesetzt.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 13.

## Gecko-Unterstützung

Unterstützt.
