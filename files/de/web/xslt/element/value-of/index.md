---
title: <xsl:value-of>
slug: Web/XSLT/Element/value-of
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:value-of>`-Element wertet einen XPath-Ausdruck aus, wandelt ihn in einen Zeichenfolgenwert um und schreibt diese Zeichenfolge in den Ergebnisbaum.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Erforderliche Attribute

- `select`
  - : Gibt den XPath-Ausdruck an, der ausgewertet und in den Ausgabebaum geschrieben werden soll.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Ergebnis der Transformation nicht - das "Output" unten - daher ist dieses Attribut im Kontext im Wesentlichen irrelevant. Um HTML-Entities auszugeben, verwenden Sie stattdessen numerische Werte, z.B. `&#160` für `&nbsp`)
  - : Gibt an, ob Sonderzeichen beim Schreiben in das Ausgabeformat maskiert werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` eingestellt ist, wird beispielsweise das Zeichen > als `>`, und nicht als `&gt` ausgegeben.

### Typ

Anweisung, erscheint mit einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.6.1.

## Gecko-Unterstützung

Unterstützt, außer wie oben beschrieben.
