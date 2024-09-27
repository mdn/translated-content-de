---
title: <xsl:value-of>
slug: Web/XSLT/Element/value-of
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:value-of>`-Element wertet einen XPath-Ausdruck aus, konvertiert ihn in einen String und schreibt diesen String in den Ergebnisbaum.

## Syntax

```xml
<xsl:value-of select=EXPRESSION disable-output-escaping="yes" | "no"  />
```

### Erforderliche Attribute

- `select`
  - : Gibt den XPath-Ausdruck an, der ausgewertet und in den Ausgabebaum geschrieben wird.

### Optionale Attribute

- `disable-output-escaping` (Netscape serialisiert das Transformationsergebnis - das "Output" unten - nicht, daher ist dieses Attribut im Kontext im Wesentlichen irrelevant. Um HTML-Entities auszugeben, verwenden Sie stattdessen numerische Werte, z. B. `&#160` für `&nbsp`)
  - : Gibt an, ob Sonderzeichen beim Schreiben in die Ausgabe umschrieben werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird beispielsweise das Zeichen > als `>` ausgegeben und nicht als `&gt`.

### Typ

Anweisung, erscheint mit einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.6.1.

## Gecko-Unterstützung

Unterstützt, außer wie oben.
