---
title: <xsl:text>
slug: Web/XML/XSLT/Reference/Element/text
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
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

  - : Legt fest, ob Sonderzeichen beim Schreiben in die Ausgabe maskiert werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird beispielsweise das Zeichen `>` als `>` ausgegeben und nicht als `&gt;`.

    > [!NOTE]
    > Ältere Browser könnten das Ergebnis der Transformation (die "Ausgabe" unten) nicht serialisieren, wodurch dieses Attribut in solchen Kontexten irrelevant ist. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z. B. `&#160;` für `&nbsp;`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.2

## Gecko-Unterstützung

Unterstützt wie angegeben.
