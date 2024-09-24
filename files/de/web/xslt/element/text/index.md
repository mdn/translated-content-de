---
title: <xsl:text>
slug: Web/XSLT/Element/text
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:text>`-Element schreibt wörtlichen Text in den Ausgabebaum. Es kann `#PCDATA`, wörtlichen Text und Entity-Referenzen enthalten.

## Syntax

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Ergebnis der Transformation nicht - das untenstehende „Output“ -, daher ist dieses Attribut im Kontext im Wesentlichen irrelevant. Um HTML-Entities auszugeben, verwenden Sie stattdessen numerische Werte, z. B. `&#160;` für `&nbsp;`)
  - : Gibt an, ob Sonderzeichen bei der Ausgabe maskiert werden. Die verfügbaren Werte sind "`yes`" oder "`no`". Wenn "`yes`" gesetzt ist, wird zum Beispiel das Zeichen `>` als `>` und nicht als `&gt;` ausgegeben.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.2

## Gecko-Unterstützung

Unterstützt wie angegeben.
