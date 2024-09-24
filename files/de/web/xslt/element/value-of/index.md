---
title: <xsl:value-of>
slug: Web/XSLT/Element/value-of
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:value-of>`-Element wertet einen XPath-Ausdruck aus, wandelt ihn in einen String um und schreibt diesen String in den Ergebnisbaum.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Erforderliche Attribute

- `select`
  - : Gibt den XPath-Ausdruck an, der ausgewertet und in den Ausgabe-Baum geschrieben werden soll.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Ergebnis der Transformation nicht - das "Output" unten - daher ist dieses Attribut im Kontext im Wesentlichen irrelevant. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z.B. `&#160` für `&nbsp`.)
  - : Gibt an, ob Sonderzeichen bei der Ausgabe maskiert werden. Die verfügbaren Werte sind "`yes`" oder "`no`". Wenn "`yes`" gesetzt ist, wird zum Beispiel das Zeichen > als `>` ausgegeben, nicht als "`&gt`".

### Typ

Anweisung, erscheint mit einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.6.1.

## Gecko-Unterstützung

Unterstützt, außer wie oben beschrieben.
