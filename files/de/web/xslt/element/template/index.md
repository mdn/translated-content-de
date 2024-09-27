---
title: <xsl:template>
slug: Web/XSLT/Element/template
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:template>`-Element definiert eine Vorlage, die eine Ausgabe erzeugt. Dieses Element muss entweder das Attribut `match` oder das Attribut `name` gesetzt haben.

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
  - : Gibt ein Muster an, das die Elemente bestimmt, für die diese Vorlage verwendet werden soll. Es ist ein erforderliches Attribut, wenn kein `name`-Attribut vorhanden ist.
- `name`
  - : Gibt einen Namen für diese Vorlage an, unter dem sie durch das `<xsl:call-template>`-Element aufgerufen werden kann.
- `mode`
  - : Gibt einen speziellen Modus für diese Vorlage an, der durch ein Attribut des `<xsl:apply-templates>`-Elements abgeglichen werden kann. Dies ist nützlich, um dieselben Informationen auf mehrere Weisen zu verarbeiten.
- `priority`
  - : Gibt eine numerische Priorität für diese Vorlage an. Dies kann jede Zahl außer `Infinity` sein. Der Prozessor verwendet diese Zahl, wenn mehr als eine Vorlage mit demselben Knoten übereinstimmt.

### Typ

Top-level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 5.3.

## Browser-Kompatibilität

Unterstützt.
