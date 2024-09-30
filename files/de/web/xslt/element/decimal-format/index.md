---
title: <xsl:decimal-format>
slug: Web/XSLT/Element/decimal-format
l10n:
  sourceCommit: 9df96dcad40bf97f66b317ef6b6bbe64444569eb
---

{{XsltSidebar}}

Das `<xsl:decimal-format>`-Element definiert die Zeichen und Symbole, die bei der Umwandlung von Zahlen in Zeichenketten mit der `format-number()`-Funktion verwendet werden sollen.

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
  - : Gibt das Dezimaltrennzeichen an. Der Standard ist `.`.
- `grouping-separator`
  - : Gibt das Tausendertrennzeichen an. Der Standard ist `,`.
- `infinity`
  - : Gibt die Zeichenfolge an, die verwendet wird, um Unendlichkeit darzustellen. Der Standard ist die Zeichenfolge `Infinity`.
- `minus-sign`
  - : Gibt das Minuszeichen an. Der Standard ist der Bindestrich `-`.
- `NaN`
  - : Gibt die Zeichenfolge an, die verwendet wird, wenn der Wert keine Zahl ist. Der Standard ist die Zeichenfolge `NaN`.
- `percent`
  - : Gibt das Prozentzeichen an. Der Standard ist `%`.
- `per-mille`
  - : Gibt das Promillezeichen an. Der Standard ist `‰`.
- `zero-digit`
  - : Gibt das Zeichen für die Ziffer Null an. Der Standard ist `0`.
- `digit`
  - : Gibt das Zeichen an, das im Formatmuster für eine Ziffer steht. Der Standard ist `#`.
- `pattern-separator`
  - : Gibt das Zeichen an, das positive und negative Submuster in einem Formatmuster trennt. Der Standard ist das Semikolon `;`.

### Typ

Obere Ebene, muss ein Kind von `<xsl:stylesheet>` oder `<xsl:transform>` sein.

## Spezifikationen

XSLT, Abschnitt 12.3.

## Gecko-Unterstützung

Unterstützt ab Version 1.0 (Mozilla 1.0, Netscape 7.0).
