---
title: <xsl:key>
slug: Web/XSLT/Element/key
l10n:
  sourceCommit: 91bf979a73463798a0c4bb9045d2d86180cd0a1d
---

{{XsltSidebar}}

Das `<xsl:key>`-Element deklariert einen benannten Schlüssel, der an anderer Stelle im Stylesheet mit der Funktion `key( )` verwendet werden kann.

## Syntax

```xml
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### Erforderliche Attribute

- `name`
  - : Gibt einen Namen für diesen Schlüssel an. Muss ein QName sein.
- `match`
  - : Definiert die Knoten, für die dieser Schlüssel anwendbar ist.
- `use`
  - : Gibt einen XPath-Ausdruck an, der verwendet wird, um den Wert des Schlüssels für jeden der anwendbaren Knoten zu bestimmen.

### Optionale Attribute

Keine.

### Typ

Oberste Ebene, muss das Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.2.

## Browser-Kompatibilität

Unterstützt.
