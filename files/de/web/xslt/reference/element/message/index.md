---
title: <xsl:message>
slug: Web/XSLT/Reference/Element/message
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:message>`-Element gibt eine Nachricht aus (an die JavaScript-Konsole in NS) und beendet optional die Ausführung des Stylesheets. Dies kann nützlich zum Debuggen sein.

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
