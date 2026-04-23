---
title: <xsl:message>
slug: Web/XML/XSLT/Reference/Element/message
l10n:
  sourceCommit: 03805fdedbc5126374fd9149e5886cb066c2515d
---

Das `<xsl:message>`-Element gibt eine Nachricht aus (an die JavaScript-Konsole im Browser) und kann optional die Ausführung des Stylesheets beenden. Es kann nützlich für das Debugging sein.

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
