---
title: <xsl:text>
slug: Web/XSLT/Element/text
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:text>`-Element schreibt literalen Text in den Ausgabebaum. Es kann `#PCDATA`, literalen Text und Entitätsreferenzen enthalten.

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

  - : Gibt an, ob Sonderzeichen beim Schreiben in die Ausgabe unescaped sind. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird zum Beispiel das Zeichen `>` als `>` und nicht als `&gt;` ausgegeben.

    > [!NOTE]
    > Ältere Browser können das Ergebnis der Transformation (die „Ausgabe“ unten) möglicherweise nicht serialisieren, was dieses Attribut in solchen Kontexten irrelevant macht. Verwenden Sie stattdessen numerische Werte, um HTML-Entitäten auszugeben, z. B. `&#160;` für `&nbsp;`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.2

## Gecko-Unterstützung

Unterstützt wie angegeben.
