---
title: <xsl:template>
slug: Web/XSLT/Element/template
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:template>`-Element definiert eine Vorlage zur Erzeugung von Ausgaben. Dieses Element muss entweder das Attribut `match` oder das Attribut `name` gesetzt haben.

## Syntax

```xml
<xsl:template
  match=PATTERN
  name=NAME
  mode=NAME
  priority=NUMBER>
  <xsl:param> [optional]
  TEMPLATE
</xsl:template>
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `match`
  - : Gibt ein Muster an, das bestimmt, für welche Elemente diese Vorlage verwendet werden soll. Es ist ein erforderliches Attribut, wenn kein `name`-Attribut vorhanden ist.
- `name`
  - : Gibt einen Namen für diese Vorlage an, mit dem sie über das `<xsl:call-template>`-Element aufgerufen werden kann.
- `mode`
  - : Bestimmt einen speziellen Modus für diese Vorlage, der durch ein Attribut des `<xsl:apply-templates>`-Elements übereinstimmen kann. Dies ist nützlich, um dieselben Informationen auf unterschiedliche Weise zu verarbeiten.
- `priority`
  - : Gibt eine numerische Priorität für diese Vorlage an. Dies kann jede Zahl außer `Infinity` sein. Der Prozessor verwendet diese Zahl, wenn mehr als eine Vorlage mit demselben Knoten übereinstimmt.

### Typ

Top-Level, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 5.3.

## Gecko-Unterstützung

Unterstützt.
