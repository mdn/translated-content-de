---
title: <xsl:key>
slug: Web/XSLT/Reference/Element/key
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:key>`-Element deklariert einen benannten Schlüssel, der an anderer Stelle im Stylesheet mit der `key( )`-Funktion verwendet werden kann.

## Syntax

```xml
<xsl:key name=NAME match=EXPRESSION
  use=EXPRESSION />
```

### Erforderliche Attribute

- `name`
  - : Spezifiziert einen Namen für diesen Schlüssel. Muss ein QName sein.
- `match`
  - : Definiert die Knoten, für die dieser Schlüssel gilt.
- `use`
  - : Gibt einen XPath-Ausdruck an, der verwendet wird, um den Wert des Schlüssels für jeden der zutreffenden Knoten zu bestimmen.

### Optionale Attribute

Keine.

### Typ

Top-Level, muss Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.2.

## Gecko-Unterstützung

Unterstützt.
