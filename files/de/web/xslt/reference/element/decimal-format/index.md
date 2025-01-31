---
title: <xsl:decimal-format>
slug: Web/XSLT/Reference/Element/decimal-format
l10n:
  sourceCommit: 968a8128c76cdae79e17d74e482a426aec1189d2
---

Das `<xsl:decimal-format>`-Element definiert die Zeichen und Symbole, die verwendet werden, um Zahlen mithilfe der `format-number()`-Funktion in Zeichenfolgen umzuwandeln.

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
  - : Spezifiziert einen Namen für dieses Format.
- `decimal-separator`
  - : Spezifiziert das Dezimaltrennzeichen. Der Standardwert ist `.`.
- `grouping-separator`
  - : Spezifiziert das Tausendertrennzeichen. Der Standardwert ist `,`.
- `infinity`
  - : Spezifiziert die Zeichenfolge zur Darstellung von Unendlichkeit. Der Standard ist die Zeichenfolge `Infinity`.
- `minus-sign`
  - : Spezifiziert das Minuszeichen. Der Standard ist der Bindestrich `-`.
- `NaN`
  - : Spezifiziert die Zeichenfolge, wenn der Wert keine Zahl ist. Der Standard ist die Zeichenfolge `NaN`.
- `percent`
  - : Spezifiziert das Prozentzeichen. Der Standardwert ist `%`.
- `per-mille`
  - : Spezifiziert das Promillezeichen. Der Standardwert ist `‰`.
- `zero-digit`
  - : Spezifiziert das Zeichen für die Ziffer Null. Der Standardwert ist `0`.
- `digit`
  - : Spezifiziert das Zeichen, das im Formatmuster für eine Ziffer steht. Der Standardwert ist `#`.
- `pattern-separator`
  - : Spezifiziert das Zeichen, das positive und negative Submuster in einem Formatmuster trennt. Der Standardwert ist das Semikolon `;`.

### Typ

Top-Level, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.3.

## Gecko-Unterstützung

Unterstützt ab Version 1.0 (Mozilla 1.0, Netscape 7.0).
