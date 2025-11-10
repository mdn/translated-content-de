---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `<xsl:text>`-Element schreibt wörtlichen Text in den Ausgabebaum. Es kann `#PCDATA`, wörtlichen Text und Entitätsreferenzen enthalten.

## Syntax

```xml
<xsl:text disable-output-escaping="yes" | "no">
  TEXT
</xsl:text>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `disable-output-escaping`

  - : Gibt an, ob Sonderzeichen beim Schreiben in die Ausgabe umgewandelt werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird zum Beispiel das Zeichen `>` als `>` ausgegeben und nicht als `&gt;`.

    > [!NOTE]
    > Ältere Browser könnten das Ergebnis der Transformation (die "Ausgabe" unten) nicht serialisieren, was dieses Attribut in solchen Kontexten irrelevant macht. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z.B. `&#160;` für `&nbsp;`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.2

## Gecko-Unterstützung

Unterstützt wie angegeben.
