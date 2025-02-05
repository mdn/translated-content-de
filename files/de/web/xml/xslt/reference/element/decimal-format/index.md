---
title: <xsl:decimal-format>
slug: Web/XML/XSLT/Reference/Element/decimal-format
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

Das `<xsl:decimal-format>`-Element definiert die Zeichen und Symbole, die verwendet werden, um Zahlen mithilfe der Funktion `format-number( )` in Zeichenketten umzuwandeln.

## Syntax

```xml
<xsl:decimal-format
  name=NAME
  decimal-separator=CHARACTER
  grouping-separator=CHARACTER
  infinity=STRING
  minus-sign=CHARACTER
  NaN=STRING
  percent=CHARACTER
  per-mille=CHARACTER
  zero-digit=CHARACTER
  digit=CHARACTER
  pattern-separator=CHARACTER />
```

### Erforderliche Attribute

Keine.

### Optionale Attribute

- `name`
  - : Gibt einen Namen für dieses Format an.
- `decimal-separator`
  - : Gibt das Zeichen für den Dezimalpunkt an. Der Standardwert ist `.`.
- `grouping-separator`
  - : Gibt das Zeichen für den Tausendertrennpunkt an. Der Standardwert ist `,`.
- `infinity`
  - : Gibt die Zeichenkette an, die für Unendlichkeit verwendet wird. Der Standardwert ist die Zeichenkette `Infinity`.
- `minus-sign`
  - : Gibt das Zeichen für das Minuszeichen an. Der Standardwert ist der Bindestrich `-`.
- `NaN`
  - : Gibt die Zeichenkette an, die verwendet wird, wenn der Wert keine Zahl ist. Der Standardwert ist die Zeichenkette `NaN`.
- `percent`
  - : Gibt das Zeichen für das Prozentzeichen an. Der Standardwert ist `%`.
- `per-mille`
  - : Gibt das Zeichen für pro Tausend an. Der Standardwert ist `‰`.
- `zero-digit`
  - : Gibt das Zeichen für die Ziffer Null an. Der Standardwert ist `0`.
- `digit`
  - : Gibt das Zeichen an, das im Formatmuster für eine Ziffer steht. Der Standardwert ist `#`.
- `pattern-separator`
  - : Gibt das Zeichen an, das positive und negative Teilmuster in einem Formatmuster trennt. Der Standardwert ist das Semikolon `;`.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.3.

## Gecko-Unterstützung

Unterstützt seit Version 1.0 (Mozilla 1.0, Netscape 7.0).
