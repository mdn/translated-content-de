---
title: <xsl:key>
slug: Web/XML/XSLT/Reference/Element/key
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

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

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.2.

## Gecko-Unterstützung

Unterstützt.
