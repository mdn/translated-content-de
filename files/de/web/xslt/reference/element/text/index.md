---
title: <xsl:text>
slug: Web/XSLT/Reference/Element/text
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:text>`-Element schreibt direkten Text in den Ausgabe-Baum. Es kann `#PCDATA`, direkten Text und Entitätsreferenzen enthalten.

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

  - : Bestimmt, ob Sonderzeichen beim Schreiben in die Ausgabe umgangen werden. Die verfügbaren Werte sind `yes` oder `no`. Wenn `yes` gesetzt ist, wird das Zeichen `>` zum Beispiel als `>` ausgegeben und nicht als `&gt;`.

    > [!NOTE]
    > Ältere Browser können das Ergebnis der Transformation (die "Ausgabe" unten) möglicherweise nicht serialisieren, wodurch dieses Attribut in solchen Kontexten irrelevant wird. Um HTML-Entitäten auszugeben, verwenden Sie stattdessen numerische Werte, z.B. `&#160;` für `&nbsp;`.

### Typ

Anweisung, erscheint innerhalb einer Vorlage.

## Spezifikationen

XSLT, Abschnitt 7.2

## Gecko-Unterstützung

Unterstützt wie angegeben.
