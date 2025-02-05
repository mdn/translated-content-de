---
title: <xsl:template>
slug: Web/XML/XSLT/Reference/Element/template
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:template>`-Element definiert eine Vorlage, die eine Ausgabe erstellt. Dieses Element muss entweder das Attribut `match` oder das Attribut `name` gesetzt haben.

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
  - : Gibt einen bestimmten Modus für diese Vorlage an, der durch ein Attribut des `<xsl:apply-templates>`-Elements übereinstimmend sein kann. Dies ist nützlich, um dieselben Informationen auf unterschiedliche Weise zu verarbeiten.
- `priority`
  - : Gibt eine numerische Priorität für diese Vorlage an. Dies kann eine beliebige Zahl außer `Infinity` sein. Der Prozessor verwendet diese Zahl, wenn mehr als eine Vorlage mit demselben Knoten übereinstimmt.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 5.3.

## Gecko-Unterstützung

Unterstützt.
